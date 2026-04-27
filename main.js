// AMERICA TINT — main.js

// ============================================================
// MULTI-LANGUAGE TRANSLATION SYSTEM
// ============================================================
var CURRENT_LANG = 'en';

var TRANSLATIONS = {
  en: {
    nav_about:'About', nav_gallery:'Gallery', nav_films:'Film Types',
    nav_process:'Process', nav_team:'Our Team', nav_locations:'Locations',
    nav_quote:'Get a Quote',
    hero_badge:"Southern California's #1 Window Tint Shop · 4 Locations",
    hero_sub:'Professional window tinting with lifetime warranty options. 4 locations across SoCal — walk in anytime, no appointment needed.',
    hero_btn_loc:'Find a Location', hero_btn_film:'View Film Options',
    hero_stat_loc:'Locations', hero_stat_rating:'Google Rating',
    hero_stat_exp:'Years Experience', hero_stat_warranty:'Lifetime Warranty',
    hero_price_label:'STARTING PRICE', hero_price_sub:'Grand Starting Price',
    hero_no_appt:'NO APPOINTMENT NEEDED', hero_quote_btn:'📋 Get a Quote',
    about_tag:'About Us',
    about_title:'America Tint —<br>The Best Auto Window<br>Tint Shop in SoCal.',
    about_p1:'If you want a cooler cabin, a cleaner look, and lasting protection for your vehicle, <strong style="color:#fff;">America Tint</strong> is your first stop for premium window tint service. We combine top-grade ceramic and carbon films with precision installation to deliver dealership-quality results — without dealership prices.',
    about_p2:'We take on projects others avoid — classic & vintage, luxury and sports cars, EVs, RVs & boats, plus commercial and residential tinting. Backed by a <strong style="color:#fff;">comprehensive warranty</strong> and fast, precise service.',
    about_chip1:'✓ AF Ceramic — Up to 96% Heat Rejection', about_chip2:'✓ 99% UV Protection',
    about_chip3:'✓ Computer-Cut Precision', about_chip4:'✓ Factory Finish',
    about_feat1_title:'Precision Custom Fit · Factory Finish',
    about_feat1_desc:'Plotter-cut patterns matched to your exact year, make, and model. Heat-formed curves, folded edges that resist peeling, and a clean dot-matrix transition — surpassing factory standards.',
    about_feat2_title:'Certified & Meticulous Installation',
    about_feat2_desc:'All work performed in a dust-controlled bay by certified installers. Protective panel covers, safeguarded door cards and sensors, thorough panel prep for crystal-clear results with tight, seamless edges.',
    award_tag:'Recognition', award_title:'3M Dealer of the Year<br>Award 2021',
    award_p:'America Tint was recognized by 3M as <strong style="color:#fff;">Dealer of the Year</strong> for achieving significant sales growth — a testament to our team\'s dedication, quality installations, and the trust our customers place in us every day.',
    award_caption:'Our team receiving the 3M Dealer of the Year Award · 2021',
    why_tag:'Why Us?', why_title:'Why Drivers Choose America Tint',
    why_sub:'We don\'t just tint windows — we deliver precision, quality, and confidence every time.',
    why1_title:'Premium Materials Only', why1_desc:'Ceramic and carbon tint films for real heat rejection and 99% UV protection. Name-brand films in the right shade for every need and budget.',
    why2_title:'Precision Fit, Factory Finish', why2_desc:'Plotter-cut patterns matched to your exact year/make/model. Heat-formed curves, tucked edges, and clean dot-matrix transitions every time.',
    why3_title:'Certified, Careful Installers', why3_desc:'Dust-controlled bays, protected door cards and sensors, and meticulous panel prep so you leave with crystal-clear glass and tight seams.',
    why4_title:'Honest Quotes and Timelines', why4_desc:'Clear pricing, realistic ETAs, and appointments that start and finish on time. No surprises — just straightforward service.',
    films_tag:'Our Films', films_title:'Window Tinting — Ceramic & Carbon',
    films_sub:'Beat the heat, protect your interior, and reduce glare with films that actually perform. Every install includes careful prep, plotter-cut precision, heat-forming, and a final bright-light inspection.',
    proc_tag:'Process', proc_title:'Our Proven Process',
    proc1_title:'Consultation & Design', proc1_desc:'We align on goals, shade/finish, and legal guidelines. You\'ll feel the difference between carbon and ceramic with a quick heat-lamp demo.',
    proc2_title:'Deep Prep', proc2_desc:'Foam wash, clay, iron removal, and lint-free glass prep for a perfect, contamination-free surface before any film is applied.',
    proc3_title:'Precision Install', proc3_desc:'Plotter patterns plus hand-finishing. Heat-forming for curves, careful seam placement, and attention to ADAS cameras and defroster lines.',
    proc4_title:'Quality Check', proc4_desc:'Bright-light inspection on every panel, edge, and contour. We fix what others miss before you ever see it.',
    proc5_title:'Delivery & Aftercare', proc5_desc:'You leave with simple care instructions and warranty details. We\'re here for quick checkups if you ever need them.',
    tech_tag:'Our Team', tech_title:'Expert Technicians. Every Car.',
    tech_sub:'Every vehicle that comes through our bays is handled by a certified, experienced installer — no rookies, no shortcuts.',
    tech1_label:'Years of Combined Experience', tech1_desc:'Our installers have refined their craft over decades, handling everything from daily drivers to rare exotics and commercial fleets.',
    tech2_label:'3M Certified Installers', tech2_desc:'Authorized by 3M to install the full Crystalline and Ceramic IR series. Certified knowledge of film chemistry, heat-forming, and quality standards.',
    tech3_label:'Advanced Vehicle Specialists', tech3_desc:'Trained to work safely around ADAS cameras, rain sensors, defroster lines, and frameless windows on EVs, luxury cars, and specialty trims.',
    tech4_label:'Dust-Controlled Installation', tech4_desc:'Every install happens in a climate-controlled, dust-free environment. Protective covers, careful panel handling, and a bright-light final inspection — every single time.',
    aftercare_tag:'Aftercare', aftercare_title:'Aftercare That<br>Keeps It Perfect',
    aftercare_p:'Simple steps to protect your investment and keep your tint looking factory-fresh for years.',
    aftercare1_title:'Tint Aftercare', aftercare1_desc:'Avoid rolling windows down until curing completes (we\'ll give a weather-based ETA). Clean with ammonia-free glass cleaner and soft microfiber cloth.',
    gallery_tag:'Our Work', gallery_title:'See the Difference',
    gallery_sub:'Real cars. Real results. Every install by our in-house certified technicians at America Tint.',
    gallery_more_btn:'📷 See More Photos',
    tesla_title:'Tesla Experts.<br>Done Right. Done Fast.',
    tesla_sub:'Most shops hesitate or schedule Teslas for days out — we don\'t. Our technicians have completed hundreds of Tesla installs and know every frameless window, panoramic roof, and ADAS sensor by heart.',
    tesla_why1:'<strong>Fast turnaround</strong> — where other shops need days, we deliver same-day or next-day precision installs on every Tesla model.',
    tesla_why2:'<strong>Sensor-safe every time</strong> — cameras, Autopilot sensors, and defroster lines protected throughout the process.',
    tesla_why3:'<strong>Hundreds of Teslas completed</strong> — our installers know Tesla fitment inside out, no trial-and-error, no surprises.',
    tesla_btn:'Book Your Tesla Now',
    serve_tag:'Proudly Serving', serve_title:'Who We Serve',
    serve_p:'Daily drivers, EV owners, performance enthusiasts, families, and business fleets who expect real results: cooler cabins and a finish that looks factory — today and years from now.',
    serve_btn:'Get In Touch',
    faq_tag:"FAQ's", faq_title:'Frequently Asked Questions',
    faq1_q:'How long does an appointment take?',
    faq1_a:'Most full vehicle tint jobs take 2–4 hours depending on the car and film type. We\'ll give you a realistic time estimate when you call or come in.',
    faq2_q:'Ceramic vs. carbon tint — what\'s right for me?',
    faq2_a:'Carbon film is a great step up from basic tint — better heat rejection and no signal interference. Ceramic takes it further with significantly higher infrared rejection, keeping your cabin noticeably cooler.',
    faq3_q:'Will tint affect sensors, cameras, or defrosters?',
    faq3_a:'Our ceramic and carbon films do not interfere with GPS, cell signals, or electronic sensors. We carefully work around ADAS cameras and defroster lines during every installation.',
    faq4_q:'Is window tint legal in California?',
    faq4_a:'Yes — California law allows tinting on rear and side windows. Front side windows must allow more than 70% light in. We\'ll walk you through legal shade options during your consultation.',
    faq5_q:'Can you fix bad or bubbly tint?',
    faq5_a:'Absolutely. We offer professional tint removal and re-tint to restore clarity and protect your defroster lines. Ask about our removal service when you call.',
    faq6_q:'How do I get a quote?',
    faq6_a:'Get an instant estimate right here — click the <strong style="color:#c8a96e;cursor:pointer;" onclick="openQuoteModal()">Get a Quote</strong> button, select your vehicle, film, and windows. Walk-ins always welcome at all 4 locations!',
    loc_tag:'4 Locations · SoCal', loc_title:'Find Us Near You',
    loc_sub:'Serving Orange County and the San Gabriel Valley. Walk-ins welcome at all locations!',
    loc_quote_btn:'📋 Get a Quote',
    cta_title:'Ready to Get Started?',
    cta_p:'Book online or call for a quick quote. Tell us your year/make/model and we\'ll confirm options, timeline, and a firm price — no surprises.',
    cta_btn:'Get a Free Quote',
    modal_tag:'Free Estimate', modal_title:'Get a Quote',
    modal_sub:'Select vehicle type, film &amp; windows for an instant estimate — No surprises.',
    modal_step1:'① Select Location', modal_step2:'② Select Vehicle',
    modal_step2b:'② — Select Tesla Model', modal_step3:'③ Select Film',
    modal_step4:'④ Select Windows', modal_req_btn:'📨 Send Quote Request',
    toast_msg:'✓ Request sent! We\'ll contact you shortly.',
    modal_sunroof_note:'⚠ Panoramic sunroof pricing varies by vehicle. Final price confirmed on-site based on single large or split-panel configuration.',
    modal_est_label:'Estimated Total',
    modal_est_placeholder:'Please select above',
    modal_disclaimer:'* This is an estimated quote. Final price may vary based on vehicle condition, age, luxury vehicles, existing tint removal, etc. Visit us or contact us for an exact quote.',
    modal_suv_sub:'Same Price',
    modal_label_name:'Your Name *', modal_ph_name:'John Smith',
    modal_label_phone:'Phone Number *',
    modal_label_loc:'Preferred Location', modal_loc_any:'Any location',
    modal_label_msg:'Message (Optional)', modal_ph_msg:'Any questions or special requests...',
    modal_or_call:'Or call us directly',
    modal_ts_select:'Please select a Tesla model',
    modal_select_above:'Please select above',
    modal_contact_us:'Please contact us directly',
    modal_select_area:'Please select window area',
  },

  ko: {
    nav_about:'소개', nav_gallery:'갤러리', nav_films:'필름 종류',
    nav_process:'시공 과정', nav_team:'우리 팀', nav_locations:'지점 찾기',
    nav_quote:'견적 받기',
    hero_badge:'남캘리포니아 1위 윈도우 틴트샵 · 4개 지점',
    hero_sub:'평생 보증 옵션을 갖춘 전문 윈도우 틴팅. SoCal 4개 지점 운영 — 예약 없이 언제든지 방문하세요.',
    hero_btn_loc:'지점 찾기', hero_btn_film:'필름 종류 보기',
    hero_stat_loc:'지점', hero_stat_rating:'구글 평점',
    hero_stat_exp:'년 경력', hero_stat_warranty:'평생 보증',
    hero_price_label:'시작 가격', hero_price_sub:'그랜드 오픈 특가',
    hero_no_appt:'예약 불필요', hero_quote_btn:'📋 견적 받기',
    about_tag:'어바웃',
    about_title:'America Tint —<br>남캘리포니아 최고의<br>윈도우 틴트샵.',
    about_p1:'시원한 실내, 깔끔한 외관, 차량 보호를 원하신다면 <strong style="color:#fff;">America Tint</strong>가 첫 번째 선택입니다. 고급 세라믹·카본 필름과 정밀 시공으로 딜러십 수준의 결과를 합리적인 가격에 제공합니다.',
    about_p2:'다른 곳에서 꺼리는 작업도 거뜬히 — 클래식·빈티지, 럭셔리·스포츠카, EV, RV·보트, 상업용·주거용 틴팅까지. <strong style="color:#fff;">포괄적 보증</strong>과 빠르고 정밀한 서비스로 뒷받침합니다.',
    about_chip1:'✓ AF 세라믹 — 열차단 최대 96%', about_chip2:'✓ UV 차단 99%',
    about_chip3:'✓ 컴퓨터 커팅 정밀 시공', about_chip4:'✓ 공장 마감 수준',
    about_feat1_title:'정밀 맞춤 시공 · 공장 마감',
    about_feat1_desc:'차종·연식·모델에 맞춘 플로터 커팅 패턴. 열성형 곡선, 들뜸 없는 접힌 엣지, 깔끔한 도트매트릭스 전환으로 공장 기준을 초월합니다.',
    about_feat2_title:'인증된 꼼꼼한 시공',
    about_feat2_desc:'방진 부스에서 인증 기술자가 직접 시공. 패널 커버와 도어 트림·센서 보호, 철저한 전처리로 깨끗하고 빈틈없는 결과를 보장합니다.',
    award_tag:'수상', award_title:'3M 올해의 딜러<br>어워드 2021',
    award_p:'America Tint는 뛰어난 매출 성장을 인정받아 3M으로부터 <strong style="color:#fff;">올해의 딜러</strong>로 선정되었습니다. 팀의 헌신과 고품질 시공, 고객의 신뢰 덕분입니다.',
    award_caption:'3M 올해의 딜러 어워드 수상 · 2021년',
    why_tag:'왜 저희인가?', why_title:'드라이버들이 America Tint를 선택하는 이유',
    why_sub:'단순히 틴팅만 하는 게 아닙니다 — 매번 정밀함, 품질, 신뢰를 제공합니다.',
    why1_title:'최고급 필름만 사용', why1_desc:'세라믹·카본 틴트 필름으로 실질적인 열차단과 99% UV 차단. 모든 필요와 예산에 맞는 브랜드 필름.',
    why2_title:'정밀 맞춤, 공장 마감', why2_desc:'차종·연식에 맞춘 플로터 커팅. 열성형 곡선, 깔끔한 엣지와 도트매트릭스 전환.',
    why3_title:'인증된 세심한 기술자', why3_desc:'방진 부스, 보호된 도어 트림·센서, 꼼꼼한 전처리로 맑은 유리와 빈틈없는 엣지를 보장합니다.',
    why4_title:'정직한 견적과 일정', why4_desc:'명확한 가격, 현실적인 소요 시간, 예정대로 시작하고 끝나는 서비스. 추가 비용 없는 투명한 서비스.',
    films_tag:'우리 필름', films_title:'윈도우 틴팅 — 세라믹 & 카본',
    films_sub:'실제로 성능을 발휘하는 필름으로 열기를 차단하고 실내를 보호하며 눈부심을 줄이세요. 모든 시공에는 꼼꼼한 전처리, 플로터 정밀 커팅, 열성형, 최종 밝은빛 검수가 포함됩니다.',
    proc_tag:'시공 과정', proc_title:'검증된 시공 프로세스',
    proc1_title:'상담 & 디자인', proc1_desc:'목표, 농도/마감, 법적 기준을 함께 확인합니다. 열램프 시연으로 카본과 세라믹의 차이를 직접 느껴보세요.',
    proc2_title:'전처리', proc2_desc:'폼 세정, 클레이 작업, 철분 제거, 먼지 없는 유리 전처리로 완벽하고 오염 없는 표면을 만듭니다.',
    proc3_title:'정밀 시공', proc3_desc:'플로터 패턴과 수작업 마감. 곡선 열성형, 꼼꼼한 이음새 배치, ADAS 카메라와 열선 주의.',
    proc4_title:'품질 검수', proc4_desc:'모든 패널, 엣지, 윤곽을 밝은빛으로 검사합니다. 다른 곳에서 놓치는 것을 저희가 먼저 잡아냅니다.',
    proc5_title:'인도 & 사후 관리', proc5_desc:'간단한 관리 방법과 보증 안내를 드리고 차량을 인도합니다. 언제든지 점검이 필요하면 찾아오세요.',
    tech_tag:'우리 팀', tech_title:'전문 기술자. 모든 차량.',
    tech_sub:'저희 부스를 통과하는 모든 차량은 인증된 숙련 기술자가 담당합니다 — 신입 없음, 지름길 없음.',
    tech1_label:'합산 경력', tech1_desc:'수십 년에 걸쳐 기술을 다듬은 기술자들이 일반 차량부터 희귀 익조틱과 상용 차량까지 처리합니다.',
    tech2_label:'3M 인증 기술자', tech2_desc:'3M Crystalline 및 Ceramic IR 시리즈 공식 시공 인가. 필름 화학, 열성형, 품질 기준에 대한 인증된 지식.',
    tech3_label:'첨단 차량 전문가', tech3_desc:'EV, 럭셔리카, 특수 트림의 ADAS 카메라, 빗물 센서, 열선, 프레임리스 유리 주변을 안전하게 작업하도록 훈련.',
    tech4_label:'방진 시공 환경', tech4_desc:'모든 시공은 온도 제어된 먼지 없는 환경에서 이루어집니다. 보호 커버, 꼼꼼한 패널 취급, 밝은빛 최종 검수 — 매번.',
    aftercare_tag:'사후 관리', aftercare_title:'완벽함을 유지하는<br>사후 관리',
    aftercare_p:'투자를 보호하고 수년간 틴트를 공장처럼 새것으로 유지하는 간단한 방법.',
    aftercare1_title:'틴트 관리법', aftercare1_desc:'경화 완료 전까지 창문을 내리지 마세요 (날씨 기반 예상 시간 안내). 암모니아 없는 유리 세정제와 부드러운 극세사 천으로 닦으세요.',
    gallery_tag:'시공 사례', gallery_title:'차이를 직접 확인하세요',
    gallery_sub:'실제 차량, 실제 결과물. America Tint 사내 인증 기술자의 모든 시공.',
    gallery_more_btn:'📷 사진 더 보기',
    tesla_title:'테슬라 전문가.<br>제대로. 빠르게.',
    tesla_sub:'대부분의 샵은 테슬라 예약을 며칠씩 잡거나 망설입니다 — 저희는 다릅니다. 수백 대의 테슬라 시공 경험으로 프레임리스 유리, 파노라믹 루프, ADAS 센서를 완벽히 파악하고 있습니다.',
    tesla_why1:'<strong>빠른 작업</strong> — 다른 샵이 며칠이 걸리는 작업을 당일 또는 익일 정밀 시공으로 완료합니다.',
    tesla_why2:'<strong>센서 안전 보장</strong> — 카메라, 오토파일럿 센서, 열선이 시공 내내 보호됩니다.',
    tesla_why3:'<strong>수백 대 시공 완료</strong> — 기술자들이 테슬라 피팅을 완벽히 파악. 시행착오 없이 정확하게.',
    tesla_btn:'테슬라 예약하기',
    serve_tag:'고객', serve_title:'저희 고객',
    serve_p:'일상 운전자, EV 오너, 퍼포먼스 매니아, 가족, 기업 차량까지 — 시원한 실내와 공장 같은 마감을 기대하는 모든 분들을 위해 일합니다.',
    serve_btn:'문의하기',
    faq_tag:'자주 묻는 질문', faq_title:'자주 묻는 질문',
    faq1_q:'시공 시간은 얼마나 걸리나요?',
    faq1_a:'대부분의 전체 시공은 차종과 필름에 따라 2~4시간 소요됩니다. 전화 또는 방문 시 현실적인 시간을 안내해 드립니다.',
    faq2_q:'세라믹 vs. 카본 — 어떤 것이 맞나요?',
    faq2_a:'카본 필름은 기본 틴트보다 한 단계 위 — 더 나은 열차단과 신호 간섭 없음. 세라믹은 적외선 차단율이 훨씬 높아 실내가 눈에 띄게 시원합니다.',
    faq3_q:'틴트가 센서, 카메라, 열선에 영향을 주나요?',
    faq3_a:'저희 세라믹·카본 필름은 GPS, 셀 신호, 전자 센서에 간섭하지 않습니다. 모든 시공에서 ADAS 카메라와 열선을 주의깊게 작업합니다.',
    faq4_q:'캘리포니아에서 윈도우 틴트는 합법인가요?',
    faq4_a:'네 — 캘리포니아 법은 후방 및 측면 창문 틴팅을 허용합니다. 앞 측면 창문은 빛 투과율 70% 이상이어야 합니다. 상담 시 합법적인 농도를 안내해 드립니다.',
    faq5_q:'불량 또는 기포 있는 틴트를 수정할 수 있나요?',
    faq5_a:'물론입니다. 전문 틴트 제거 및 재시공으로 명확함을 회복하고 열선을 보호합니다. 전화 시 제거 서비스를 문의하세요.',
    faq6_q:'견적은 어떻게 받나요?',
    faq6_a:'웹사이트에서 <strong style="color:#c8a96e;cursor:pointer;" onclick="openQuoteModal()">견적 받기</strong> 버튼을 클릭하고 차종, 필름, 부위를 선택하면 즉시 견적이 나옵니다. 4개 지점 모두 워크인 환영!',
    loc_tag:'4개 지점 · SoCal', loc_title:'가까운 지점 찾기',
    loc_sub:'오렌지 카운티와 샌가브리엘 밸리 서비스. 모든 지점 워크인 환영!',
    loc_quote_btn:'📋 견적 받기',
    cta_title:'시작할 준비가 됐나요?',
    cta_p:'온라인 예약 또는 전화로 빠른 견적을 받으세요. 차종·연식·모델을 알려주시면 옵션, 일정, 확정 가격을 바로 안내해 드립니다.',
    cta_btn:'무료 견적 받기',
    modal_tag:'무료 견적', modal_title:'견적 받기',
    modal_sub:'차종·필름·부위를 선택하면 바로 견적이 나와요 — 추가 비용 없음.',
    modal_step1:'① 지점 선택', modal_step2:'② 차종 선택',
    modal_step2b:'② — 테슬라 모델 선택', modal_step3:'③ 필름 선택',
    modal_step4:'④ 시공 부위 선택', modal_req_btn:'📨 견적 요청 보내기',
    toast_msg:'✓ 요청이 전송되었습니다! 곧 연락드리겠습니다.',
    modal_sunroof_note:'⚠ 파노라믹 썬루프는 차량에 따라 가격이 달라집니다. 한 장짜리 대형 또는 분리형 여부에 따라 현장 확인 후 최종 견적 안내드립니다.',
    modal_est_label:'총 예상 금액',
    modal_est_placeholder:'위에서 선택해 주세요',
    modal_disclaimer:'* 위 금액은 예상 견적이며, 차량 상태·연식·올드카·럭셔리 차량·기존 틴트 제거 등의 경우 실제 가격이 달라질 수 있습니다. 정확한 견적은 방문 또는 문의 후 확인 가능합니다.',
    modal_suv_sub:'같은 가격',
    modal_label_name:'이름 *', modal_ph_name:'홍길동',
    modal_label_phone:'전화번호 *',
    modal_label_loc:'선호 지점', modal_loc_any:'모든 지점',
    modal_label_msg:'메시지 (선택)', modal_ph_msg:'궁금한 점이나 특별 요청 사항...',
    modal_or_call:'또는 직접 전화',
    modal_ts_select:'테슬라 모델을 선택해 주세요',
    modal_select_above:'위에서 선택해 주세요',
    modal_contact_us:'직접 문의해 주세요',
    modal_select_area:'부위를 선택해 주세요',
  },

  es: {
    nav_about:'Nosotros', nav_gallery:'Galería', nav_films:'Tipos de Film',
    nav_process:'Proceso', nav_team:'Nuestro Equipo', nav_locations:'Ubicaciones',
    nav_quote:'Cotización',
    hero_badge:'El Taller #1 de Polarizado en SoCal · 4 Ubicaciones',
    hero_sub:'Polarizado profesional con opciones de garantía de por vida. 4 ubicaciones en SoCal — entre sin cita, cuando quiera.',
    hero_btn_loc:'Encontrar Ubicación', hero_btn_film:'Ver Tipos de Film',
    hero_stat_loc:'Ubicaciones', hero_stat_rating:'Calificación Google',
    hero_stat_exp:'Años de Experiencia', hero_stat_warranty:'Garantía de por Vida',
    hero_price_label:'PRECIO DESDE', hero_price_sub:'Gran Inauguración',
    hero_no_appt:'SIN CITA PREVIA', hero_quote_btn:'📋 Obtener Cotización',
    about_tag:'Sobre Nosotros',
    about_title:'America Tint —<br>El Mejor Taller de<br>Polarizado en SoCal.',
    about_p1:'Si quiere un habitáculo más fresco, un look más limpio y protección duradera para su vehículo, <strong style="color:#fff;">America Tint</strong> es su primera opción. Combinamos films cerámicos y de carbono de primera calidad con instalación de precisión.',
    about_p2:'Asumimos proyectos que otros evitan — clásicos, autos de lujo, EVs, RVs y botes, más polarizado comercial y residencial. Respaldado por una <strong style="color:#fff;">garantía completa</strong>.',
    about_chip1:'✓ AF Cerámico — Hasta 96% Rechazo de Calor', about_chip2:'✓ 99% Protección UV',
    about_chip3:'✓ Corte por Computadora', about_chip4:'✓ Acabado de Fábrica',
    about_feat1_title:'Ajuste Personalizado · Acabado de Fábrica',
    about_feat1_desc:'Patrones cortados por plotter para su año, marca y modelo exacto. Curvas formadas con calor, bordes doblados resistentes al pelado y transición de matriz limpia.',
    about_feat2_title:'Instalación Certificada y Meticulosa',
    about_feat2_desc:'Todo el trabajo realizado en una bahía controlada por polvo por instaladores certificados. Cubiertas protectoras de paneles y sensores, preparación minuciosa.',
    award_tag:'Reconocimiento', award_title:'Premio 3M Distribuidor<br>del Año 2021',
    award_p:'America Tint fue reconocida por 3M como <strong style="color:#fff;">Distribuidor del Año</strong> por lograr un crecimiento significativo en ventas — testimonio de la dedicación de nuestro equipo.',
    award_caption:'Nuestro equipo recibiendo el Premio 3M Distribuidor del Año · 2021',
    why_tag:'¿Por Qué Nosotros?', why_title:'Por Qué los Conductores Eligen America Tint',
    why_sub:'No solo polarizamos ventanas — entregamos precisión, calidad y confianza cada vez.',
    why1_title:'Solo Materiales Premium', why1_desc:'Films cerámicos y de carbono para rechazo real de calor y 99% de protección UV. Films de marca en el tono adecuado.',
    why2_title:'Ajuste Preciso, Acabado de Fábrica', why2_desc:'Patrones cortados para su año/marca/modelo exacto. Curvas formadas con calor, bordes perfectos.',
    why3_title:'Instaladores Certificados y Cuidadosos', why3_desc:'Bahías controladas por polvo, sensores protegidos, preparación meticulosa para vidrio cristalino.',
    why4_title:'Cotizaciones y Tiempos Honestos', why4_desc:'Precios claros, ETAs realistas y citas que comienzan y terminan a tiempo. Sin sorpresas.',
    films_tag:'Nuestros Films', films_title:'Polarizado — Cerámico y Carbono',
    films_sub:'Combata el calor, proteja su interior y reduzca el deslumbramiento con films que realmente funcionan.',
    proc_tag:'Proceso', proc_title:'Nuestro Proceso Probado',
    proc1_title:'Consulta y Diseño', proc1_desc:'Alineamos objetivos, tono/acabado y directrices legales. Sienta la diferencia entre carbono y cerámico.',
    proc2_title:'Preparación Profunda', proc2_desc:'Lavado con espuma, arcilla, remoción de hierro y preparación del vidrio sin pelusa.',
    proc3_title:'Instalación de Precisión', proc3_desc:'Patrones de plotter más acabado manual. Formación de calor, costuras cuidadosas y atención a cámaras ADAS.',
    proc4_title:'Control de Calidad', proc4_desc:'Inspección con luz brillante en cada panel. Arreglamos lo que otros pierden.',
    proc5_title:'Entrega y Cuidado', proc5_desc:'Se va con instrucciones de cuidado y detalles de garantía. Estamos aquí para revisiones.',
    tech_tag:'Nuestro Equipo', tech_title:'Técnicos Expertos. Cada Auto.',
    tech_sub:'Cada vehículo es manejado por un instalador certificado y experimentado — sin novatos, sin atajos.',
    tech1_label:'Años de Experiencia Combinada', tech1_desc:'Instaladores que han perfeccionado su oficio durante décadas, desde vehículos cotidianos hasta exóticos.',
    tech2_label:'Instaladores Certificados 3M', tech2_desc:'Autorizados por 3M para instalar la serie Crystalline y Ceramic IR. Conocimiento certificado.',
    tech3_label:'Especialistas en Vehículos Avanzados', tech3_desc:'Capacitados para ADAS, sensores de lluvia, desfogadores y ventanas sin marco en EVs y autos de lujo.',
    tech4_label:'Instalación en Ambiente Controlado', tech4_desc:'Cada instalación en ambiente sin polvo con temperatura controlada. Inspección final con luz brillante.',
    aftercare_tag:'Cuidado Post-Instalación', aftercare_title:'Cuidado que<br>Mantiene la Perfección',
    aftercare_p:'Pasos simples para proteger su inversión y mantener el polarizado como nuevo por años.',
    aftercare1_title:'Cuidado del Polarizado', aftercare1_desc:'Evite bajar las ventanas hasta que cure (le daremos un ETA). Limpie con limpiador sin amoníaco y paño de microfibra.',
    gallery_tag:'Nuestro Trabajo', gallery_title:'Vea la Diferencia',
    gallery_sub:'Autos reales. Resultados reales. Cada instalación por nuestros técnicos certificados en America Tint.',
    gallery_more_btn:'📷 Ver Más Fotos',
    tesla_title:'Expertos en Tesla.<br>Bien Hecho. Rápido.',
    tesla_sub:'La mayoría de los talleres dudan con Teslas — nosotros no. Nuestros técnicos han completado cientos de instalaciones en Tesla y conocen cada detalle.',
    tesla_why1:'<strong>Entrega rápida</strong> — instalaciones precisas el mismo día o al día siguiente en todos los modelos.',
    tesla_why2:'<strong>Sensores seguros siempre</strong> — cámaras, sensores de Autopilot y desfogadores protegidos durante todo el proceso.',
    tesla_why3:'<strong>Cientos de Teslas completados</strong> — sin prueba y error, sin sorpresas.',
    tesla_btn:'Reserve su Tesla Ahora',
    serve_tag:'Servimos con Orgullo', serve_title:'A Quién Servimos',
    serve_p:'Conductores diarios, propietarios de EVs, entusiastas, familias y flotas empresariales que esperan resultados reales.',
    serve_btn:'Contáctenos',
    faq_tag:'Preguntas Frecuentes', faq_title:'Preguntas Frecuentes',
    faq1_q:'¿Cuánto tiempo toma una cita?',
    faq1_a:'La mayoría de los trabajos completos toman 2–4 horas. Le daremos una estimación realista cuando llame o venga.',
    faq2_q:'Cerámico vs. carbono — ¿cuál es el adecuado para mí?',
    faq2_a:'El carbono es un gran paso adelante — mejor rechazo de calor y sin interferencia. El cerámico tiene rechazo infrarrojo significativamente mayor, manteniendo el habitáculo más fresco.',
    faq3_q:'¿El polarizado afectará sensores o cámaras?',
    faq3_a:'Nuestros films no interfieren con GPS, señales de celular o sensores electrónicos. Trabajamos cuidadosamente alrededor de las cámaras ADAS.',
    faq4_q:'¿Es legal el polarizado en California?',
    faq4_a:'Sí — la ley permite polarizado en ventanas traseras y laterales. Las ventanas delanteras deben permitir más del 70% de luz. Le orientaremos sobre opciones legales.',
    faq5_q:'¿Pueden arreglar un polarizado malo o con burbujas?',
    faq5_a:'Por supuesto. Ofrecemos remoción profesional y repolarizado para restaurar la claridad y proteger los desfogadores.',
    faq6_q:'¿Cómo obtengo una cotización?',
    faq6_a:'Haga clic en <strong style="color:#c8a96e;cursor:pointer;" onclick="openQuoteModal()">Obtener Cotización</strong> y seleccione su vehículo, film y ventanas. ¡Entrada libre siempre bienvenida!',
    loc_tag:'4 Ubicaciones · SoCal', loc_title:'Encuéntrenos Cerca de Usted',
    loc_sub:'¡Atendiendo Orange County y San Gabriel Valley. Entrada libre en todas las ubicaciones!',
    loc_quote_btn:'📋 Obtener Cotización',
    cta_title:'¿Listo para Comenzar?',
    cta_p:'Reserve en línea o llame para una cotización rápida. Díganos su año/marca/modelo y confirmaremos opciones, tiempo y precio firme.',
    cta_btn:'Obtener Cotización Gratis',
    modal_tag:'Estimado Gratis', modal_title:'Obtener Cotización',
    modal_sub:'Seleccione vehículo, film y ventanas para una estimación instantánea — Sin sorpresas.',
    modal_step1:'① Seleccionar Ubicación', modal_step2:'② Seleccionar Vehículo',
    modal_step2b:'② — Seleccionar Modelo Tesla', modal_step3:'③ Seleccionar Film',
    modal_step4:'④ Seleccionar Ventanas', modal_req_btn:'📨 Enviar Solicitud',
    toast_msg:'✓ ¡Solicitud enviada! Nos pondremos en contacto pronto.',
    modal_sunroof_note:'⚠ El precio del techo panorámico varía según el vehículo. El precio final se confirma en el sitio.',
    modal_est_label:'Total Estimado',
    modal_est_placeholder:'Por favor seleccione arriba',
    modal_disclaimer:'* Esta es una estimación. El precio final puede variar según el estado del vehículo, eliminación de tinte existente, etc.',
    modal_suv_sub:'Mismo Precio',
    modal_label_name:'Su Nombre *', modal_ph_name:'Juan García',
    modal_label_phone:'Número de Teléfono *',
    modal_label_loc:'Ubicación Preferida', modal_loc_any:'Cualquier ubicación',
    modal_label_msg:'Mensaje (Opcional)', modal_ph_msg:'Preguntas o solicitudes especiales...',
    modal_or_call:'O llámenos directamente',
    modal_ts_select:'Por favor seleccione un modelo Tesla',
    modal_select_above:'Por favor seleccione arriba',
    modal_contact_us:'Contáctenos directamente',
    modal_select_area:'Por favor seleccione el área',
  },

  zh: {
    nav_about:'关于我们', nav_gallery:'案例展示', nav_films:'贴膜种类',
    nav_process:'施工流程', nav_team:'我们的团队', nav_locations:'门店位置',
    nav_quote:'获取报价',
    hero_badge:'南加州第一窗膜专门店 · 4家门店',
    hero_sub:'专业汽车贴膜，提供终身保修选项。南加州4家门店 — 无需预约，随时欢迎到店。',
    hero_btn_loc:'查找门店', hero_btn_film:'查看贴膜类型',
    hero_stat_loc:'门店', hero_stat_rating:'谷歌评分',
    hero_stat_exp:'年经验', hero_stat_warranty:'终身保修',
    hero_price_label:'起始价格', hero_price_sub:'盛大开业特价',
    hero_no_appt:'无需预约', hero_quote_btn:'📋 获取报价',
    about_tag:'关于我们',
    about_title:'America Tint —<br>南加州最佳<br>汽车贴膜店。',
    about_p1:'想要更凉爽的车厢、更清爽的外观和持久的车辆保护？<strong style="color:#fff;">America Tint</strong> 是您的首选。我们将顶级陶瓷和碳纤维贴膜与精密施工相结合，以合理价格实现经销商级别的效果。',
    about_p2:'我们承接其他店铺不敢做的项目 — 经典/复古车、豪华/跑车、电动车、房车/游艇，以及商业和住宅贴膜。提供<strong style="color:#fff;">全面保修</strong>和快速精准的服务。',
    about_chip1:'✓ AF陶瓷膜 — 最高96%隔热率', about_chip2:'✓ 99% UV防护',
    about_chip3:'✓ 电脑精准裁切', about_chip4:'✓ 原厂级别工艺',
    about_feat1_title:'精密定制 · 原厂工艺',
    about_feat1_desc:'根据您的车型、年份和型号精准裁切。热成型弯曲、防翘边折叠和清晰点阵过渡，超越原厂标准。',
    about_feat2_title:'认证精细施工',
    about_feat2_desc:'在防尘施工间由认证技师完成所有工作。保护面板罩、车门饰板和传感器，彻底预处理确保清晰无缝的效果。',
    award_tag:'荣誉认证', award_title:'3M年度最佳经销商<br>奖项 2021',
    award_p:'America Tint因实现显著销售增长而被3M认定为<strong style="color:#fff;">年度最佳经销商</strong>，这是对我们团队奉献精神、高质量施工以及客户信任的最好证明。',
    award_caption:'我们团队荣获3M年度最佳经销商奖 · 2021年',
    why_tag:'为什么选择我们？', why_title:'车主选择America Tint的原因',
    why_sub:'我们不只是贴膜 — 每次都提供精准、品质和信心。',
    why1_title:'只用顶级材料', why1_desc:'陶瓷和碳纤维贴膜实现真正的隔热和99% UV防护。适合各种需求和预算的品牌膜。',
    why2_title:'精密贴合，原厂工艺', why2_desc:'按照您的车型/年份/型号精准裁切。热成型弯曲，完美边缘和点阵过渡。',
    why3_title:'认证细心的技师', why3_desc:'防尘施工间，保护车门饰板和传感器，细致预处理，确保水晶般清晰的玻璃和无缝边缘。',
    why4_title:'诚实的报价和时间', why4_desc:'清晰定价、合理工期、按时开始完成的服务。没有惊喜，只有直接的服务。',
    films_tag:'我们的贴膜', films_title:'汽车贴膜 — 陶瓷膜 & 碳纤维膜',
    films_sub:'用真正发挥效能的贴膜抵御高温、保护内饰、减少眩光。每次施工都包含细致预处理、电脑精准裁切、热成型和最终亮光检验。',
    proc_tag:'施工流程', proc_title:'我们的专业施工流程',
    proc1_title:'咨询 & 设计', proc1_desc:'确认目标、颜色/工艺和法规要求。通过热灯演示让您亲身感受碳纤维膜和陶瓷膜的区别。',
    proc2_title:'深度预处理', proc2_desc:'泡沫清洗、粘土处理、铁粉去除和无尘玻璃预处理，打造完美无污染的表面。',
    proc3_title:'精密施工', proc3_desc:'绘图仪图案加手工收边。热成型弯曲，精心处理接缝，注意ADAS摄像头和除雾线。',
    proc4_title:'质量检验', proc4_desc:'在亮光下检查每个面板、边缘和轮廓。我们在您看到之前就修复别人遗漏的问题。',
    proc5_title:'交车 & 售后', proc5_desc:'交车时提供简单的保养说明和保修详情。如有需要，随时欢迎回来检查。',
    tech_tag:'我们的团队', tech_title:'专业技师。每辆爱车。',
    tech_sub:'每辆经过我们施工间的车辆都由认证的经验丰富的技师负责 — 没有新手，没有捷径。',
    tech1_label:'合计从业年限', tech1_desc:'技师们历经数十年磨练技艺，处理从日常用车到稀有跑车和商用车队的各种项目。',
    tech2_label:'3M认证技师', tech2_desc:'获3M授权安装完整的Crystalline和Ceramic IR系列。具备贴膜化学、热成型和质量标准的认证知识。',
    tech3_label:'先进车辆专家', tech3_desc:'接受过在电动车、豪华车和特殊型号的ADAS摄像头、雨量传感器、除雾线和无框玻璃周围安全作业的专业培训。',
    tech4_label:'防尘施工环境', tech4_desc:'所有施工在温控防尘环境中进行。保护罩、细心处理面板和亮光最终检验 — 每次都是如此。',
    aftercare_tag:'售后保养', aftercare_title:'保持完美的<br>售后保养',
    aftercare_p:'简单步骤保护您的投资，让贴膜多年保持如新状态。',
    aftercare1_title:'贴膜保养须知', aftercare1_desc:'固化完成前请勿摇下车窗（我们会根据天气给出预计时间）。使用不含氨的玻璃清洁剂和柔软超细纤维布擦拭。',
    gallery_tag:'施工案例', gallery_title:'亲眼见证差异',
    gallery_sub:'真实车辆。真实效果。America Tint内部认证技师的每一次施工。',
    gallery_more_btn:'📷 查看更多照片',
    tesla_title:'特斯拉专家。<br>精准。快速。',
    tesla_sub:'大多数店铺对特斯拉犹豫不决或排期数日 — 我们不同。我们的技师完成了数百台特斯拉施工，对每个无框玻璃、全景天窗和ADAS传感器了如指掌。',
    tesla_why1:'<strong>快速交付</strong> — 其他店铺需要数天的工作，我们当天或次日完成精准施工。',
    tesla_why2:'<strong>传感器安全保证</strong> — 摄像头、Autopilot传感器和除雾线在整个施工过程中受到保护。',
    tesla_why3:'<strong>数百台特斯拉完工</strong> — 技师对特斯拉安装了如指掌，无需试错，没有意外。',
    tesla_btn:'立即预约特斯拉',
    serve_tag:'我们服务的客户', serve_title:'我们服务的客户',
    serve_p:'日常驾驶者、电动车车主、性能爱好者、家庭用户和企业车队 — 所有期待真实效果的人：更凉爽的车厢和原厂级别的工艺。',
    serve_btn:'联系我们',
    faq_tag:'常见问题', faq_title:'常见问题',
    faq1_q:'施工需要多长时间？',
    faq1_a:'大多数整车贴膜工作根据车型和贴膜类型需要2-4小时。来电或到店时我们会给您一个实际的时间估计。',
    faq2_q:'陶瓷膜 vs 碳纤维膜 — 哪种适合我？',
    faq2_a:'碳纤维膜是基础贴膜的重大升级 — 更好的隔热和无信号干扰。陶瓷膜更进一步，红外线阻隔率显著更高，让车厢明显更凉爽。',
    faq3_q:'贴膜会影响传感器、摄像头或除雾线吗？',
    faq3_a:'我们的陶瓷和碳纤维贴膜不会干扰GPS、手机信号或电子传感器。每次施工都会小心处理ADAS摄像头和除雾线周围。',
    faq4_q:'在加州贴窗膜合法吗？',
    faq4_a:'是的 — 加州法律允许对后窗和侧窗贴膜。前侧窗必须允许70%以上的光线透入。我们会在咨询时引导您了解合法的颜色选项。',
    faq5_q:'可以修复劣质或起泡的贴膜吗？',
    faq5_a:'当然可以。我们提供专业的贴膜去除和重新贴膜服务，以恢复清晰度并保护除雾线。来电时请询问去除服务。',
    faq6_q:'如何获取报价？',
    faq6_a:'点击<strong style="color:#c8a96e;cursor:pointer;" onclick="openQuoteModal()">获取报价</strong>按钮，选择您的车型、贴膜和窗户，即可立即获得估价。4家门店均无需预约，随时欢迎到店！',
    loc_tag:'4家门店 · 南加州', loc_title:'查找附近门店',
    loc_sub:'服务奥兰治县和圣盖博谷。所有门店均无需预约！',
    loc_quote_btn:'📋 获取报价',
    cta_title:'准备好开始了吗？',
    cta_p:'在线预约或致电获取快速报价。告诉我们您的车型/年份/型号，我们将当场确认选项、时间和确定价格 — 没有惊喜。',
    cta_btn:'获取免费报价',
    modal_tag:'免费估价', modal_title:'获取报价',
    modal_sub:'选择车型、贴膜和窗户，即时获得估价 — 无隐藏费用。',
    modal_step1:'① 选择门店', modal_step2:'② 选择车型',
    modal_step2b:'② — 选择特斯拉型号', modal_step3:'③ 选择贴膜',
    modal_step4:'④ 选择施工部位', modal_req_btn:'📨 发送报价请求',
    toast_msg:'✓ 请求已发送！我们将尽快与您联系。',
    modal_sunroof_note:'⚠ 全景天窗价格因车型而异，现场确认尺寸后报最终价格。',
    modal_est_label:'预计总价',
    modal_est_placeholder:'请在上方选择',
    modal_disclaimer:'* 以上为预估报价，实际价格可能因车辆状况、车龄、豪华车型、去除旧膜等因素有所不同。请来店或联系我们获取准确报价。',
    modal_suv_sub:'相同价格',
    modal_label_name:'姓名 *', modal_ph_name:'张三',
    modal_label_phone:'电话号码 *',
    modal_label_loc:'首选门店', modal_loc_any:'任意门店',
    modal_label_msg:'留言（可选）', modal_ph_msg:'有什么问题或特殊要求...',
    modal_or_call:'或直接致电我们',
    modal_ts_select:'请选择特斯拉车型',
    modal_select_above:'请在上方选择',
    modal_contact_us:'请直接联系我们',
    modal_select_area:'请选择施工部位',
  },

  ja: {
    nav_about:'概要', nav_gallery:'ギャラリー', nav_films:'フィルム種類',
    nav_process:'施工工程', nav_team:'チーム', nav_locations:'店舗',
    nav_quote:'見積もり',
    hero_badge:'南カリフォルニア No.1 ウィンドウフィルム専門店 · 4店舗',
    hero_sub:'生涯保証オプション付きのプロフェッショナルウィンドウフィルム施工。SoCal 4店舗 — 予約不要、いつでもお気軽にどうぞ。',
    hero_btn_loc:'店舗を探す', hero_btn_film:'フィルムを見る',
    hero_stat_loc:'店舗', hero_stat_rating:'Google評価',
    hero_stat_exp:'年の経験', hero_stat_warranty:'生涯保証',
    hero_price_label:'開始価格', hero_price_sub:'グランドオープン特価',
    hero_no_appt:'予約不要', hero_quote_btn:'📋 見積もりを取る',
    about_tag:'私たちについて',
    about_title:'America Tint —<br>SoCal最高の<br>ウィンドウフィルム店。',
    about_p1:'涼しい車内、クリーンな外観、車両保護をお望みなら、<strong style="color:#fff;">America Tint</strong>がプレミアムウィンドウフィルムサービスの最初の選択肢です。最高品質のセラミック・カーボンフィルムと精密施工でディーラーレベルの仕上がりを実現。',
    about_p2:'他店が敬遠する作業も引き受けます — クラシック・ヴィンテージ、高級・スポーツカー、EV、RV・ボート、商業・住宅用フィルムまで。<strong style="color:#fff;">包括的な保証</strong>と迅速・正確なサービス。',
    about_chip1:'✓ AFセラミック — 最大96%熱遮断', about_chip2:'✓ 99% UV保護',
    about_chip3:'✓ コンピューターカット精密施工', about_chip4:'✓ 工場仕上げ品質',
    about_feat1_title:'精密カスタムフィット · 工場仕上げ',
    about_feat1_desc:'車種・年式・モデルに合わせたプロッターカットパターン。熱成形カーブ、剥がれにくいエッジ、クリーンなドットマトリックス処理。',
    about_feat2_title:'認定済みの丁寧な施工',
    about_feat2_desc:'防塵ブースで認定施工士が作業。保護カバー、ドアカード・センサーの保護、徹底した下処理でクリスタルクリアな仕上がり。',
    award_tag:'受賞', award_title:'3M 年間最優秀ディーラー賞<br>2021年',
    award_p:'America Tintは大幅な売上成長を達成し、3Mから<strong style="color:#fff;">年間最優秀ディーラー</strong>として認定されました。チームの献身と品質施工、顧客の信頼の証です。',
    award_caption:'3M年間最優秀ディーラー賞受賞 · 2021年',
    why_tag:'なぜ当店？', why_title:'ドライバーがAmerica Tintを選ぶ理由',
    why_sub:'単にフィルムを貼るだけではありません — 毎回、精密さ・品質・信頼をお届けします。',
    why1_title:'プレミアム素材のみ使用', why1_desc:'セラミック・カーボンフィルムで本物の熱遮断と99% UV保護。あらゆるニーズに合ったブランドフィルム。',
    why2_title:'精密フィット・工場仕上げ', why2_desc:'車種・年式に合わせたプロッターカット。熱成形カーブ、完璧なエッジ。',
    why3_title:'認定・丁寧な施工士', why3_desc:'防塵ブース、保護されたセンサー、丁寧な下処理でクリスタルクリアな仕上がり。',
    why4_title:'正直な見積もりとスケジュール', why4_desc:'明確な価格、現実的な所要時間、予定通りの施工。追加料金なし。',
    films_tag:'取り扱いフィルム', films_title:'ウィンドウフィルム — セラミック & カーボン',
    films_sub:'実際に性能を発揮するフィルムで熱を遮断し、内装を保護し、眩しさを軽減します。',
    proc_tag:'施工工程', proc_title:'実証済み施工プロセス',
    proc1_title:'相談 & デザイン', proc1_desc:'目標、濃度・仕上げ、法的ガイドラインを確認。ヒートランプデモで違いを実感。',
    proc2_title:'下処理', proc2_desc:'フォーム洗浄、クレイ処理、鉄粉除去、ほこりのないガラス下処理で完璧な表面を作ります。',
    proc3_title:'精密施工', proc3_desc:'プロッターパターン＋手仕上げ。カーブの熱成形、ADASカメラとデフロスターラインへの注意。',
    proc4_title:'品質検査', proc4_desc:'全パネル、エッジ、輪郭を明るい光で検査。他店が見落とすものを修正。',
    proc5_title:'納車 & アフターケア', proc5_desc:'簡単なケア方法と保証書をお渡しして納車。いつでも点検にお越しください。',
    tech_tag:'チーム', tech_title:'プロ技術者。全車両対応。',
    tech_sub:'当店を通過するすべての車両は、認定を受けた経験豊富な施工士が担当 — 新人なし、手抜きなし。',
    tech1_label:'合計経験年数', tech1_desc:'数十年にわたって技術を磨いた施工士が、日常車から希少なエキゾチックカー、商用車まで対応。',
    tech2_label:'3M認定施工士', tech2_desc:'3M CrystallineとCeramic IRシリーズの公式施工資格。フィルム化学・熱成形の認定知識。',
    tech3_label:'先進車両スペシャリスト', tech3_desc:'ADAS、雨滴センサー、デフロスター、フレームレスウィンドウを安全に作業。',
    tech4_label:'防塵施工環境', tech4_desc:'全施工は温度管理された防塵環境で実施。保護カバー、明るい光での最終検査。',
    aftercare_tag:'アフターケア', aftercare_title:'完璧を維持する<br>アフターケア',
    aftercare_p:'投資を保護し、フィルムを何年も新品のように維持するための簡単なステップ。',
    aftercare1_title:'フィルムのケア', aftercare1_desc:'硬化が完了するまで窓を下げないでください。アンモニアフリーのクリーナーと柔らかいマイクロファイバーで拭いてください。',
    gallery_tag:'施工実績', gallery_title:'違いを確認してください',
    gallery_sub:'本物の車。本物の結果。America Tintの認定技術者による全施工。',
    gallery_more_btn:'📷 写真をもっと見る',
    tesla_title:'テスラのエキスパート。<br>正確に。素早く。',
    tesla_sub:'ほとんどの店はテスラを数日後に予約したり躊躇します — 私たちは違います。数百台のテスラ施工経験があります。',
    tesla_why1:'<strong>迅速な対応</strong> — 他店が数日かかる作業を当日または翌日の精密施工でお届け。',
    tesla_why2:'<strong>センサー安全保証</strong> — カメラ、オートパイロットセンサー、デフロスターラインが施工中ずっと保護。',
    tesla_why3:'<strong>数百台の実績</strong> — 施工士がテスラのフィッティングを完全に把握。試行錯誤なし。',
    tesla_btn:'テスラを今すぐ予約',
    serve_tag:'対象のお客様', serve_title:'対象のお客様',
    serve_p:'日常ドライバー、EVオーナー、パフォーマンス愛好家、ファミリー、法人車両 — 本物の結果を期待する全ての方のために。',
    serve_btn:'お問い合わせ',
    faq_tag:'よくある質問', faq_title:'よくある質問',
    faq1_q:'施工時間はどのくらいかかりますか？',
    faq1_a:'ほとんどの全車両施工は2〜4時間かかります。お電話またはご来店時に所要時間をお伝えします。',
    faq2_q:'セラミック vs. カーボン — どちらが適していますか？',
    faq2_a:'カーボンは基本的なティントより一段上 — 熱遮断と信号干渉なし。セラミックはさらに赤外線遮断率が大幅に高く、車内が明らかに涼しくなります。',
    faq3_q:'フィルムはセンサーやカメラに影響しますか？',
    faq3_a:'セラミック・カーボンフィルムはGPS、携帯信号、電子センサーに干渉しません。ADASカメラとデフロスターラインを丁寧に作業します。',
    faq4_q:'カリフォルニアでウィンドウフィルムは合法ですか？',
    faq4_a:'はい — 後部・側面窓のフィルムを許可。前部側面窓は70%以上の光透過率が必要です。合法的な濃度をご案内します。',
    faq5_q:'不良または気泡のあるフィルムを修正できますか？',
    faq5_a:'もちろんです。専門的なフィルム除去と再施工で透明度を回復し、デフロスターラインを保護します。',
    faq6_q:'見積もりはどのように取れますか？',
    faq6_a:'<strong style="color:#c8a96e;cursor:pointer;" onclick="openQuoteModal()">見積もりを取る</strong>ボタンをクリックして車種、フィルム、部位を選択すると即座に見積もりが出ます。4店舗すべてで予約なし歓迎！',
    loc_tag:'4店舗 · SoCal', loc_title:'お近くの店舗を探す',
    loc_sub:'オレンジ郡とサンガブリエルバレーをカバー。全店舗で予約不要！',
    loc_quote_btn:'📋 見積もりを取る',
    cta_title:'始める準備はできましたか？',
    cta_p:'オンライン予約またはお電話で素早い見積もりを。車種・年式・モデルをお伝えください。',
    cta_btn:'無料見積もりを取る',
    modal_tag:'無料見積もり', modal_title:'見積もりを取る',
    modal_sub:'車種・フィルム・部位を選択すると即座に見積もりが出ます — 追加料金なし。',
    modal_step1:'① 店舗を選択', modal_step2:'② 車種を選択',
    modal_step2b:'② — テスラモデルを選択', modal_step3:'③ フィルムを選択',
    modal_step4:'④ 施工部位を選択', modal_req_btn:'📨 見積もりリクエストを送る',
    toast_msg:'✓ リクエストが送信されました！すぐにご連絡します。',
    modal_sunroof_note:'⚠ パノラミックサンルーフの料金は車種により異なります。現地確認後に最終価格をご案内します。',
    modal_est_label:'推定合計',
    modal_est_placeholder:'上記から選択してください',
    modal_disclaimer:'* 上記は推定見積もりです。車両の状態・年式・高級車・既存フィルム除去等により実際の価格が異なる場合があります。正確な見積もりはご来店またはお問い合わせください。',
    modal_suv_sub:'同じ価格',
    modal_label_name:'お名前 *', modal_ph_name:'山田 太郎',
    modal_label_phone:'電話番号 *',
    modal_label_loc:'ご希望の店舗', modal_loc_any:'どの店舗でも',
    modal_label_msg:'メッセージ（任意）', modal_ph_msg:'ご質問や特別なご要望...',
    modal_or_call:'または直接お電話ください',
    modal_ts_select:'テスラモデルを選択してください',
    modal_select_above:'上記から選択してください',
    modal_contact_us:'直接お問い合わせください',
    modal_select_area:'施工部位を選択してください',
  }
};

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  CURRENT_LANG = lang;
  // Update ALL lang buttons (nav + hero mobile)
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  // Apply translations
  var t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  // Apply placeholder translations
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  // Update quote total placeholder text if currently showing default
  var totalEl = document.getElementById('quoteTotalAmount');
  if (totalEl && !totalEl.getAttribute('data-computed')) {
    totalEl.textContent = t['modal_est_placeholder'] || 'Please select above';
  }
  // Save preference
  try { localStorage.setItem('at_lang', lang); } catch(e) {}
}

function initLang() {
  var saved = 'en';
  try { saved = localStorage.getItem('at_lang') || 'en'; } catch(e) {}
  if (TRANSLATIONS[saved]) setLang(saved);
}

// ============================================================
// QUOTE MODAL — Pricing Calculator
// ============================================================

// ============================================================
// 지점별 가격 오버라이드
// null = 표준 가격 사용, 숫자 = 해당 지점 전용 가격
// ============================================================
var LOCATION_OVERRIDES = {
  "fullerton": {
    "regular": {
      "sedan": {
        "front2": 60,
        "backWS": null,
        "sunroof": 50,
        "visor": 50
      },
      "suv": {
        "front2": 80,
        "backWS": null,
        "sunroof": 50,
        "visor": 50
      },
      "van": {
        "front2": 80,
        "backWS": null,
        "sunroof": 50,
        "visor": 50
      }
    },
    "carbon": {
      "sedan": {
        "front2": 80,
        "backWS": null,
        "sunroof": 70,
        "visor": 60
      },
      "suv": {
        "front2": 120,
        "backWS": null,
        "sunroof": 70,
        "visor": 60
      },
      "van": {
        "front2": 120,
        "backWS": null,
        "sunroof": 70,
        "visor": 60
      }
    },
    "ceramic": {
      "sedan": {
        "front2": 120,
        "backWS": null,
        "sunroof": 100,
        "visor": 70
      },
      "suv": {
        "front2": 150,
        "backWS": null,
        "sunroof": 100,
        "visor": 70
      },
      "van": {
        "front2": 150,
        "backWS": null,
        "sunroof": 100,
        "visor": 70
      }
    },
    "ceramic3m": null,
    "crystalline": null
  },
  "irvine": {
    "regular": null,
    "carbon": {
      "sedan": {
        "front2": 120
      },
      "suv": {
        "full": 345,
        "front2": 120
      },
      "van": {
        "full": 345,
        "front2": 120
      }
    },
    "ceramic": {
      "sedan": {
        "full": 395
      },
      "suv": {
        "full": 445
      },
      "van": {
        "full": 495
      }
    },
    "ceramic3m": {
      "sedan": {
        "full": 595
      },
      "suv": {
        "full": 745
      },
      "van": {
        "full": 795
      }
    },
    "crystalline": {
      "sedan": {
        "full": 845
      },
      "suv": {
        "full": 995
      },
      "van": {
        "full": 1045
      }
    }
  },
  "westcovina": {
    "regular": {
      "sedan": {
        "front2": 60,
        "backWS": null,
        "sunroof": 50,
        "visor": 50
      },
      "suv": {
        "front2": 80,
        "backWS": null,
        "sunroof": 50,
        "visor": 50
      },
      "van": {
        "front2": 80,
        "backWS": null,
        "sunroof": 50,
        "visor": 50
      }
    },
    "carbon": {
      "sedan": {
        "front2": 80,
        "backWS": null,
        "sunroof": 70,
        "visor": 60
      },
      "suv": {
        "front2": 120,
        "backWS": null,
        "sunroof": 70,
        "visor": 60
      },
      "van": {
        "front2": 120,
        "backWS": null,
        "sunroof": 70,
        "visor": 60
      }
    },
    "ceramic": {
      "sedan": {
        "front2": 120,
        "backWS": null,
        "sunroof": 100,
        "visor": 70
      },
      "suv": {
        "front2": 150,
        "backWS": null,
        "sunroof": 100,
        "visor": 70
      },
      "van": {
        "front2": 150,
        "backWS": null,
        "sunroof": 100,
        "visor": 70
      }
    },
    "ceramic3m": null,
    "crystalline": null
  },
  "chino": {
    "regular": {
      "sedan": {
        "front2": 60,
        "backWS": null,
        "sunroof": 50,
        "visor": 50
      },
      "suv": {
        "front2": 80,
        "backWS": null,
        "sunroof": 50,
        "visor": 50
      },
      "van": {
        "front2": 80,
        "backWS": null,
        "sunroof": 50,
        "visor": 50
      }
    },
    "carbon": {
      "sedan": {
        "front2": 80,
        "backWS": null,
        "sunroof": 70,
        "visor": 60
      },
      "suv": {
        "front2": 120,
        "backWS": null,
        "sunroof": 70,
        "visor": 60
      },
      "van": {
        "front2": 120,
        "backWS": null,
        "sunroof": 70,
        "visor": 60
      }
    },
    "ceramic": {
      "sedan": {
        "front2": 120,
        "backWS": null,
        "sunroof": 100,
        "visor": 70
      },
      "suv": {
        "front2": 150,
        "backWS": null,
        "sunroof": 100,
        "visor": 70
      },
      "van": {
        "front2": 150,
        "backWS": null,
        "sunroof": 100,
        "visor": 70
      }
    },
    "ceramic3m": null,
    "crystalline": null
  }
};

// undefined = 오버라이드 없음 (표준 가격 사용)
// null      = 명시적 N/A (해당 지점에서 서비스 안 함)
// 숫자      = 해당 지점 전용 가격
function getLocationPrice(film, vehicle, part) {
  var loc = document.querySelector('input[name="location"]:checked');
  if (!loc) return undefined;
  var locData = LOCATION_OVERRIDES[loc.value];
  if (!locData) return undefined;
  var filmData = locData[film];
  if (!filmData) return undefined;
  var vData = filmData[vehicle];
  if (!vData) return undefined;
  return (part in vData) ? vData[part] : undefined;
}

function updateLocationUI() {
  var loc = document.querySelector('input[name="location"]:checked');
  var banner = document.getElementById('grandOpeningBanner');
  if (loc && loc.value === '__disabled__') {
    banner.style.display = 'block';
  } else {
    banner.style.display = 'none';
  }
  updateQuotePrice();
}

// Price table: QUOTE_PRICES[film][vehicle][part]
// null = not available / quarter: price per 1 piece
var QUOTE_PRICES = {
  regular: {
    sedan: { full:145, front2:150,  frontWS:null, backWS:null, sunroof:50,  visor:50,  quarter:10 },
    suv:   { full:185, front2:150,  frontWS:null, backWS:null, sunroof:50,  visor:50,  quarter:10 },
    van:   { full:215, front2:150,  frontWS:null, backWS:null, sunroof:50,  visor:50,  quarter:10 },
    tesla: null
  },
  carbon: {
    sedan: { full:245, front2:150,  frontWS:null, backWS:100,  sunroof:70,  visor:60,  quarter:15 },
    suv:   { full:295, front2:150,  frontWS:null, backWS:100,  sunroof:70,  visor:60,  quarter:15 },
    van:   { full:345, front2:150,  frontWS:null, backWS:100,  sunroof:70,  visor:60,  quarter:15 },
    tesla: null
  },
  ceramic: {
    sedan: { full:345, front2:150, frontWS:245, backWS:140,  sunroof:100, visor:70,  quarter:20 },
    suv:   { full:395, front2:150, frontWS:285, backWS:140,  sunroof:100, visor:70,  quarter:20 },
    van:   { full:445, front2:150, frontWS:285, backWS:140,  sunroof:100, visor:70,  quarter:20 },
    tesla: { full:395, front2:150, frontWS:245, backWS:140,  sunroof:395, visor:70,  quarter:20 }
  },
  ceramic3m: {
    sedan: { full:545, front2:195, frontWS:345, backWS:245,  sunroof:150, visor:90,  quarter:30 },
    suv:   { full:695, front2:245, frontWS:395, backWS:295,  sunroof:150, visor:90,  quarter:30 },
    van:   { full:745, front2:245, frontWS:395, backWS:295,  sunroof:150, visor:90,  quarter:30 },
    tesla: { full:695, front2:245, frontWS:345, backWS:245,  sunroof:595, visor:null, quarter:30 }
  },
  crystalline: {
    sedan: { full:795, front2:295, frontWS:445, backWS:345,  sunroof:200, visor:null, quarter:50 },
    suv:   { full:945, front2:345, frontWS:495, backWS:395,  sunroof:200, visor:null, quarter:50 },
    van:   { full:995, front2:345, frontWS:495, backWS:395,  sunroof:200, visor:null, quarter:50 },
    tesla: { full:995, front2:345, frontWS:445, backWS:345,  sunroof:795, visor:null, quarter:50 }
  }
};

// ============================================================
// 테슬라 모델별 가격표 (model → film → part)
// ============================================================
// ─────────────────────────────────────────────────────────────
// 테슬라 모델별 가격표
// null = N/A (해당 모델/필름 조합에서 서비스 없음)
// front2  = 앞 2장
// frontWS = 전면 윈드쉴드
// sunroof = 선루프/파노라믹
// ─────────────────────────────────────────────────────────────
var TESLA_PRICES = {

  // ── Model 3 ──────────────────────────────────────────────
  // All: Ceramic $495 / 3M $795 / Crystalline $1,400
  // Front WS: Ceramic $245 / 3M $345 / Crystalline —
  // 2 Front:  Ceramic $150 / 3M $245 / Crystalline —
  // Sunroof: Ceramic $200  Visor: $70
  model3: {
    ceramic:    { full:495,  front2:150, frontWS:245,  sunroof:200, visor:70,   quarter:20 },
    ceramic3m:  { full:795,  front2:245, frontWS:345,  sunroof:null, visor:null, quarter:30 },
    crystalline:{ full:1400, front2:null, frontWS:null, sunroof:null, visor:null, quarter:50 }
  },

  // ── Model S ──────────────────────────────────────────────
  // All:      Ceramic $395 / 3M $595 / Crystalline $795
  // Front WS: Ceramic $200
  // Sunroof:  Ceramic $395 / 3M $495 / Crystalline $795
  // Visor: $70
  modelS: {
    ceramic:    { full:395,  front2:150,  frontWS:200, sunroof:395,  visor:70,   quarter:20 },
    ceramic3m:  { full:595,  front2:245,  frontWS:null, sunroof:495,  visor:null, quarter:30 },
    crystalline:{ full:795,  front2:null,  frontWS:null, sunroof:795,  visor:null, quarter:50 }
  },

  // ── Model Y ──────────────────────────────────────────────
  // All:    Ceramic $395 / 3M $695 / Crystalline $995
  // Sunroof: Ceramic $395 / 3M $595 / Crystalline $795
  // Front WS: Ceramic $285
  // 2 Front: Ceramic $150 / 3M $245 / Crystalline $295
  // 쪽유리 없음
  modelY: {
    ceramic:    { full:395,  front2:150,  frontWS:285, sunroof:395,  visor:null, quarter:null },
    ceramic3m:  { full:695,  front2:245,  frontWS:null, sunroof:595,  visor:null, quarter:null },
    crystalline:{ full:995,  front2:295,  frontWS:null, sunroof:795,  visor:null, quarter:null }
  },

  // ── Model X ──────────────────────────────────────────────
  // All:      Ceramic $495 / 3M $795 / Crystalline $1,400
  // Front WS: Ceramic $550 / 3M $795 / Crystalline $1,400
  // Sunroof:  Ceramic $200 / 3M $295 / Crystalline $695
  // 2 Front:  Ceramic $150 / 3M $275 / Crystalline $345
  modelX: {
    ceramic:    { full:495,  front2:150,  frontWS:550,  sunroof:200,  visor:null, quarter:20 },
    ceramic3m:  { full:795,  front2:275,  frontWS:795,  sunroof:295,  visor:null, quarter:30 },
    crystalline:{ full:1400, front2:345,  frontWS:1400, sunroof:695,  visor:null, quarter:50 }
  },

  // ── Cybertruck ───────────────────────────────────────────
  // All:      Ceramic $495 / 3M $795  / Crystalline $995
  // Front WS: Ceramic $750 / 3M $950  / Crystalline $1,400
  // Sunroof:  Ceramic $495 / 3M $750  / Crystalline $795
  // 2 Front:  Ceramic $150 / 3M $275  / Crystalline $345
  // Quarter:  Ceramic $50  / 3M $100  / Crystalline $150
  cyber: {
    ceramic:    { full:495,  front2:150,  frontWS:750,  sunroof:495,  visor:null, quarter:50  },
    ceramic3m:  { full:795,  front2:275,  frontWS:950,  sunroof:750,  visor:null, quarter:100 },
    crystalline:{ full:995,  front2:345,  frontWS:1400, sunroof:795,  visor:null, quarter:150 }
  }
};

function getQuoteSelections() {
  var vt = document.querySelector('input[name="vehicleType"]:checked');
  var ft = document.querySelector('input[name="filmType"]:checked');
  var tm = document.querySelector('input[name="teslaModel"]:checked');
  return {
    vehicle:    vt ? vt.value : null,
    film:       ft ? ft.value : null,
    teslaModel: tm ? tm.value : null
  };
}

// 차종+필름에 맞는 가격 데이터 반환 (Tesla는 모델별 테이블 사용)
function getVehicleData(sel) {
  if (!sel.vehicle || !sel.film) return null;
  if (sel.vehicle === 'tesla') {
    if (!sel.teslaModel) return null;
    var tmd = TESLA_PRICES[sel.teslaModel];
    return tmd ? (tmd[sel.film] || null) : null;
  }
  var filmData = QUOTE_PRICES[sel.film];
  return filmData ? (filmData[sel.vehicle] || null) : null;
}

// Tesla 선택 시 Ceramic 이상만 활성화 (Regular·Carbon 비활성)
var TESLA_FILMS = ['ceramic', 'ceramic3m', 'crystalline'];

function updateFilmOptions() {
  var vt = document.querySelector('input[name="vehicleType"]:checked');
  var isTesla = vt && vt.value === 'tesla';

  // Tesla 모델 서브선택 표시/숨김
  var teslaRow = document.getElementById('teslaModelRow');
  if (teslaRow) teslaRow.style.display = isTesla ? '' : 'none';
  // Tesla 아닐 때 모델 선택 초기화
  if (!isTesla) {
    document.querySelectorAll('input[name="teslaModel"]').forEach(function(r){ r.checked = false; });
  }

  var filmLabels = document.querySelectorAll('.quote-film');
  var anyChecked = false;
  filmLabels.forEach(function(label) {
    var input = label.querySelector('input');
    if (!input) return;
    var allowed = !isTesla || TESLA_FILMS.indexOf(input.value) !== -1;
    if (!allowed) {
      label.style.opacity = '0.3';
      label.style.pointerEvents = 'none';
      input.disabled = true;
      if (input.checked) input.checked = false;
    } else {
      label.style.opacity = '1';
      label.style.pointerEvents = 'auto';
      input.disabled = false;
      if (input.checked) anyChecked = true;
    }
  });

  // Tesla 선택했는데 필름 미선택이면 Ceramic AF 자동 선택
  if (isTesla && !anyChecked) {
    var ceramicInput = document.querySelector('input[name="filmType"][value="ceramic"]');
    if (ceramicInput) ceramicInput.checked = true;
  }
  updateQuotePrice();
}

function updateQuotePrice() {
  var sel = getQuoteSelections();
  var parts = ['full','front2','frontWS','sunroof','visor'];
  var totalEl = document.getElementById('quoteTotalAmount');
  var vData = getVehicleData(sel);

  // Tesla 선택됐지만 모델 미선택 안내
  var t = TRANSLATIONS[CURRENT_LANG] || TRANSLATIONS['en'];
  if (sel.vehicle === 'tesla' && !sel.teslaModel) {
    totalEl.textContent = t['modal_ts_select'] || 'Please select a Tesla model';
    totalEl.removeAttribute('data-computed');
    totalEl.style.color = 'var(--white)';
    parts.forEach(function(p){
      var el = document.getElementById('price-' + p);
      if (el) el.textContent = '—';
    });
    return;
  }

  // 쪽유리 단가 표시
  var quarterPriceEl = document.getElementById('price-quarter');
  if (quarterPriceEl) {
    var qp = vData ? (vData['quarter'] || 10) : 10;
    quarterPriceEl.textContent = '$' + qp + '/ea';
  }

  // 각 부위 단가 표시
  parts.forEach(function(p) {
    var priceEl = document.getElementById('price-' + p);
    if (!priceEl) return;
    if (!sel.vehicle || !sel.film) { priceEl.textContent = '—'; return; }
    if (!vData) { priceEl.textContent = 'Call'; return; }
    // Tesla는 위치 오버라이드 없음
    var locPrice = (sel.vehicle !== 'tesla') ? getLocationPrice(sel.film, sel.vehicle, p) : undefined;
    var price = (locPrice !== undefined) ? locPrice : vData[p];
    priceEl.textContent = (price === null || price === undefined) ? 'N/A' : '$' + price;
  });

  // N/A 체크박스 비활성화
  parts.forEach(function(p) {
    var cb = document.getElementById('w' + capitalize(p));
    var priceEl = document.getElementById('price-' + p);
    if (!cb || !priceEl) return;
    var isNA = (priceEl.textContent === 'N/A' || priceEl.textContent === 'Call');
    cb.disabled = isNA;
    if (isNA) cb.checked = false;
    var opt = cb.closest('.quote-window-opt');
    if (opt) opt.style.opacity = isNA ? '0.4' : '1';
  });

  // 총액 계산
  if (!sel.vehicle || !sel.film) {
    totalEl.textContent = t['modal_select_above'] || 'Please select above';
    totalEl.removeAttribute('data-computed');
    totalEl.style.color = 'var(--white)';
    return;
  }
  if (!vData) {
    totalEl.textContent = t['modal_contact_us'] || 'Please contact us directly';
    totalEl.removeAttribute('data-computed');
    totalEl.style.color = 'var(--white)';
    return;
  }

  var total = 0;
  var anyChecked = false;

  parts.forEach(function(p) {
    var cb = document.getElementById('w' + capitalize(p));
    if (cb && cb.checked) {
      anyChecked = true;
      var locPrice = (sel.vehicle !== 'tesla') ? getLocationPrice(sel.film, sel.vehicle, p) : undefined;
      var price = (locPrice !== undefined) ? locPrice : vData[p];
      if (price) total += price;
    }
  });

  // 쪽유리 수량
  var quarterQty = parseInt(document.getElementById('quarterQty').value) || 0;
  if (quarterQty > 0) {
    anyChecked = true;
    var qPrice = vData['quarter'] || 10;
    total += qPrice * quarterQty;
    var qSubEl = document.getElementById('quarter-sub');
    if (qSubEl) qSubEl.textContent = '= $' + (qPrice * quarterQty);
  } else {
    var qSubEl2 = document.getElementById('quarter-sub');
    if (qSubEl2) qSubEl2.textContent = '';
  }

  if (!anyChecked) {
    totalEl.textContent = t['modal_select_area'] || 'Please select window area';
    totalEl.removeAttribute('data-computed');
    totalEl.style.color = 'var(--white)';
  } else {
    totalEl.setAttribute('data-computed', '1');
    totalEl.textContent = '$' + total.toLocaleString();
    totalEl.style.color = 'var(--gold)';
    totalEl.style.transform = 'scale(1.08)';
    setTimeout(function(){ totalEl.style.transform = 'scale(1)'; }, 150);
  }
}

// 쪽유리 수량 +/− 버튼
function changeQty(delta) {
  var input = document.getElementById('quarterQty');
  var current = parseInt(input.value) || 0;
  var next = Math.min(4, Math.max(0, current + delta));
  input.value = next;
  updateQuotePrice();
}

// All Side Windows ↔ Front 2 Doors 는 상호 배타적
function handleWindowChange(changed) {
  if (changed === 'full') {
    var wFull = document.getElementById('wFull');
    var wFront2 = document.getElementById('wFront2');
    if (wFull.checked) wFront2.checked = false;
  } else if (changed === 'front2') {
    var wFull2 = document.getElementById('wFull');
    var wFront2b = document.getElementById('wFront2');
    if (wFront2b.checked) wFull2.checked = false;
  }
  updateQuotePrice();
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function openQuoteModal() {
  document.getElementById('quoteModal').classList.add('active');
  document.body.style.overflow = 'hidden';
  // Reset all checkboxes + 쪽유리 수량 초기화
  document.querySelectorAll('#quoteModal input[type="checkbox"]').forEach(function(cb){ cb.checked = false; });
  var qEl = document.getElementById('quarterQty');
  if (qEl) qEl.value = 0;
  var qSub = document.getElementById('quarter-sub');
  if (qSub) qSub.textContent = '';
  updateQuotePrice();
}

// 지점 카드에서 견적 버튼 클릭 시 — 해당 지점 자동 선택
function openQuoteAt(locValue) {
  openQuoteModal();
  var locRadio = document.querySelector('input[name="location"][value="' + locValue + '"]');
  if (locRadio) {
    locRadio.checked = true;
    updateLocationUI();
    // 모달 내 지점 선택란이 보이도록 스크롤
    setTimeout(function() {
      if (locRadio.closest('.quote-loc')) {
        locRadio.closest('.quote-loc').scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 200);
  }
}

function closeQuoteModal() {
  document.getElementById('quoteModal').classList.remove('active');
  document.body.style.overflow = '';
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('quoteModal')) {
    closeQuoteModal();
  }
}

function submitQuote(e) {
  e.preventDefault();
  var form = e.target;
  var data = new FormData(form);

  // 선택한 차종/필름/부위 정보 추가
  var sel = getQuoteSelections();
  var vehicleMap = { sedan:'Sedan / Coupe', suv:'SUV / Truck', van:'Large SUV / Van', tesla:'Tesla' };
  var filmMap = { regular:'Speeder (Regular AF)', carbon:'Vista (3-Yr Carbon)', ceramic:'M2 Ceramic AF ♾', ceramic3m:'3M Ceramic IR ♾', crystalline:'3M Crystalline ♾' };
  data.append('vehicle', sel.vehicle ? (vehicleMap[sel.vehicle] || sel.vehicle) : 'Not selected');
  if (sel.vehicle === 'tesla' && sel.teslaModel) data.append('tesla_model', sel.teslaModel);
  data.append('film', sel.film ? (filmMap[sel.film] || sel.film) : 'Not selected');

  // 선택된 시공 부위
  var parts = [];
  var windowIds = { wFull:'All Side & Back', wFront2:'Front 2 Doors', wFrontWS:'Front Windshield', wSunroof:'Sunroof', wVisor:'Sun Visor' };
  Object.keys(windowIds).forEach(function(id) {
    var cb = document.getElementById(id);
    if (cb && cb.checked) parts.push(windowIds[id]);
  });
  var qEl = document.getElementById('quarterQty');
  var quarterQty = qEl ? (parseInt(qEl.value) || 0) : 0;
  if (quarterQty > 0) parts.push('Quarter Window x' + quarterQty);
  data.append('windows', parts.length ? parts.join(', ') : 'Not selected');

  // 예상 견적 금액
  var totalEl = document.getElementById('quoteTotalAmount');
  var totalText = (totalEl && totalEl.getAttribute('data-computed')) ? totalEl.textContent : 'N/A';
  data.append('estimated_total', totalText);

  // 로컬 시간 (캘리포니아 기준)
  var now = new Date();
  var pstTime = now.toLocaleString('en-US', { timeZone:'America/Los_Angeles', month:'short', day:'numeric', year:'numeric', hour:'numeric', minute:'2-digit', hour12:true });
  data.append('submitted_time_PST', pstTime);

  fetch('https://formspree.io/f/mykbrawp', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: data
  }).then(function(r) {
    form.reset();
    closeQuoteModal();
    var toast = document.getElementById('successToast');
    toast.classList.add('show');
    setTimeout(function () { toast.classList.remove('show'); }, 3500);
  }).catch(function() {
    closeQuoteModal();
    var toast = document.getElementById('successToast');
    toast.classList.add('show');
    setTimeout(function () { toast.classList.remove('show'); }, 3500);
  });
}

// Close modal on ESC key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeQuoteModal();
});

// ============================================================
// Smooth scroll
function goToSection(id) {
  var el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ============================================================
// 갤러리 더보기
function expandGallery() {
  var extra = document.getElementById('galleryExtra');
  var wrap  = document.getElementById('galleryMoreWrap');
  if (extra) extra.classList.add('open');
  if (wrap)  wrap.style.display = 'none';
}

// ============================================================
// 모바일 햄버거 메뉴
function toggleNav() {
  var nav   = document.getElementById('navLinks');
  var btn   = document.getElementById('navHamburger');
  var open  = nav.classList.toggle('nav-open');
  btn.classList.toggle('is-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}
function closeNav() {
  var nav = document.getElementById('navLinks');
  var btn = document.getElementById('navHamburger');
  nav.classList.remove('nav-open');
  btn.classList.remove('is-open');
  document.body.style.overflow = '';
}

// FAQ accordion
function toggleFaq(el) {
  var answer = el.nextElementSibling;
  var icon = el.querySelector('.faq-icon');
  var isOpen = answer.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-a').forEach(function(a) { a.classList.remove('open'); });
  document.querySelectorAll('.faq-icon').forEach(function(i) { i.classList.remove('open'); });
  // Open clicked if it was closed
  if (!isOpen) {
    answer.classList.add('open');
    if (icon) icon.classList.add('open');
  }
}

// Scroll fade-in
document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-in').forEach(function (el) {
    observer.observe(el);
  });

  // Init language
  initLang();

  // Nav scroll effect
  window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    nav.style.boxShadow = window.scrollY > 50
      ? '0 2px 20px rgba(0,194,224,0.08)'
      : 'none';
  });

  // Active nav highlight
  const sections = ['films', 'locations', 'why', 'contact'];
  window.addEventListener('scroll', function () {
    const scrollY = window.pageYOffset;
    sections.forEach(function (id) {
      const el = document.getElementById(id);
      if (!el) return;
      const links = document.querySelectorAll('.nav-links a');
      if (el.offsetTop - 120 <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
        links.forEach(function (a) {
          a.style.color = a.getAttribute('href') === '#' + id
            ? '#00DEFF' : 'rgba(255,255,255,0.6)';
        });
      }
    });
  });
});
