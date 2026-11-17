/**
 * ANNADATA - Interactive Client Application & Complete Multilingual Engine
 * Fully translates every label, button, option, card, alert, and dynamic content
 * Supported: English (en), Telugu (te), Hindi (hi)
 */

const I18N_STRINGS = {
  en: {
    // Header & Meta
    top_gov_text: "Government of Jharkhand • SIH25030 Smart Agriculture Ecosystem",
    top_gov_domain: "AI Domain: Agriculture, FoodTech & Rural Development",
    app_title: "ANNA-DATA",
    app_subtitle: "AI-driven Network for Nurturing Agriculture",
    btn_offline: "📥 Save Offline Advisory",

    // Navigation Tabs
    tab_crop_advisor: "🌾 Crop Advisor",
    tab_germination: "🌱 Germination & Growth",
    tab_fertilizer: "🧪 AI Fertilizer Maker",
    tab_weather: "🌦️ Weather & Alerts",
    tab_market: "📈 Mandi Prices",
    tab_inventory: "💰 Farm Profit & Loss",
    tab_library: "📚 Telangana Crop Library",

    // Weather Banner
    weather_loc_title: "Warangal & Regional Agricultural Zone",
    weather_sync_text: "Live Weather Synchronization • Automated Sensor Feeds",
    w_label_temp: "Temperature",
    w_label_humidity: "Humidity",
    w_label_rain: "Rain Prob.",
    w_label_wind: "Wind Speed",
    warning_title: "⚡ Active Weather Advisory: Rain Expected",
    warning_desc: "Scattered showers predicted within 48 hours. Postpone foliar pesticide sprays and protect open harvest heaps.",

    // Crop Form & Presets
    presets_title: "Quick Soil Presets:",
    preset_black_soil: "🌿 Black Cotton Soil",
    preset_red_soil: "🥜 Red Loamy Soil",
    preset_alluvial_soil: "🌾 Alluvial Delta Soil",
    form_title_crop: "Soil & Environmental Parameters",
    label_district: "District / Region:",
    label_season: "Cultivation Season:",
    season_kharif: "Kharif (Monsoon)",
    season_rabi: "Rabi (Winter)",
    season_zaid: "Zaid (Summer)",
    label_n: "Nitrogen (N) - kg/ha:",
    label_p: "Phosphorus (P) - kg/ha:",
    label_k: "Potassium (K) - kg/ha:",
    label_ph: "Soil pH Level:",
    label_rainfall: "Annual / Seasonal Rainfall (mm):",
    label_temp: "Average Temperature (°C):",
    btn_predict_crop: "Get AI Recommendation",
    btn_predicting: "⏳ Analyzing Soil with Ensemble Model...",

    // Crop Result Card
    result_title: "AI Recommendation (CatX-GOSS Ensemble)",
    result_badge_top: "Top Recommended Crop",
    stat_yield: "Expected Yield:",
    stat_duration: "Growth Duration:",
    stat_germination: "Germination Window:",
    stat_alternatives: "Alternative Crops:",
    why_title: "Why this recommendation?",
    why_desc: "The CatBoost and LightGBM ensemble identified optimal nutrient absorption efficiency and climate resilience for your soil parameters.",

    // Germination & Growth
    lifecycle_title: "Germination & Growth Calendar",
    label_sowing_date: "Sowing Date:",
    stage1_title: "Stage 1: Sowing & Seed Germination",
    stage1_tasks: "• Prime seeds with Trichoderma (10g/kg) to prevent fungal dampening.<br>• Maintain topsoil moisture at 60%. Soil temperature 24°C - 30°C.<br>• Expect emergence within days 4 to 6. Fill any empty gaps immediately.",
    stage2_title: "Stage 2: Vegetative Growth & Branching",
    stage2_tasks: "• First intercultural weeding to eliminate competition for nutrients.<br>• Side-dress with Nitrogen or apply enriched Jeevamrutha near roots.<br>• Deploy yellow sticky traps for sucking pest early detection.",
    stage3_title: "Stage 3: Flowering & Grain/Boll Formation",
    stage3_tasks: "• Crucial moisture period: avoid severe moisture deficit.<br>• Apply wood ash potash booster or 13:0:45 foliar organic spray.<br>• Install pheromone traps (5/acre) to monitor bollworm/pod borer.",
    stage4_title: "Stage 4: Maturity & Safe Harvesting",
    stage4_tasks: "• Stop irrigation 10 to 14 days before harvest.<br>• Pick/harvest during dry bright sunshine to prevent mold.<br>• Dry produce thoroughly to bring grain moisture below 10% for storage.",

    // AI Fertilizer
    fert_title: "AI Homemade Fertilizer Formulation",
    fert_intro: "Select resources currently available on your farm. The AI computes an organic, zero-waste formulation tailored to your target crop.",
    fert_label_crop: "Target Crop:",
    fert_label_resources: "Available Farm Resources (Tap to toggle):",
    btn_generate_fert: "Generate Organic Formulation",
    res_cow_dung: "🐄 Cow Dung",
    res_neem_leaves: "🌿 Neem Leaves",
    res_wood_ash: "🪵 Wood Ash",
    res_farmyard_manure: "🌾 Farmyard Manure",
    res_eggshells: "🥚 Crushed Eggshells",
    res_biochar: "🔥 Biochar",
    res_vermicompost: "🪱 Vermicompost",
    res_pulse_flour: "🥣 Pulse Flour (Besan)",

    // Weather Tab
    wtab_title: "5-Day Agricultural Weather Outlook",
    wtab_day_today: "Today",
    wtab_day_tmrw: "Tomorrow",
    wtab_day_3: "Day 3",
    wtab_day_4: "Day 4",
    wtab_day_5: "Day 5",
    wtab_advice_title: "Agronomic Field Advice:",
    wtab_advice_desc: "Due to predicted Day 3 thunderstorms, ensure field drainage channels are clear and delay fertilizer top-dressing until showers clear.",

    // Mandi Market
    market_title: "Real-time Mandi Market Commodity Rates",
    market_search_ph: "Search commodity or mandi...",
    th_commodity: "Commodity",
    th_mandi: "Mandi / Market",
    th_price: "Current Rate (₹)",
    th_msp: "Govt MSP (₹)",
    th_trend: "7-Day Trend",

    // Farm Inventory P&L
    pnl_title: "Farm Cost Ledger & Profit Calculator",
    pnl_sec_costs: "EXPENSES / INVESTMENT",
    pnl_lbl_seeds: "Seeds & Saplings (₹):",
    pnl_lbl_fert: "Fertilizers & Pest Control (₹):",
    pnl_lbl_labor: "Labor & Weeding (₹):",
    pnl_lbl_machinery: "Machinery, Fuel & Irrigation (₹):",
    pnl_sec_rev: "HARVEST & REVENUE",
    pnl_lbl_yield: "Total Yield Harvested (Quintals):",
    pnl_lbl_rate: "Selling Price (₹ per Quintal):",
    pnl_res_costs: "Total Expenses",
    pnl_res_rev: "Total Revenue",
    pnl_res_net: "Net Profit / Loss",
    pnl_tip_title: "Financial Health Recommendation:",
    pnl_tip_desc: "Your revenue covers expenses by 6.1×. Formulating homemade bio-fertilizers using wood ash and cattle manure can save up to ₹2,500 on future input costs.",

    // Telangana Crop Library
    lib_title: "Telangana & Regional Crop Database",
    lib_search_ph: "Search crop name, soil type, water...",
    lib_lbl_season: "Season:",
    lib_lbl_soil: "Soil:",
    lib_lbl_water: "Water:",
    lib_lbl_duration: "Duration:",

    // Footer
    footer_text: "ANNADATA — AI-driven Network for Nurturing Agriculture through Data Analytics and Technology Assistance",
    footer_sub: "Government of Jharkhand • SIH25030 • Dedicated to the prosperity of Indian Farmers"
  },

  te: {
    // Header & Meta
    top_gov_text: "జార్ఖండ్ ప్రభుత్వం • SIH25030 స్మార్ట్ వ్యవసాయ వేదిక",
    top_gov_domain: "AI విభాగం: వ్యవసాయం, ఆహార సాంకేతికత మరియు గ్రామీణాభివృద్ధి",
    app_title: "అన్న-దాత (ANNA-DATA)",
    app_subtitle: "రైతుల అభివృద్ధి కోసం కృత్రిమ మేధ వేదిక",
    btn_offline: "📥 ఆఫ్‌లైన్ నివేదిక సేవ్ చేయండి",

    // Navigation Tabs
    tab_crop_advisor: "🌾 పంట సలహాదారు",
    tab_germination: "🌱 మొలక & ఎదుగుదల",
    tab_fertilizer: "🧪 సేంద్రీయ ఎరువుల తయారీ",
    tab_weather: "🌦️ వాతావరణం & హెచ్చరికలు",
    tab_market: "📈 మార్కెట్ ధరలు",
    tab_inventory: "💰 లాభ నష్టాల గణన",
    tab_library: "📚 తెలంగాణ పంటల నిధి",

    // Weather Banner
    weather_loc_title: "వరంగల్ & తెలంగాణ వ్యవసాయ ప్రాంతం",
    weather_sync_text: "ప్రత్యక్ష వాతావరణ అనుసంధానం • స్వయంచాలక సమాచారం",
    w_label_temp: "ఉష్ణోగ్రత",
    w_label_humidity: "తేమ శాతం",
    w_label_rain: "వర్ష సూచన",
    w_label_wind: "గాలి వేగం",
    warning_title: "⚡ వాతావరణ హెచ్చరిక: వర్షం కురిసే అవకాశం",
    warning_desc: "వచ్చే 48 గంటల్లో వర్షం కురిసే అవకాశం ఉంది. పంటలకు మందుల పిచికారీని వాయిదా వేయండి.",

    // Crop Form & Presets
    presets_title: "త్వరిత నేల ఎంపికలు:",
    preset_black_soil: "🌿 నల్లరేగడి నేల (పత్తి)",
    preset_red_soil: "🥜 ఎర్ర నేల (వేరుశనగ/కందులు)",
    preset_alluvial_soil: "🌾 ఒండ్రు నేల (వరి/మొక్కజొన్న)",
    form_title_crop: "నేల మరియు వాతావరణ వివరాల నమోదు",
    label_district: "జిల్లా / ప్రాంతం:",
    label_season: "వ్యవసాయ కాలం:",
    season_kharif: "ఖరీఫ్ (వర్షాకాలం)",
    season_rabi: "రబీ (చలికాలం)",
    season_zaid: "జైద్ (వేసవి కాలం)",
    label_n: "నత్రజని (N) - కిలో/హెక్టారు:",
    label_p: "భాస్వరం (P) - కిలో/హెక్టారు:",
    label_k: "పొటాషియం (K) - కిలో/హెక్టారు:",
    label_ph: "నేల పి.హెచ్ (pH):",
    label_rainfall: "సగటు వర్షపాతం (మి.మీ):",
    label_temp: "సగటు ఉష్ణోగ్రత (°C):",
    btn_predict_crop: "కృత్రిమ మేధ పంట సిఫార్సు పొందండి",
    btn_predicting: "⏳ సూపర్-ఎన్సెంబుల్ విశ్లేషిస్తోంది...",

    // Crop Result Card
    result_title: "AI పంట సిఫార్సు (CatX-GOSS ఎన్సెంబుల్)",
    result_badge_top: "అత్యంత అనుకూలమైన పంట",
    stat_yield: "ఆశించిన దిగుబడి:",
    stat_duration: "పంట కాలపరిమితి:",
    stat_germination: "మొలకెత్తే సమయం:",
    stat_alternatives: "ప్రత్యామ్నాయ పంటలు:",
    why_title: "ఈ పంటను ఎందుకు ఎంచుకోవాలి?",
    why_desc: "మీ నేలలోని నత్రజని, భాస్వరం, పొటాష్ నిష్పత్తి మరియు వర్షపాతం ఆధారంగా ఈ పంట అత్యధిక దిగుబడిని ఇస్తుందని మోడల్ నిర్ధారించింది.",

    // Germination & Growth
    lifecycle_title: "మొలకెత్తే సమయం మరియు పంట ఎదుగుదల క్యాలెండర్",
    label_sowing_date: "విత్తిన తేదీ:",
    stage1_title: "దశ 1: విత్తన శుద్ధి & మొలకెత్తడం",
    stage1_tasks: "• ట్రైకోడెర్మా విరిడేతో విత్తన శుద్ధి చేయండి (10 గ్రా/కిలో).<br>• నేలలో తగినంత తేమ (60%) ఉండాలి. ఉష్ణోగ్రత 24°C - 30°C.<br>• 4-6 రోజుల్లో మొలకలు వస్తాయి. ఖాళీలలో వెంటనే విత్తనాలు నాటండి.",
    stage2_title: "దశ 2: శాఖీయ ఎదుగుదల & కొమ్మలు",
    stage2_tasks: "• మొదటి కలుపు తీత పూర్తి చేసి మొక్కల మధ్య దూరం పాటించండి.<br>• మొక్కల మొదళ్ల వద్ద జీవామృతం లేదా నత్రజని అందించండి.<br>• రసం పీల్చే పురుగుల నివారణకు పసుపు రంగు జిగురు అట్టలు పెట్టండి.",
    stage3_title: "దశ 3: పూత & కాయ/కంకి ఏర్పడే దశ",
    stage3_tasks: "• నీటి ఎద్దడి లేకుండా తగినంత తేమను కాపాడండి.<br>• పొటాష్ లోపం నివారణకు బూడిద ద్రావణం లేదా 13:0:45 పిచికారీ చేయండి.<br>• కాయతొలుచు పురుగుల నియంత్రణకు ఎకరానికి 5 లింగాకర్షక బుట్టలు అమర్చండి.",
    stage4_title: "దశ 4: పరిపక్వత & కోత సమయం",
    stage4_tasks: "• కోతకు 10-14 రోజుల ముందు నీరు పెట్టడం ఆపండి.<br>• ఎండ ఉన్న సమయంలోనే పంట కోత కోయండి.<br>• నిల్వ చేయడానికి ముందు గింజల్లో తేమ 10% కంటే తక్కువగా ఉండేలా ఎండబెట్టండి.",

    // AI Fertilizer
    fert_title: "సహజ వనరులతో సేంద్రీయ ఎరువుల తయారీ",
    fert_intro: "మీ వ్యవసాయ క్షేత్రంలో అందుబాటులో ఉన్న వనరులను ఎంచుకోండి. AI మీ పంటకు అనువైన సహజ ఎరువు తయారీ విధానాన్ని అందిస్తుంది.",
    fert_label_crop: "ఎంచుకున్న పంట:",
    fert_label_resources: "అందుబాటులో ఉన్న వనరులు (నొక్కండి):",
    btn_generate_fert: "సేంద్రీయ ఎరువుల ఫార్ములా పొందండి",
    res_cow_dung: "🐄 ఆవు పేడ",
    res_neem_leaves: "🌿 వేప ఆకులు",
    res_wood_ash: "🪵 కట్టెల బూడిద",
    res_farmyard_manure: "🌾 పశువుల ఎరువు",
    res_eggshells: "🥚 కోడిగుడ్డు పెంకులు",
    res_biochar: "🔥 బొగ్గు పొడి (బయోచార్)",
    res_vermicompost: "🪱 వర్మీ కంపోస్ట్",
    res_pulse_flour: "🥣 శనగ పిండి (బేసన్)",

    // Weather Tab
    wtab_title: "5 రోజుల స్థానిక వ్యవసాయ వాతావరణ అంచనా",
    wtab_day_today: "ఈ రోజు",
    wtab_day_tmrw: "రేపు",
    wtab_day_3: "3వ రోజు",
    wtab_day_4: "4వ రోజు",
    wtab_day_5: "5వ రోజు",
    wtab_advice_title: "రైతులకు క్షేత్రస్థాయి సలహా:",
    wtab_advice_desc: "3వ రోజు ఉరుములతో కూడిన వర్షం పడే అవకాశం ఉన్నందున, పొలాల్లో మురుగు నీరు పోయేలా కాలువలు సరిచేసుకోండి. వర్షం ఆగే వరకు యూరియా వేయకండి.",

    // Mandi Market
    market_title: "మార్కెట్ / మండి ప్రత్యక్ష సరుకు ధరలు",
    market_search_ph: "పంట లేదా మార్కెట్ పేరు వెతకండి...",
    th_commodity: "పంట పేరు",
    th_mandi: "మార్కెట్ యార్డ్",
    th_price: "ప్రస్తుత ధర (₹)",
    th_msp: "మద్దతు ధర (MSP)",
    th_trend: "7 రోజుల మార్పు",

    // Farm Inventory P&L
    pnl_title: "వ్యవసాయ ఖర్చులు మరియు లాభ నష్టాల గణన",
    pnl_sec_costs: "పెట్టుబడి ఖర్చులు",
    pnl_lbl_seeds: "విత్తనాల ఖర్చు (₹):",
    pnl_lbl_fert: "ఎరువులు & పురుగుమందులు (₹):",
    pnl_lbl_labor: "కూలీల ఖర్చు (₹):",
    pnl_lbl_machinery: "ట్రాక్టర్, డీజిల్ & నీటిపారుదల (₹):",
    pnl_sec_rev: "దిగుబడి & ఆదాయం",
    pnl_lbl_yield: "మొత్తం దిగుబడి (క్వింటాళ్ళు):",
    pnl_lbl_rate: "అమ్మకపు ధర (₹ / క్వింటాలు):",
    pnl_res_costs: "మొత్తం పెట్టుబడి",
    pnl_res_rev: "మొత్తం రాబడి",
    pnl_res_net: "నికర లాభం / నష్టం",
    pnl_tip_title: "ఆర్థిక విశ్లేషణ & సలహా:",
    pnl_tip_desc: "మీ పెట్టుబడి కంటే రాబడి 6 రెట్లు ఎక్కువగా ఉంది. కట్టెల బూడిద మరియు జీవామృతం వాడటం ద్వారా తదుపరి పంటలో ₹2,500 వరకు ఆదా చేసుకోవచ్చు.",

    // Telangana Crop Library
    lib_title: "తెలంగాణ సమగ్ర పంటల గ్రంథాలయం",
    lib_search_ph: "పంట, నేల, నీటి వివరాలు వెతకండి...",
    lib_lbl_season: "కాలం:",
    lib_lbl_soil: "నేల రకం:",
    lib_lbl_water: "నీటి అవసరం:",
    lib_lbl_duration: "కాలపరిమితి:",

    // Footer
    footer_text: "అన్న-దాత — వ్యవసాయాన్ని వృద్ధి చేసే సాంకేతిక కృత్రిమ మేధ వేదిక",
    footer_sub: "జార్ఖండ్ ప్రభుత్వం • SIH25030 • భారతీయ రైతుల సంక్షేమం కోసం సమర్పితం"
  },

  hi: {
    // Header & Meta
    top_gov_text: "झारखंड सरकार • SIH25030 स्मार्ट कृषि तंत्र",
    top_gov_domain: "AI क्षेत्र: कृषि, खाद्य प्रौद्योगिकी एवं ग्रामीण विकास",
    app_title: "अन्ना-दाता (ANNA-DATA)",
    app_subtitle: "किसानों की समृद्धि हेतु समग्र एआई प्रणाली",
    btn_offline: "📥 ऑफलाइन रिपोर्ट सहेजें",

    // Navigation Tabs
    tab_crop_advisor: "🌾 फसल सलाहकार",
    tab_germination: "🌱 अंकुरण व विकास",
    tab_fertilizer: "🧪 जैविक खाद निर्माण",
    tab_weather: "🌦️ मौसम व चेतावनी",
    tab_market: "📈 मंडी भाव",
    tab_inventory: "💰 आय-व्यय व मुनाफा",
    tab_library: "📚 तेलंगाना फसल पुस्तकालय",

    // Weather Banner
    weather_loc_title: "वारंगल एवं क्षेत्रीय कृषि क्षेत्र",
    weather_sync_text: "लाइव मौसम सिंक • स्वचालित सेंसर अपडेट",
    w_label_temp: "तापमान",
    w_label_humidity: "नमी प्रतिशत",
    w_label_rain: "बारिश की संभावना",
    w_label_wind: "हवा की गति",
    warning_title: "⚡ मौसम चेतावनी: बारिश का पूर्वानुमान",
    warning_desc: "अगले 48 घंटों में बारिश की संभावना। कीटनाशकों का छिड़काव स्थगित करें और कटी फसल को सुरक्षित रखें।",

    // Crop Form & Presets
    presets_title: "त्वरित मिट्टी चयन:",
    preset_black_soil: "🌿 काली कपासी मिट्टी",
    preset_red_soil: "🥜 लाल दोमट मिट्टी",
    preset_alluvial_soil: "🌾 कछारी / जलोढ़ मिट्टी",
    form_title_crop: "मृदा एवं मौसम इनपुट",
    label_district: "जिला / क्षेत्र:",
    label_season: "फसल का मौसम:",
    season_kharif: "खरीफ (मानसून)",
    season_rabi: "रबी (सर्दियां)",
    season_zaid: "जायद (गर्मी)",
    label_n: "नाइट्रोजन (N) - किग्रा/हेक्टेयर:",
    label_p: "फास्फोरस (P) - किग्रा/हेक्टेयर:",
    label_k: "पोटाशियम (K) - किग्रा/हेक्टेयर:",
    label_ph: "मृदा पीएच (pH):",
    label_rainfall: "औसत वर्षा (मिमी):",
    label_temp: "औसत तापमान (°C):",
    btn_predict_crop: "एआई फसल अनुशंसा प्राप्त करें",
    btn_predicting: "⏳ सुपर-एनसेंबल विश्लेषण कर रहा है...",

    // Crop Result Card
    result_title: "एआई फसल अनुशंसा (CatX-GOSS मॉडल)",
    result_badge_top: "सर्वश्रेष्ठ अनुशंसित फसल",
    stat_yield: "अपेक्षित उपज:",
    stat_duration: "फसल अवधि:",
    stat_germination: "अंकुरण समय:",
    stat_alternatives: "वैकल्पिक फसलें:",
    why_title: "यह फसल क्यों उपयुक्त है?",
    why_desc: "आपकी मिट्टी के पोषक तत्वों और वर्षा स्तर के विश्लेषण के अनुसार यह फसल न्यूनतम जोखिम में अधिकतम लाभ प्रदान करेगी।",

    // Germination & Growth
    lifecycle_title: "अंकुरण अवधि एवं फसल विकास कैलेंडर",
    label_sowing_date: "बुवाई की तारीख:",
    stage1_title: "चरण 1: बीज उपचार एवं अंकुरण",
    stage1_tasks: "• ट्राइकोडर्मा विरिडी से बीज उपचार करें (10 ग्राम/किग्रा)।<br>• मिट्टी में 60% नमी बनाए रखें। तापमान 24°C - 30°C।<br>• 4-6 दिनों में अंकुरण होगा। खाली स्थानों में तुरंत नए बीज लगाएं।",
    stage2_title: "चरण 2: वानस्पतिक वृद्धि व शाखाएं",
    stage2_tasks: "• पहली निराई-गुड़ाई कर खरपतवार हटाएं।<br>• पौधों की जड़ों में जीवामृत या नाइट्रोजन दें।<br>• रस चूसक कीटों की पहचान के लिए पीले चिपचिपे ट्रैप लगाएं।",
    stage3_title: "चरण 3: फूल व दाना/फूल खिलने की अवस्था",
    stage3_tasks: "• इस समय नमी की कमी न होने दें।<br>• पोटाश पूर्ति के लिए लकड़ी की राख का अर्क या 13:0:45 छिड़कें।<br>• कीट नियंत्रण हेतु प्रति एकड़ 5 फेरोमोन ट्रैप लगाएं।",
    stage4_title: "चरण 4: फसल परिपक्वता व कटाई",
    stage4_tasks: "• कटाई से 10-14 दिन पूर्व सिंचाई बंद करें।<br>• धूप में ही कटाई करें ताकि नमी न रहे।<br>• भंडारण से पहले दानों को सुखाकर नमी 10% से नीचे लाएं।",

    // AI Fertilizer
    fert_title: "उपलब्ध संसाधनों से देसी खाद निर्माण",
    fert_intro: "खेत पर उपलब्ध प्राकृतिक सामग्री चुनें। एआई आपकी फसल के लिए बिना खर्च वाली जैविक खाद का फॉर्मूला तैयार करेगा।",
    fert_label_crop: "लक्षित फसल:",
    fert_label_resources: "उपलब्ध कृषि संसाधन (चुनने हेतु क्लिक करें):",
    btn_generate_fert: "जैविक खाद फॉर्मूला तैयार करें",
    res_cow_dung: "🐄 गोबर",
    res_neem_leaves: "🌿 नीम के पत्ते",
    res_wood_ash: "🪵 लकड़ी की राख",
    res_farmyard_manure: "🌾 कंपोस्ट खाद",
    res_eggshells: "🥚 अंडे के छिलके",
    res_biochar: "🔥 बायोचार (कोयला)",
    res_vermicompost: "🪱 केंचुआ खाद",
    res_pulse_flour: "🥣 बेसन (दाल का आटा)",

    // Weather Tab
    wtab_title: "5 दिवसीय स्थानीय कृषि मौसम पूर्वानुमान",
    wtab_day_today: "आज",
    wtab_day_tmrw: "कल",
    wtab_day_3: "तीसरा दिन",
    wtab_day_4: "चौथा दिन",
    wtab_day_5: "पाँचवा दिन",
    wtab_advice_title: "कृषि परामर्श:",
    wtab_advice_desc: "तीसरे दिन आंधी व बारिश के पूर्वानुमान को देखते हुए खेतों में जल निकासी की व्यवस्था करें। बारिश रुकने तक यूरिया का छिड़काव न करें।",

    // Mandi Market
    market_title: "लाइव मंडी भाव एवं न्यूनतम समर्थन मूल्य (MSP)",
    market_search_ph: "फसल या मंडी खोजें...",
    th_commodity: "फसल",
    th_mandi: "मंडी",
    th_price: "वर्तमान दर (₹)",
    th_msp: "सरकारी एमएसपी (₹)",
    th_trend: "7 दिनों का बदलाव",

    // Farm Inventory P&L
    pnl_title: "कृषि लागत एवं शुद्ध मुनाफा गणना",
    pnl_sec_costs: "कुल लागत / व्यय",
    pnl_lbl_seeds: "बीज खर्च (₹):",
    pnl_lbl_fert: "खाद व कीटनाशक (₹):",
    pnl_lbl_labor: "मजदूरी व निराई (₹):",
    pnl_lbl_machinery: "ट्रैक्टर, ईंधन व सिंचाई (₹):",
    pnl_sec_rev: "उपज एवं बिक्री आय",
    pnl_lbl_yield: "कुल उपज (क्विंटल):",
    pnl_lbl_rate: "बिक्री मूल्य (₹ प्रति क्विंटल):",
    pnl_res_costs: "कुल लागत",
    pnl_res_rev: "कुल आमदनी",
    pnl_res_net: "शुद्ध मुनाफा / घाटा",
    pnl_tip_title: "वित्तीय परामर्श:",
    pnl_tip_desc: "आपकी आमदनी लागत से 6 गुना अधिक है। लकड़ी की राख और जीवामृत बनाकर आप अगली फसल में ₹2,500 तक की बचत कर सकते हैं।",

    // Telangana Crop Library
    lib_title: "तेलंगाना एवं क्षेत्रीय फसल डेटाबेस",
    lib_search_ph: "फसल, मिट्टी, पानी खोजें...",
    lib_lbl_season: "मौसम:",
    lib_lbl_soil: "मिट्टी:",
    lib_lbl_water: "पानी:",
    lib_lbl_duration: "अवधि:",

    // Footer
    footer_text: "अन्ना-दाता — डेटा एनालिटिक्स व एआई द्वारा कृषि को सशक्त बनाने का मंच",
    footer_sub: "झारखंड सरकार • SIH25030 • अन्नदाताओं की समृद्धि को समर्पित"
  }
};

let currentLang = "en";

// Change Language function that updates every element with data-i18n
function setLanguage(lang) {
  currentLang = lang;
  
  // Update button active state
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  const dict = I18N_STRINGS[lang] || I18N_STRINGS.en;

  // 1. Text elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // 2. Placeholder attributes with data-i18n-ph
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // 3. Re-render dynamic elements so their labels adapt
  renderCropLibrary();
  renderCurrentCropResultText();
}

// Soil Presets handler
function applySoilPreset(presetType) {
  if (presetType === "black") {
    document.getElementById("nitrogen").value = 115;
    document.getElementById("phosphorus").value = 48;
    document.getElementById("potassium").value = 22;
    document.getElementById("ph").value = 7.2;
    document.getElementById("rainfall").value = 750;
    document.getElementById("temperature").value = 26;
  } else if (presetType === "red") {
    document.getElementById("nitrogen").value = 25;
    document.getElementById("phosphorus").value = 65;
    document.getElementById("potassium").value = 45;
    document.getElementById("ph").value = 6.2;
    document.getElementById("rainfall").value = 650;
    document.getElementById("temperature").value = 28;
  } else if (presetType === "alluvial") {
    document.getElementById("nitrogen").value = 85;
    document.getElementById("phosphorus").value = 52;
    document.getElementById("potassium").value = 40;
    document.getElementById("ph").value = 6.5;
    document.getElementById("rainfall").value = 1150;
    document.getElementById("temperature").value = 25;
  }

  // Sync range numbers
  ["nitrogen", "phosphorus", "potassium", "ph", "rainfall", "temperature"].forEach(id => {
    const el = document.getElementById(id);
    const badge = document.getElementById(id + "_val");
    if (el && badge) badge.innerText = el.value;
  });
}

// Navigation Tabs
function switchTab(tabId) {
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach(panel => panel.classList.remove("active"));

  const targetBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
  const targetPanel = document.getElementById(tabId);
  if (targetBtn) targetBtn.classList.add("active");
  if (targetPanel) targetPanel.classList.add("active");
}

// Live Slider synchronization
function setupSliders() {
  ["nitrogen", "phosphorus", "potassium", "ph", "rainfall", "temperature"].forEach(id => {
    const input = document.getElementById(id);
    const badge = document.getElementById(id + "_val");
    if (input && badge) {
      input.addEventListener("input", () => {
        badge.innerText = input.value;
      });
    }
  });
}

let lastCropData = null;

// Handle Crop Form Submission
async function handleCropSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById("btn_predict");
  const dict = I18N_STRINGS[currentLang] || I18N_STRINGS.en;
  const originalHtml = btn.innerHTML;
  btn.innerHTML = dict.btn_predicting || "⏳ Analyzing...";
  btn.disabled = true;

  const payload = {
    nitrogen: document.getElementById("nitrogen").value,
    phosphorus: document.getElementById("phosphorus").value,
    potassium: document.getElementById("potassium").value,
    ph: document.getElementById("ph").value,
    rainfall: document.getElementById("rainfall").value,
    temperature: document.getElementById("temperature").value,
    district: document.getElementById("district").value,
    season: document.getElementById("season").value
  };

  try {
    const res = await fetch("/api/recommend-crop", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    lastCropData = data;
    renderCropResult(data);
  } catch (err) {
    console.error(err);
    alert("Error fetching recommendation. Please check your inputs.");
  } finally {
    btn.innerHTML = originalHtml;
    btn.disabled = false;
  }
}

function renderCropResult(data) {
  const container = document.getElementById("crop_result_box");
  if (!container || !data) return;

  let displayName = data.recommended_crop;
  if (currentLang === "te" && data.crop_telugu) displayName = data.crop_telugu;
  if (currentLang === "hi" && data.crop_hindi) displayName = data.crop_hindi;

  const dict = I18N_STRINGS[currentLang] || I18N_STRINGS.en;

  container.innerHTML = `
    <div style="font-size:0.8rem; font-weight:700; color:var(--primary); text-transform:uppercase;">
      ${dict.result_badge_top || "Top Recommended Crop"}
    </div>
    <div class="crop-badge-name">${displayName}</div>
    <div class="crop-accuracy-tag">
      ★ ${data.confidence_score}% Model Match (${data.model_architecture || "CatX-GOSS Ensemble"})
    </div>
    <div class="crop-stats-grid">
      <div class="crop-stat-box">
        <span>${dict.stat_yield || "Expected Yield:"}</span>
        <strong>${data.estimated_yield}</strong>
      </div>
      <div class="crop-stat-box">
        <span>${dict.stat_duration || "Growth Duration:"}</span>
        <strong>${data.growth_duration}</strong>
      </div>
      <div class="crop-stat-box">
        <span>${dict.stat_germination || "Germination Window:"}</span>
        <strong>${data.germination_window}</strong>
      </div>
      <div class="crop-stat-box">
        <span>${dict.stat_alternatives || "Alternative Crops:"}</span>
        <strong>${(data.alternative_crops || []).join(", ")}</strong>
      </div>
    </div>
  `;
}

function renderCurrentCropResultText() {
  if (lastCropData) {
    renderCropResult(lastCropData);
  }
}

// Fertilizer Formulator Chips
function setupResourceChips() {
  document.querySelectorAll(".resource-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      chip.classList.toggle("active");
    });
  });
}

async function generateFertilizer() {
  const activeChips = Array.from(document.querySelectorAll(".resource-chip.active")).map(c => c.getAttribute("data-val"));
  const crop = document.getElementById("fert_crop_select").value;
  const resultBox = document.getElementById("fertilizer_result");
  resultBox.innerHTML = "<p>🔄 Preparing formulation recipe...</p>";

  try {
    const res = await fetch("/api/recommend-fertilizer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ crop: crop, available_resources: activeChips })
    });
    const data = await res.json();
    renderFertilizerRecipes(data.recipes);
  } catch (err) {
    console.error(err);
    resultBox.innerHTML = "<p style='color:red;'>Unable to generate recipe.</p>";
  }
}

function renderFertilizerRecipes(recipes) {
  const resultBox = document.getElementById("fertilizer_result");
  if (!recipes || !recipes.length) {
    resultBox.innerHTML = "<p>Please select at least 1 or 2 available resources above.</p>";
    return;
  }

  resultBox.innerHTML = recipes.map(r => `
    <div style="background:#fff; border:1px solid #d2e7d2; border-radius:8px; padding:14px; margin-bottom:12px;">
      <h4 style="color:var(--primary); margin-bottom:4px; font-size:1rem;">🌿 ${r.name}</h4>
      <p style="font-size:0.8rem; color:#666; margin-bottom:8px;"><strong>Targets:</strong> ${r.target_deficits.join(", ")}</p>
      <div style="background:#f7faf7; padding:8px 10px; border-radius:6px; font-size:0.84rem; margin-bottom:6px;">
        <strong>Ingredients:</strong> ${r.ingredients}
      </div>
      <p style="font-size:0.84rem; margin-bottom:4px;"><strong>Preparation:</strong> ${r.preparation}</p>
      <p style="font-size:0.84rem; color:var(--primary);"><strong>Application:</strong> ${r.application}</p>
    </div>
  `).join("");
}

// Mandi Market Rates
const MANDI_DATA = [
  { en: "Cotton (Long Staple)", te: "పత్తి (Cotton)", hi: "कपास (Cotton)", mandi: "Warangal (TG)", price: 7450, msp: 7020, trend: "+2.1%", up: true },
  { en: "Paddy (Common)", te: "వరి (Paddy)", hi: "धान (Paddy)", mandi: "Khammam (TG)", price: 2320, msp: 2183, trend: "+1.5%", up: true },
  { en: "Red Gram (Tur)", te: "కందులు (Tur)", hi: "अरहर (Tur)", mandi: "Nizamabad (TG)", price: 9800, msp: 7000, trend: "-0.8%", up: false },
  { en: "Maize (Makka)", te: "మొక్కజొన్న (Maize)", hi: "मक्का (Maize)", mandi: "Karimnagar (TG)", price: 2160, msp: 2090, trend: "+0.4%", up: true },
  { en: "Dry Chillies", te: "ఎండు మిరప", hi: "सूखी मिर्च", mandi: "Enumamula (TG)", price: 18500, msp: 14000, trend: "+4.2%", up: true },
  { en: "Bengal Gram (Chana)", te: "శనగలు (Chana)", hi: "चना (Chana)", mandi: "Adilabad (TG)", price: 5850, msp: 5440, trend: "+1.9%", up: true },
  { en: "Groundnut", te: "వేరుశనగ", hi: "मूंगफली", mandi: "Mahbubnagar (TG)", price: 6420, msp: 6377, trend: "-1.1%", up: false },
  { en: "Ragi (Finger Millet)", te: "రాగులు", hi: "रागी", mandi: "Ranchi (JH)", price: 3950, msp: 3846, trend: "+1.2%", up: true }
];

function renderMandiTable() {
  const tbody = document.getElementById("mandi_tbody");
  if (!tbody) return;

  const query = (document.getElementById("market_search") ? document.getElementById("market_search").value : "").toLowerCase();

  tbody.innerHTML = MANDI_DATA.filter(item => {
    const name = (item[currentLang] || item.en).toLowerCase();
    return name.includes(query) || item.mandi.toLowerCase().includes(query);
  }).map(item => `
    <tr>
      <td><strong>${item[currentLang] || item.en}</strong></td>
      <td>${item.mandi}</td>
      <td><strong>₹${item.price.toLocaleString()}</strong> / qtl</td>
      <td>₹${item.msp.toLocaleString()}</td>
      <td style="font-weight:700; color:${item.up ? '#15803d' : '#b91c1c'};">
        ${item.up ? '▲' : '▼'} ${item.trend}
      </td>
    </tr>
  `).join("");
}

// Profit and Loss Calculator
function calculatePnL() {
  const seeds = parseFloat(document.getElementById("cost_seeds").value) || 0;
  const fert = parseFloat(document.getElementById("cost_fertilizer").value) || 0;
  const labor = parseFloat(document.getElementById("cost_labor").value) || 0;
  const machinery = parseFloat(document.getElementById("cost_irrigation").value) || 0;
  const totalCost = seeds + fert + labor + machinery;

  const yieldQtl = parseFloat(document.getElementById("yield_qtl").value) || 0;
  const ratePerQtl = parseFloat(document.getElementById("price_per_qtl").value) || 0;
  const totalRev = yieldQtl * ratePerQtl;

  const net = totalRev - totalCost;
  const roi = totalCost > 0 ? ((net / totalCost) * 100).toFixed(1) : 0;

  document.getElementById("pnl_total_cost").innerText = "₹" + totalCost.toLocaleString();
  document.getElementById("pnl_total_rev").innerText = "₹" + totalRev.toLocaleString();

  const netBox = document.getElementById("pnl_net_box");
  const netEl = document.getElementById("pnl_net_profit");
  if (net >= 0) {
    netBox.className = "pnl-box profit";
    netEl.innerText = "+₹" + net.toLocaleString() + ` (${roi}% ROI)`;
  } else {
    netBox.className = "pnl-box loss";
    netEl.innerText = "-₹" + Math.abs(net).toLocaleString() + ` (${roi}% ROI)`;
  }
}

// Telangana Crop Database
const CROPS_DB = [
  {
    en: "Cotton",
    te: "పత్తి (Cotton)",
    hi: "कपास (Cotton)",
    season_en: "Kharif",
    season_te: "ఖరీఫ్",
    season_hi: "खरीफ",
    soil_en: "Deep Black Cotton Soils (Regur), pH 6.5 - 8.0",
    soil_te: "నల్లరేగడి నేలలు, పి.హెచ్ 6.5 - 8.0",
    soil_hi: "गहरी काली कपासी मिट्टी, पीएच 6.5 - 8.0",
    water_en: "650 - 800 mm",
    water_te: "650 - 800 మి.మీ",
    water_hi: "650 - 800 मिमी",
    dur_en: "150 - 170 Days",
    dur_te: "150 - 170 రోజులు",
    dur_hi: "150 - 170 दिन",
    desc_en: "Leading cash crop of Adilabad, Warangal, Karimnagar. High export quality fiber.",
    desc_te: "ఆదిలాబాద్, వరంగల్, కరీంనగర్ జిల్లాల ప్రధాన వాణిజ్య పంట. నాణ్యమైన దూది ఉత్పత్తి.",
    desc_hi: "आदिलाबाद, वारंगल, करीमनगर की प्रमुख नकदी फसल। उच्च गुणवत्ता वाला रेशा।"
  },
  {
    en: "Rice (Paddy)",
    te: "వరి (Paddy)",
    hi: "धान / चावल",
    season_en: "Kharif & Rabi",
    season_te: "ఖరీఫ్ & రబీ",
    season_hi: "खरीफ एवं रबी",
    soil_en: "Clayey alluvial delta soils, pH 6.0 - 7.5",
    soil_te: "ఒండ్రు మరియు బంకమట్టి నేలలు, పి.హెచ్ 6.0 - 7.5",
    soil_hi: "चिकनी जलोढ़ मिट्टी, पीएच 6.0 - 7.5",
    water_en: "1200 - 1400 mm",
    water_te: "1200 - 1400 మి.మీ",
    water_hi: "1200 - 1400 मिमी",
    dur_en: "120 - 140 Days",
    dur_te: "120 - 140 రోజులు",
    dur_hi: "120 - 140 दिन",
    desc_en: "Staple grain of Telangana. Direct Seeded Rice (DSR) saves 25% water.",
    desc_te: "తెలంగాణ ప్రధాన ఆహార పంట. డీఎస్ఆర్ పద్ధతి ద్వారా 25% నీరు ఆదా అవుతుంది.",
    desc_hi: "प्रमुख खाद्यान्न फसल। सीधी बुवाई (DSR) से 25% पानी की बचत होती है।"
  },
  {
    en: "Red Gram (Tur)",
    te: "కందులు (Tur)",
    hi: "अरहर / तूर",
    season_en: "Kharif",
    season_te: "ఖరీఫ్",
    season_hi: "खरीफ",
    soil_en: "Well-drained red loamy soils",
    soil_te: "నీరు నిలవని ఎర్ర నేలలు",
    soil_hi: "जल-निकास युक्त लाल दोमट मिट्टी",
    water_en: "500 - 650 mm",
    water_te: "500 - 650 మి.మీ",
    water_hi: "500 - 650 मिमी",
    dur_en: "150 - 170 Days",
    dur_te: "150 - 170 రోజులు",
    dur_hi: "150 - 170 दिन",
    desc_en: "Key pulse fixing atmospheric nitrogen. Highly suitable for intercropping with cotton.",
    desc_te: "భూమికి నత్రజని అందించే పప్పుధాన్య పంట. పత్తితో అంతరపంటగా అత్యంత లాభదాయకం.",
    desc_hi: "नाइट्रोजन स्थिर करने वाली दलहनी फसल। कपास के साथ अंतःफसल के लिए उत्तम।"
  },
  {
    en: "Maize (Corn)",
    te: "మొక్కజొన్న (Maize)",
    hi: "मक्का (Corn)",
    season_en: "Kharif & Rabi",
    season_te: "ఖరీఫ్ & రబీ",
    season_hi: "खरीफ एवं रबी",
    soil_en: "Fertile sandy loam with good drainage",
    soil_te: "సారవంతమైన ఇసుక గరప నేలలు",
    soil_hi: "उपजाऊ बलुई दोमट मिट्टी",
    water_en: "500 - 600 mm",
    water_te: "500 - 600 మి.మీ",
    water_hi: "500 - 600 मिमी",
    dur_en: "95 - 110 Days",
    dur_te: "95 - 110 రోజులు",
    dur_hi: "95 - 110 दिन",
    desc_en: "High yielding starch and poultry feed crop extensively grown across Nizamabad and Warangal.",
    desc_te: "నిజామాబాద్ మరియు వరంగల్ జిల్లాల్లో విస్తారంగా పండించే అధిక దిగుబడి ఆహార పంట.",
    desc_hi: "निजामाबाद और वारंगल में व्यापक रूप से उगाई जाने वाली उच्च उपज वाली फसल।"
  },
  {
    en: "Dry Chillies",
    te: "ఎండు మిరప",
    hi: "लाल मिर्च",
    season_en: "Kharif & Rabi",
    season_te: "ఖరీఫ్ & రబీ",
    season_hi: "खरीफ एवं रबी",
    soil_en: "Loamy soil rich in organic matter",
    soil_te: "సేంద్రీయ పదార్థం సమృద్ధిగా గల గరప నేలలు",
    soil_hi: "जीवांश युक्त दोमट मिट्टी",
    water_en: "Frequent light irrigation",
    water_te: "తరచుగా తేలికపాటి తడులు",
    water_hi: "नियमित हल्की सिंचाई",
    dur_en: "150 - 180 Days",
    dur_te: "150 - 180 రోజులు",
    dur_hi: "150 - 180 दिन",
    desc_en: "High value spice in Khammam and Warangal mandis. Asia's top trading hubs.",
    desc_te: "ఖమ్మం మరియు వరంగల్ మార్కెట్లలో అధిక లాభాలనిచ్చే వాణిజ్య మసాలా పంట.",
    desc_hi: "खम्मम और वारंगल मंडियों में उच्च मूल्य वाली प्रमुख मसाला फसल।"
  },
  {
    en: "Turmeric",
    te: "పసుపు (Turmeric)",
    hi: "हल्दी (Turmeric)",
    season_en: "Kharif",
    season_te: "ఖరీఫ్",
    season_hi: "खरीफ",
    soil_en: "Friable loamy soils, excellent drainage",
    soil_te: "వదులుగా ఉండే గరప నేలలు, మంచి నీటిపారుదల",
    soil_hi: "भुरभुरी दोमट मिट्टी, उत्तम जल निकास",
    water_en: "1200 - 1500 mm",
    water_te: "1200 - 1500 మి.మీ",
    water_hi: "1200 - 1500 मिमी",
    dur_en: "240 - 270 Days",
    dur_te: "240 - 270 రోజులు",
    dur_hi: "240 - 270 दिन",
    desc_en: "Famous Nizamabad turmeric high in curcumin content with massive export demand.",
    desc_te: "నిజామాబాద్ కర్కుమిన్ సమృద్ధిగా ఉండే ప్రపంచ ప్రసిద్ధి చెందిన పసుపు రకం.",
    desc_hi: "उच्च करक्यूमिन युक्त प्रसिद्ध निजामाबाद हल्दी, भारी निर्यात मांग।"
  }
];

function renderCropLibrary() {
  const container = document.getElementById("crop_library_grid");
  if (!container) return;

  const query = (document.getElementById("library_search") ? document.getElementById("library_search").value : "").toLowerCase();
  const dict = I18N_STRINGS[currentLang] || I18N_STRINGS.en;

  container.innerHTML = CROPS_DB.filter(c => {
    const name = (c[currentLang] || c.en).toLowerCase();
    const desc = (c["desc_" + currentLang] || c.desc_en).toLowerCase();
    return name.includes(query) || desc.includes(query);
  }).map(c => `
    <div class="lib-card">
      <div class="lib-card-top">
        <div class="lib-name">${c[currentLang] || c.en}</div>
        <span class="lib-tag">${c["season_" + currentLang] || c.season_en}</span>
      </div>
      <div class="lib-detail"><strong>${dict.lib_lbl_soil || "Soil:"}</strong> ${c["soil_" + currentLang] || c.soil_en}</div>
      <div class="lib-detail"><strong>${dict.lib_lbl_water || "Water:"}</strong> ${c["water_" + currentLang] || c.water_en}</div>
      <div class="lib-detail"><strong>${dict.lib_lbl_duration || "Duration:"}</strong> ${c["dur_" + currentLang] || c.dur_en}</div>
      <p style="font-size:0.83rem; color:#444; margin-top:8px; line-height:1.4;">
        ${c["desc_" + currentLang] || c.desc_en}
      </p>
    </div>
  `).join("");
}

// Lifecycle Dynamic Dates
function updateLifecycleDates() {
  const dateVal = document.getElementById("sowing_date").value;
  if (!dateVal) return;

  const base = new Date(dateVal);
  const addDays = (d, n) => {
    const copy = new Date(d);
    copy.setDate(copy.getDate() + n);
    return copy.toLocaleDateString(currentLang === 'te' ? 'te-IN' : (currentLang === 'hi' ? 'hi-IN' : 'en-IN'), { day: 'numeric', month: 'short' });
  };

  document.getElementById("date_stage1").innerText = addDays(base, 5);
  document.getElementById("date_stage2").innerText = addDays(base, 25);
  document.getElementById("date_stage3").innerText = addDays(base, 55);
  document.getElementById("date_stage4").innerText = addDays(base, 130);
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  setupSliders();
  setupResourceChips();
  renderMandiTable();
  renderCropLibrary();

  const today = new Date().toISOString().split("T")[0];
  const sowingEl = document.getElementById("sowing_date");
  if (sowingEl) {
    sowingEl.value = today;
    updateLifecycleDates();
  }

  // Set default language to English initially
  setLanguage("en");
});
