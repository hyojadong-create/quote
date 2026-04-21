/* =======================================================================
   America Tint – Shop Dashboard
   - URL: /dashboard/?shop=irvine | fullerton | westcovina | chino
   - 3-column Kanban: Waiting / In Progress / Done
   - Tap card to cycle status
   - Auto-refresh every 30s
   ======================================================================= */

/* ── CONFIG ──────────────────────────────────────────────────────────── */
// 🔽 DASHBOARD APPS SCRIPT URL 🔽
const API_URL = 'https://script.google.com/macros/s/AKfycbx96YAzsKNeFxLQf8ybz3yarH6vL46SOFsnYO2_lMHgOoiA77lJY5bY3r_uORFw_1VIeQ/exec';

const SHOP_MAP = {
  irvine:     { label: 'IRVINE',      match: ['irvine']                         },
  fullerton:  { label: 'FULLERTON',   match: ['fullerton']                      },
  westcovina: { label: 'WEST COVINA', match: ['west covina','westcovina','w covina'] },
  chino:      { label: 'CHINO',       match: ['chino']                          },
};

const STATUS_CYCLE = ['waiting', 'progress', 'done'];
const REFRESH_MS   = 30_000;

/* ── STATE ──────────────────────────────────────────────────────────── */
const params = new URLSearchParams(location.search);
const shopKey = (params.get('shop') || 'irvine').toLowerCase();
const shop    = SHOP_MAP[shopKey] || SHOP_MAP.irvine;

let jobs = [];            // [{row, time, name, phone, vehicle, film, shades, total, status}]
let isRefreshing = false;
let refreshTimer = null;

/* ── DOM ────────────────────────────────────────────────────────────── */
const $ = (id) => document.getElementById(id);
const el = {
  shopTag:      $('shopTag'),
  dateBig:      $('dateBig'),
  clock:        $('clock'),
  statsCount:   $('statsCount'),
  statsTotal:   $('statsTotal'),
  refreshBtn:   $('refreshBtn'),
  listWaiting:  $('listWaiting'),
  listProgress: $('listProgress'),
  listDone:     $('listDone'),
  countWaiting: $('countWaiting'),
  countProgress:$('countProgress'),
  countDone:    $('countDone'),
  lastUpdate:   $('lastUpdate'),
  toast:        $('toast'),
};

/* ── UTIL ───────────────────────────────────────────────────────────── */
const pad = (n) => String(n).padStart(2, '0');

function fmtDateLong(d) {
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const days   = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  return `${days[d.getDay()]}, ${months[d.getMonth()]} ${pad(d.getDate())}, ${d.getFullYear()}`;
}

function fmtClock(d) {
  let h = d.getHours();
  const m = pad(d.getMinutes());
  const s = pad(d.getSeconds());
  const ap = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${pad(h)}:${m}:${s} ${ap}`;
}

function fmtMoney(n) {
  const v = Number(n || 0);
  return '$' + v.toLocaleString('en-US', { maximumFractionDigits: 0 });
}

function fmtPhone(p) {
  const d = String(p || '').replace(/\D/g, '');
  if (d.length === 10) return `(${d.slice(0,3)}) ${d.slice(3,6)}-${d.slice(6)}`;
  if (d.length === 11 && d[0] === '1') return `(${d.slice(1,4)}) ${d.slice(4,7)}-${d.slice(7)}`;
  return p || '';
}

function fmtTime(t) {
  if (!t) return '';
  const s = String(t).trim();
  // already "HH:MM AM/PM"
  if (/am|pm/i.test(s)) return s.toUpperCase();
  // Apps Script sends Date objects as "... 14:59:00 GMT..." — find any HH:MM:SS pattern
  const m = s.match(/(\d{1,2}):(\d{2})(?::\d{2})?/);
  if (m) {
    let h = parseInt(m[1], 10);
    const mm = m[2];
    const ap = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return `${h}:${mm} ${ap}`;
  }
  return s;
}

function showToast(msg) {
  el.toast.textContent = msg;
  el.toast.hidden = false;
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => { el.toast.hidden = true; }, 1800);
}

function filmClass(film) {
  const f = String(film || '').toLowerCase();
  if (f.includes('crystalline')) return 'crystalline';
  if (f.includes('ir') || f.includes('3m')) return 'ir';
  if (f.includes('ceramic')) return 'ceramic';
  if (f.includes('carbon')) return 'carbon';
  return '';
}

/* ── RENDER ─────────────────────────────────────────────────────────── */
function renderHeader() {
  el.shopTag.textContent = shop.label;
  document.title = `${shop.label} – America Tint Dashboard`;
  const now = new Date();
  el.dateBig.textContent = fmtDateLong(now);
  el.clock.textContent   = fmtClock(now);
}

function renderClock() {
  el.clock.textContent = fmtClock(new Date());
}

function buildShadeChips(job) {
  const items = [];
  if (job.shade_all)          items.push(['ALL', job.shade_all]);
  if (job.shade_2front)       items.push(['2 FRONT', job.shade_2front]);
  if (job.shade_fwind)        items.push(['F.WIND', job.shade_fwind]);
  if (job.shade_rearwind)     items.push(['R.WIND', job.shade_rearwind]);
  if (job.shade_sunroof)      items.push(['ROOF', job.shade_sunroof]);
  if (job.shade_sunvisor)     items.push(['VISOR', job.shade_sunvisor]);
  if (job.shade_front_quarter)items.push(['F.QTR', job.shade_front_quarter]);
  if (!items.length) return '';
  return `<div class="jc-shades">${items.map(([lbl,v]) =>
    `<span class="shade-chip">${lbl} <b>${v}</b></span>`).join('')}</div>`;
}

function cardHTML(job) {
  const fc = filmClass(job.film);
  const nextLbl = {
    waiting:  '▶ 시작',
    progress: '✓ 완료',
    done:     '↺ 다시',
  }[job.status] || '';

  return `
    <div class="job-card" data-row="${job.row}" data-status="${job.status}">
      <div class="jc-top">
        <div class="jc-time">${fmtTime(job.time) || '—'}</div>
        <div class="jc-total">${fmtMoney(job.total)}</div>
      </div>
      <div class="jc-customer">
        <span>${job.name || '—'}</span>
        <span class="jc-phone">${fmtPhone(job.phone)}</span>
      </div>
      <div class="jc-vehicle">${job.vehicle || '—'}</div>
      ${job.film ? `<div class="jc-film ${fc}">${job.film}</div>` : ''}
      ${buildShadeChips(job)}
      <div class="jc-bottom">
        <span>#${job.row}</span>
        <span class="jc-action-hint">${nextLbl}</span>
      </div>
    </div>
  `;
}

function renderJobs() {
  const buckets = { waiting: [], progress: [], done: [] };
  jobs.forEach(j => (buckets[j.status] || buckets.waiting).push(j));

  // sort by time within each bucket
  const timeKey = (j) => {
    const s = String(j.time || '');
    const m = s.match(/(\d{1,2}):(\d{2})\s*(am|pm)?/i);
    if (!m) return 9999;
    let h = parseInt(m[1], 10);
    const mm = parseInt(m[2], 10);
    const ap = (m[3] || '').toLowerCase();
    if (ap === 'pm' && h < 12) h += 12;
    if (ap === 'am' && h === 12) h = 0;
    return h * 60 + mm;
  };
  Object.values(buckets).forEach(list => list.sort((a,b) => timeKey(a) - timeKey(b)));

  const paint = (list, container, countEl) => {
    countEl.textContent = list.length;
    if (!list.length) {
      container.innerHTML = `<div class="empty-state">비어 있음</div>`;
      return;
    }
    container.innerHTML = list.map(cardHTML).join('');
  };

  paint(buckets.waiting,  el.listWaiting,  el.countWaiting);
  paint(buckets.progress, el.listProgress, el.countProgress);
  paint(buckets.done,     el.listDone,     el.countDone);

  // stats
  el.statsCount.textContent = jobs.length;
  const total = jobs.reduce((s, j) => s + Number(j.total || 0), 0);
  el.statsTotal.textContent = fmtMoney(total);

  // wire clicks
  document.querySelectorAll('.job-card').forEach(c => {
    c.addEventListener('click', onCardClick);
  });
}

/* ── NETWORK ────────────────────────────────────────────────────────── */
async function fetchJobs() {
  if (isRefreshing) return;
  isRefreshing = true;
  el.refreshBtn.classList.add('spin');
  try {
    const url = `${API_URL}?action=list&shop=${encodeURIComponent(shopKey)}&_t=${Date.now()}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || 'API error');
    jobs = (data.jobs || []).map(j => ({
      ...j,
      status: normalizeStatus(j.status),
    }));
    renderJobs();
    el.lastUpdate.textContent = '업데이트: ' + fmtClock(new Date());
  } catch (err) {
    console.error(err);
    el.lastUpdate.textContent = '⚠ 연결 실패 - ' + err.message;
    showToast('⚠ 서버 연결 실패');
  } finally {
    isRefreshing = false;
    el.refreshBtn.classList.remove('spin');
  }
}

function normalizeStatus(s) {
  const v = String(s || '').toLowerCase().trim();
  if (!v) return 'waiting';
  if (v.includes('done') || v.includes('완료') || v === 'complete' || v === 'completed') return 'done';
  if (v.includes('progress') || v.includes('진행') || v === 'in progress' || v === 'working') return 'progress';
  return 'waiting';
}

async function updateStatus(row, newStatus) {
  try {
    const url = `${API_URL}?action=updateStatus&shop=${encodeURIComponent(shopKey)}&row=${row}&status=${newStatus}&_t=${Date.now()}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || 'Update failed');
    return true;
  } catch (err) {
    console.error(err);
    showToast('⚠ 상태 변경 실패');
    return false;
  }
}

/* ── INTERACTIONS ───────────────────────────────────────────────────── */
async function onCardClick(e) {
  const card = e.currentTarget;
  const row = card.dataset.row;
  const cur = card.dataset.status;
  const idx = STATUS_CYCLE.indexOf(cur);
  const next = STATUS_CYCLE[(idx + 1) % STATUS_CYCLE.length];

  // optimistic UI
  card.style.opacity = '0.5';
  card.style.pointerEvents = 'none';

  const ok = await updateStatus(row, next);
  if (ok) {
    const msg = {
      waiting:  '대기로 이동',
      progress: '🔧 작업 시작',
      done:     '✅ 작업 완료',
    }[next];
    showToast(msg);
    // update local state, re-render
    const j = jobs.find(x => String(x.row) === String(row));
    if (j) j.status = next;
    renderJobs();
  } else {
    card.style.opacity = '';
    card.style.pointerEvents = '';
  }
}

el.refreshBtn.addEventListener('click', () => {
  fetchJobs();
});

/* Pause auto-refresh when tab hidden, resume on focus */
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    clearInterval(refreshTimer);
  } else {
    fetchJobs();
    refreshTimer = setInterval(fetchJobs, REFRESH_MS);
  }
});

/* ── BOOT ───────────────────────────────────────────────────────────── */
function init() {
  if (!SHOP_MAP[shopKey]) {
    document.body.innerHTML =
      `<div style="padding:40px;color:#fff;font-family:sans-serif;">` +
      `<h2>알 수 없는 매장: <code>${shopKey}</code></h2>` +
      `<p>URL에 ?shop=irvine, fullerton, westcovina, chino 중 하나를 지정하세요.</p></div>`;
    return;
  }
  if (API_URL.startsWith('REPLACE_')) {
    el.lastUpdate.innerHTML =
      '⚠ <b>app.js 의 API_URL</b> 을 새 Apps Script 배포 URL로 바꿔 주세요.';
  }
  renderHeader();
  setInterval(renderClock, 1000);
  fetchJobs();
  refreshTimer = setInterval(fetchJobs, REFRESH_MS);
}

init();
/* =======================================================================
   America Tint – Shop Dashboard
   - URL: /dashboard/?shop=irvine | fullerton | westcovina | chino
   - 3-column Kanban: Waiting / In Progress / Done
   - Tap card to cycle status
   - Auto-refresh every 30s
   ======================================================================= */

/* ── CONFIG ──────────────────────────────────────────────────────────── */
// 🔽 REPLACE WITH YOUR NEW DASHBOARD APPS SCRIPT URL 🔽
const API_URL = 'https://script.google.com/macros/s/AKfycbyFD5K6Z9UaXgkF3TSm2sO3kc5UU93ui8sZbN3rSW5fSJQvpSryvVSxq3IQzYCDLJ2lAw/exec';

const SHOP_MAP = {
  irvine:     { label: 'IRVINE',      match: ['irvine']                         },
  fullerton:  { label: 'FULLERTON',   match: ['fullerton']                      },
  westcovina: { label: 'WEST COVINA', match: ['west covina','westcovina','w covina'] },
  chino:      { label: 'CHINO',       match: ['chino']                          },
};

const STATUS_CYCLE = ['waiting', 'progress', 'done'];
const REFRESH_MS   = 30_000;

/* ── STATE ──────────────────────────────────────────────────────────── */
const params = new URLSearchParams(location.search);
const shopKey = (params.get('shop') || 'irvine').toLowerCase();
const shop    = SHOP_MAP[shopKey] || SHOP_MAP.irvine;

let jobs = [];            // [{row, time, name, phone, vehicle, film, shades, total, status}]
let isRefreshing = false;
let refreshTimer = null;

/* ── DOM ────────────────────────────────────────────────────────────── */
const $ = (id) => document.getElementById(id);
const el = {
  shopTag:      $('shopTag'),
  dateBig:      $('dateBig'),
  clock:        $('clock'),
  statsCount:   $('statsCount'),
  statsTotal:   $('statsTotal'),
  refreshBtn:   $('refreshBtn'),
  listWaiting:  $('listWaiting'),
  listProgress: $('listProgress'),
  listDone:     $('listDone'),
  countWaiting: $('countWaiting'),
  countProgress:$('countProgress'),
  countDone:    $('countDone'),
  lastUpdate:   $('lastUpdate'),
  toast:        $('toast'),
};

/* ── UTIL ───────────────────────────────────────────────────────────── */
const pad = (n) => String(n).padStart(2, '0');

function fmtDateLong(d) {
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const days   = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  return `${days[d.getDay()]}, ${months[d.getMonth()]} ${pad(d.getDate())}, ${d.getFullYear()}`;
}

function fmtClock(d) {
  let h = d.getHours();
  const m = pad(d.getMinutes());
  const s = pad(d.getSeconds());
  const ap = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${pad(h)}:${m}:${s} ${ap}`;
}

function fmtMoney(n) {
  const v = Number(n || 0);
  return '$' + v.toLocaleString('en-US', { maximumFractionDigits: 0 });
}

function fmtPhone(p) {
  const d = String(p || '').replace(/\D/g, '');
  if (d.length === 10) return `(${d.slice(0,3)}) ${d.slice(3,6)}-${d.slice(6)}`;
  if (d.length === 11 && d[0] === '1') return `(${d.slice(1,4)}) ${d.slice(4,7)}-${d.slice(7)}`;
  return p || '';
}

function fmtTime(t) {
  if (!t) return '';
  const s = String(t).trim();
  // already "HH:MM AM/PM"
  if (/am|pm/i.test(s)) return s.toUpperCase();
  // "HH:MM" or "HH:MM:SS"
  const m = s.match(/^(\d{1,2}):(\d{2})/);
  if (m) {
    let h = parseInt(m[1], 10);
    const mm = m[2];
    const ap = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return `${h}:${mm} ${ap}`;
  }
  return s;
}

function showToast(msg) {
  el.toast.textContent = msg;
  el.toast.hidden = false;
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => { el.toast.hidden = true; }, 1800);
}

function filmClass(film) {
  const f = String(film || '').toLowerCase();
  if (f.includes('crystalline')) return 'crystalline';
  if (f.includes('ir') || f.includes('3m')) return 'ir';
  if (f.includes('ceramic')) return 'ceramic';
  if (f.includes('carbon')) return 'carbon';
  return '';
}

/* ── RENDER ─────────────────────────────────────────────────────────── */
function renderHeader() {
  el.shopTag.textContent = shop.label;
  document.title = `${shop.label} – America Tint Dashboard`;
  const now = new Date();
  el.dateBig.textContent = fmtDateLong(now);
  el.clock.textContent   = fmtClock(now);
}

function renderClock() {
  el.clock.textContent = fmtClock(new Date());
}

function buildShadeChips(job) {
  const items = [];
  if (job.shade_all)          items.push(['ALL', job.shade_all]);
  if (job.shade_2front)       items.push(['2 FRONT', job.shade_2front]);
  if (job.shade_fwind)        items.push(['F.WIND', job.shade_fwind]);
  if (job.shade_rearwind)     items.push(['R.WIND', job.shade_rearwind]);
  if (job.shade_sunroof)      items.push(['ROOF', job.shade_sunroof]);
  if (job.shade_sunvisor)     items.push(['VISOR', job.shade_sunvisor]);
  if (job.shade_front_quarter)items.push(['F.QTR', job.shade_front_quarter]);
  if (!items.length) return '';
  return `<div class="jc-shades">${items.map(([lbl,v]) =>
    `<span class="shade-chip">${lbl} <b>${v}</b></span>`).join('')}</div>`;
}

function cardHTML(job) {
  const fc = filmClass(job.film);
  const nextLbl = {
    waiting:  '▶ 시작',
    progress: '✓ 완료',
    done:     '↺ 다시',
  }[job.status] || '';

  return `
    <div class="job-card" data-row="${job.row}" data-status="${job.status}">
      <div class="jc-top">
        <div class="jc-time">${fmtTime(job.time) || '—'}</div>
        <div class="jc-total">${fmtMoney(job.total)}</div>
      </div>
      <div class="jc-customer">
        <span>${job.name || '—'}</span>
        <span class="jc-phone">${fmtPhone(job.phone)}</span>
      </div>
      <div class="jc-vehicle">${job.vehicle || '—'}</div>
      ${job.film ? `<div class="jc-film ${fc}">${job.film}</div>` : ''}
      ${buildShadeChips(job)}
      <div class="jc-bottom">
        <span>#${job.row}</span>
        <span class="jc-action-hint">${nextLbl}</span>
      </div>
    </div>
  `;
}

function renderJobs() {
  const buckets = { waiting: [], progress: [], done: [] };
  jobs.forEach(j => (buckets[j.status] || buckets.waiting).push(j));

  // sort by time within each bucket
  const timeKey = (j) => {
    const s = String(j.time || '');
    const m = s.match(/(\d{1,2}):(\d{2})\s*(am|pm)?/i);
    if (!m) return 9999;
    let h = parseInt(m[1], 10);
    const mm = parseInt(m[2], 10);
    const ap = (m[3] || '').toLowerCase();
    if (ap === 'pm' && h < 12) h += 12;
    if (ap === 'am' && h === 12) h = 0;
    return h * 60 + mm;
  };
  Object.values(buckets).forEach(list => list.sort((a,b) => timeKey(a) - timeKey(b)));

  const paint = (list, container, countEl) => {
    countEl.textContent = list.length;
    if (!list.length) {
      container.innerHTML = `<div class="empty-state">비어 있음</div>`;
      return;
    }
    container.innerHTML = list.map(cardHTML).join('');
  };

  paint(buckets.waiting,  el.listWaiting,  el.countWaiting);
  paint(buckets.progress, el.listProgress, el.countProgress);
  paint(buckets.done,     el.listDone,     el.countDone);

  // stats
  el.statsCount.textContent = jobs.length;
  const total = jobs.reduce((s, j) => s + Number(j.total || 0), 0);
  el.statsTotal.textContent = fmtMoney(total);

  // wire clicks
  document.querySelectorAll('.job-card').forEach(c => {
    c.addEventListener('click', onCardClick);
  });
}

/* ── NETWORK ────────────────────────────────────────────────────────── */
async function fetchJobs() {
  if (isRefreshing) return;
  isRefreshing = true;
  el.refreshBtn.classList.add('spin');
  try {
    const url = `${API_URL}?action=list&shop=${encodeURIComponent(shopKey)}&_t=${Date.now()}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || 'API error');
    jobs = (data.jobs || []).map(j => ({
      ...j,
      status: normalizeStatus(j.status),
    }));
    renderJobs();
    el.lastUpdate.textContent = '업데이트: ' + fmtClock(new Date());
  } catch (err) {
    console.error(err);
    el.lastUpdate.textContent = '⚠ 연결 실패 - ' + err.message;
    showToast('⚠ 서버 연결 실패');
  } finally {
    isRefreshing = false;
    el.refreshBtn.classList.remove('spin');
  }
}

function normalizeStatus(s) {
  const v = String(s || '').toLowerCase().trim();
  if (!v) return 'waiting';
  if (v.includes('done') || v.includes('완료') || v === 'complete' || v === 'completed') return 'done';
  if (v.includes('progress') || v.includes('진행') || v === 'in progress' || v === 'working') return 'progress';
  return 'waiting';
}

async function updateStatus(row, newStatus) {
  try {
    const url = `${API_URL}?action=updateStatus&shop=${encodeURIComponent(shopKey)}&row=${row}&status=${newStatus}&_t=${Date.now()}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || 'Update failed');
    return true;
  } catch (err) {
    console.error(err);
    showToast('⚠ 상태 변경 실패');
    return false;
  }
}

/* ── INTERACTIONS ───────────────────────────────────────────────────── */
async function onCardClick(e) {
  const card = e.currentTarget;
  const row = card.dataset.row;
  const cur = card.dataset.status;
  const idx = STATUS_CYCLE.indexOf(cur);
  const next = STATUS_CYCLE[(idx + 1) % STATUS_CYCLE.length];

  // optimistic UI
  card.style.opacity = '0.5';
  card.style.pointerEvents = 'none';

  const ok = await updateStatus(row, next);
  if (ok) {
    const msg = {
      waiting:  '대기로 이동',
      progress: '🔧 작업 시작',
      done:     '✅ 작업 완료',
    }[next];
    showToast(msg);
    // update local state, re-render
    const j = jobs.find(x => String(x.row) === String(row));
    if (j) j.status = next;
    renderJobs();
  } else {
    card.style.opacity = '';
    card.style.pointerEvents = '';
  }
}

el.refreshBtn.addEventListener('click', () => {
  fetchJobs();
});

/* Pause auto-refresh when tab hidden, resume on focus */
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    clearInterval(refreshTimer);
  } else {
    fetchJobs();
    refreshTimer = setInterval(fetchJobs, REFRESH_MS);
  }
});

/* ── BOOT ───────────────────────────────────────────────────────────── */
function init() {
  if (!SHOP_MAP[shopKey]) {
    document.body.innerHTML =
      `<div style="padding:40px;color:#fff;font-family:sans-serif;">` +
      `<h2>알 수 없는 매장: <code>${shopKey}</code></h2>` +
      `<p>URL에 ?shop=irvine, fullerton, westcovina, chino 중 하나를 지정하세요.</p></div>`;
    return;
  }
  if (API_URL.startsWith('REPLACE_')) {
    el.lastUpdate.innerHTML =
      '⚠ <b>app.js 의 API_URL</b> 을 새 Apps Script 배포 URL로 바꿔 주세요.';
  }
  renderHeader();
  setInterval(renderClock, 1000);
  fetchJobs();
  refreshTimer = setInterval(fetchJobs, REFRESH_MS);
}

init();
