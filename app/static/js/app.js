/**
 * ANNADATA - Frontend Client Logic
 * SIH25030 - Agriculture, FoodTech & Rural Development
 * Multilingual Engine: English, Telugu (తెలుగు), Hindi (हिन्दी)
 */

// Multilingual Translations Dictionary
const translations = {
  en: {
    gov_text: "Government of Jharkhand • SIH25030 Smart Agriculture Ecosystem",
    app_subtitle: "AI-driven Network for Nurturing Agriculture",
    download_btn: "📥 Save Offline Advisory",
    tab_crop: "🌾 Crop Advisor",
    tab_germination: "🌱 Germination & Lifecycle",
    tab_fertilizer: "🧪 AI Fertilizer Formulation",
    tab_weather: "🌦️ Weather & Alerts",
    tab_market: "📈 Mandi Prices",
    tab_pnl: "💰 Inventory & Profit",
    tab_library: "📚 Telangana Crop Library",
    alert_title: "⚡ Early Storm & Rain Advisory",
    alert_desc: "Scattered showers predicted in 48 hours. Postpone open fertilizer spraying.",
    crop_form_title: "Soil & Climate Parameter Input",
    btn_predict: "Get AI Recommendation",
    germination_title: "Germination & Plant Growth Calendar",
    fertilizer_title: "AI Homemade Fertilizer Formulation",
    btn_make_fertilizer: "Generate Organic Formulation",
    market_title: "Real-time Mandi Market Rates",
    pnl_title: "Farm Inventory & Profit/Loss Ledger",
    library_title: "Telangana & Regional Crop Database"
  },
  te: {
    gov_text: "జార్ఖండ్ ప్రభుత్వం • SIH25030 స్మార్ట్ వ్యవసాయ వేదిక",
    app_subtitle: "రైతుల కోసం సమగ్ర కృత్రిమ మేధ వ్యవసాయ సహాయకుడు",
    download_btn: "📥 ఆఫ్‌లైన్ నివేదిక డౌన్‌లోడ్",
    tab_crop: "🌾 పంట సలహాదారు",
    tab_germination: "🌱 మొలక మరియు ఎదుగుదల చక్రం",
    tab_fertilizer: "🧪 సేంద్రీయ ఎరువుల తయారీ",
    tab_weather: "🌦️ వాతావరణం & హెచ్చరికలు",
    tab_market: "📈 మార్కెట్ ధరలు",
    tab_pnl: "💰 లాభ నష్టాల లెక్కింపు",
    tab_library: "📚 తెలంగాణ పంటల గ్రంథాలయం",
    alert_title: "⚡ ముందస్తు వర్ష సూచన హెచ్చరిక",
    alert_desc: "వచ్చే 48 గంటల్లో వర్షం కురిసే అవకాశం ఉంది. పురుగుమందుల పిచికారీని వాయిదా వేయండి.",
    crop_form_title: "నేల మరియు వాతావరణ వివరాల నమోదు",
    btn_predict: "కృత్రిమ మేధ పంట సిఫార్సు పొందండి",
    germination_title: "మొలకెత్తే సమయం & ఎదుగుదల క్యాలెండర్",
    fertilizer_title: "సహజ వనరులతో ఇంటివద్దే ఎరువుల తయారీ",
    btn_make_fertilizer: "ఎరువుల తయారీ విధానం పొందండి",
    market_title: "మార్కెట్ / మండి ప్రత్యక్ష ధరలు",
    pnl_title: "వ్యవసాయ ఖర్చులు & నికర లాభ లెక్కింపు",
    library_title: "తెలంగాణ సమగ్ర పంటల సమాచారం"
  },
  hi: {
    gov_text: "झारखंड सरकार • SIH25030 स्मार्ट कृषि प्रणाली",
    app_subtitle: "किसानों के लिए समग्र एआई कृषि सहायक",
    download_btn: "📥 ऑफलाइन रिपोर्ट डाउनलोड करें",
    tab_crop: "🌾 फसल सलाहकार",
    tab_germination: "🌱 अंकुरण व विकास चक्र",
    tab_fertilizer: "🧪 जैविक खाद निर्माण (AI)",
    tab_weather: "🌦️ मौसम व पूर्व चेतावनी",
    tab_market: "📈 मंडी भाव",
    tab_pnl: "💰 आय-व्यय व मुनाफा",
    tab_library: "📚 तेलंगाना फसल पुस्तकालय",
    alert_title: "⚡ आंधी व वर्षा पूर्व चेतावनी",
    alert_desc: "अगले 48 घंटों में बारिश की संभावना। रसायनों के छिड़काव को स्थगित करें।",
    crop_form_title: "मृदा एवं मौसम इनपुट",
    btn_predict: "एआई फसल अनुशंसा प्राप्त करें",
    germination_title: "अंकुरण अवधि एवं फसल विकास कैलेंडर",
    fertilizer_title: "उपलब्ध संसाधनों से देसी खाद निर्माण",
    btn_make_fertilizer: "जैविक खाद फॉर्मूला तैयार करें",
    market_title: "लाइव मंडी भाव एवं न्यूनतम समर्थन मूल्य (MSP)",
    pnl_title: "कृषि लागत एवं शुद्ध लाभ गणना",
    library_title: "तेलंगाना एवं क्षेत्रीय फसल डेटाबेस"
  }
};

let currentLang = 'en';

// Switch Language
function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  const dict = translations[lang] || translations.en;
  for (const [key, val] of Object.entries(dict)) {
    const el = document.getElementById(key);
    if (el) el.innerText = val;
  }
}

// Switch Navigation Tabs
function switchTab(tabId) {
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

  const btn = document.querySelector(`.nav-tab[data-tab="${tabId}"]`);
  const content = document.getElementById(tabId);
  if (btn) btn.classList.add('active');
  if (content) content.classList.add('active');
}

// Range Sliders Value Updates
function setupSliders() {
  const sliders = ['nitrogen', 'phosphorus', 'potassium', 'ph', 'rainfall', 'temperature'];
  sliders.forEach(id => {
    const input = document.getElementById(id);
    const display = document.getElementById(id + '_val');
    if (input && display) {
      input.addEventListener('input', () => {
        display.innerText = input.value;
      });
    }
  });
}

// Crop Recommendation Form Submit
async function handleCropSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('btn_predict');
  const originalText = btn.innerHTML;
  btn.innerHTML = '⏳ Computing Optimal Recommendation...';
  btn.disabled = true;

  const payload = {
    nitrogen: document.getElementById('nitrogen').value,
    phosphorus: document.getElementById('phosphorus').value,
    potassium: document.getElementById('potassium').value,
    ph: document.getElementById('ph').value,
    rainfall: document.getElementById('rainfall').value,
    temperature: document.getElementById('temperature').value,
    district: document.getElementById('district').value,
    season: document.getElementById('season').value
  };

  try {
    const res = await fetch('/api/recommend-crop', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    renderCropResult(data);
  } catch (err) {
    console.error(err);
    alert('Could not fetch recommendation. Please verify inputs.');
  } finally {
    btn.innerHTML = originalText;
    btn.disabled = false;
  }
}

// Render Crop Result
function renderCropResult(data) {
  const container = document.getElementById('crop_result_box');
  if (!container) return;

  let cropName = data.recommended_crop;
  if (currentLang === 'te' && data.crop_telugu) cropName = data.crop_telugu;
  if (currentLang === 'hi' && data.crop_hindi) cropName = data.crop_hindi;

  container.innerHTML = `
    <div style="font-size: 0.9rem; color: #2e7d32; font-weight: 700; text-transform: uppercase;">
      ★ AI Recommendation (Ensemble Model)
    </div>
    <div class="crop-badge-main">${cropName}</div>
    <p style="color: #43a047; font-weight: 700; margin-bottom: 12px;">
      Precision Confidence: ${data.confidence_score}%
    </p>
    <div class="result-stat-grid">
      <div class="result-stat-item">
        <strong>Expected Yield:</strong>
        <span>${data.estimated_yield}</span>
      </div>
      <div class="result-stat-item">
        <strong>Growth Duration:</strong>
        <span>${data.growth_duration}</span>
      </div>
      <div class="result-stat-item">
        <strong>Germination Window:</strong>
        <span>${data.germination_window}</span>
      </div>
      <div class="result-stat-item">
        <strong>Alternative Options:</strong>
        <span>${(data.alternative_crops || []).join(', ')}</span>
      </div>
    </div>
    <p style="margin-top: 14px; font-size: 0.85rem; color: #555;">
      💡 <em>${data.soil_suitability} in ${data.district} for ${data.season} season.</em>
    </p>
  `;
}

// Available Fertilizer Resources Chip Toggles
function setupResourceChips() {
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('selected');
    });
  });
}

// Generate Fertilizer Recipe
async function generateFertilizer() {
  const selectedChips = Array.from(document.querySelectorAll('.chip.selected')).map(c => c.dataset.value);
  const crop = document.getElementById('fert_crop_select').value;
  const resultBox = document.getElementById('fertilizer_result');
  resultBox.innerHTML = '<p>🔄 Formulating tailored bio-fertilizer recipe...</p>';

  try {
    const res = await fetch('/api/recommend-fertilizer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        crop: crop,
        available_resources: selectedChips
      })
    });
    const data = await res.json();
    renderFertilizerRecipes(data.recipes);
  } catch (err) {
    console.error(err);
    resultBox.innerHTML = '<p style="color:red;">Error preparing formulation.</p>';
  }
}

function renderFertilizerRecipes(recipes) {
  const resultBox = document.getElementById('fertilizer_result');
  if (!recipes || !recipes.length) {
    resultBox.innerHTML = '<p>No specific recipes found. Please select available on-farm resources.</p>';
    return;
  }

  resultBox.innerHTML = recipes.map(r => `
    <div style="background:#fff; border:1px solid #c8e6c9; border-radius:10px; padding:16px; margin-bottom:14px; text-align:left;">
      <h4 style="color:#1b5e20; margin-bottom:6px;">🌿 ${r.name}</h4>
      <p style="font-size:0.85rem; color:#555; margin-bottom:8px;"><strong>Targets:</strong> ${r.target_deficits.join(', ')}</p>
      <div style="background:#f9fbf9; padding:10px; border-radius:6px; font-size:0.88rem; margin-bottom:8px;">
        <strong>Ingredients Needed:</strong> ${r.ingredients}
      </div>
      <p style="font-size:0.88rem; margin-bottom:6px;"><strong>Preparation:</strong> ${r.preparation}</p>
      <p style="font-size:0.88rem; color:#2e7d32;"><strong>Application:</strong> ${r.application}</p>
    </div>
  `).join('');
}

// Fetch Market Mandi Prices
async function loadMarketPrices() {
  const tbody = document.getElementById('mandi_tbody');
  if (!tbody) return;

  try {
    const res = await fetch('/api/market-prices');
    const data = await res.json();
    renderMarketTable(data.mandis);
  } catch (err) {
    console.error(err);
  }
}

function renderMarketTable(items) {
  const tbody = document.getElementById('mandi_tbody');
  tbody.innerHTML = items.map(item => `
    <tr>
      <td><strong>${item.commodity}</strong></td>
      <td>${item.mandi}</td>
      <td><strong>₹${item.price.toLocaleString()}</strong> / qtl</td>
      <td>₹${item.msp.toLocaleString()}</td>
      <td class="${item.status === 'up' ? 'trend-up' : 'trend-down'}">
        ${item.status === 'up' ? '▲' : '▼'} ${item.trend}
      </td>
    </tr>
  `).join('');
}

// Filter Market Items
function filterMarket() {
  const query = (document.getElementById('market_search').value || '').toLowerCase();
  const rows = document.querySelectorAll('#mandi_tbody tr');
  rows.forEach(r => {
    const text = r.innerText.toLowerCase();
    r.style.display = text.includes(query) ? '' : 'none';
  });
}

// Profit & Loss Live Calculator
function calculatePnL() {
  const seeds = parseFloat(document.getElementById('cost_seeds').value) || 0;
  const fertilizer = parseFloat(document.getElementById('cost_fertilizer').value) || 0;
  const labor = parseFloat(document.getElementById('cost_labor').value) || 0;
  const irrigation = parseFloat(document.getElementById('cost_irrigation').value) || 0;
  const totalCost = seeds + fertilizer + labor + irrigation;

  const yieldQtl = parseFloat(document.getElementById('yield_qtl').value) || 0;
  const pricePerQtl = parseFloat(document.getElementById('price_per_qtl').value) || 0;
  const totalRevenue = yieldQtl * pricePerQtl;

  const net = totalRevenue - totalCost;
  const roi = totalCost > 0 ? ((net / totalCost) * 100).toFixed(1) : 0;

  document.getElementById('pnl_total_cost').innerText = '₹' + totalCost.toLocaleString();
  document.getElementById('pnl_total_rev').innerText = '₹' + totalRevenue.toLocaleString();
  
  const netEl = document.getElementById('pnl_net_profit');
  const netContainer = document.getElementById('pnl_net_container');
  
  if (net >= 0) {
    netContainer.className = 'pnl-stat pnl-net profit';
    netEl.innerText = '+₹' + net.toLocaleString() + ` (${roi}% ROI)`;
  } else {
    netContainer.className = 'pnl-stat pnl-net loss';
    netEl.innerText = '-₹' + Math.abs(net).toLocaleString() + ` (${roi}% ROI)`;
  }
}

// Telangana Crop Library Cards
const telanganaCrops = [
  {
    name: "Rice (వరి / धान)",
    season: "Kharif & Rabi",
    soil: "Clayey / Alluvial, pH 6.0 - 7.5",
    water: "High (1200 - 1400 mm)",
    duration: "120 - 145 Days",
    desc: "Principal food crop of Telangana (Khammam, Nalgonda, Nizamabad). Best with SRI or Direct Seeded Rice (DSR) to conserve water."
  },
  {
    name: "Cotton (పత్తి / कपास)",
    season: "Kharif",
    soil: "Deep Black Cotton Soils (Regur), pH 6.5 - 8.0",
    water: "Moderate (650 - 800 mm)",
    duration: "150 - 180 Days",
    desc: "Major cash crop in Adilabad, Warangal, and Karimnagar. Integrated pest management (IPM) critical against pink bollworm."
  },
  {
    name: "Red Gram (కందులు / अरहर)",
    season: "Kharif",
    soil: "Well-drained red loamy to black soils",
    water: "Low to Moderate (500 - 650 mm)",
    duration: "150 - 170 Days",
    desc: "Vital pulse crop fixing atmospheric nitrogen. Highly suitable for intercropping with cotton or maize in Mahbubnagar and Vikarabad."
  },
  {
    name: "Maize (మొక్కజొన్న / मक्का)",
    season: "Kharif & Rabi",
    soil: "Fertile well-drained sandy loam",
    water: "Moderate (500 - 600 mm)",
    duration: "95 - 115 Days",
    desc: "High yield feed and starch crop widely cultivated in Nizamabad, Kamareddy, and Warangal."
  },
  {
    name: "Bengal Gram (శనగలు / चना)",
    season: "Rabi",
    soil: "Heavy black soils with residual moisture",
    water: "Low (300 - 400 mm)",
    duration: "90 - 110 Days",
    desc: "Excellent winter crop for Adilabad and Nizamabad requiring minimal chemical fertilizer due to high nodulation."
  },
  {
    name: "Dry Chillies (మిరప / मिर्च)",
    season: "Kharif & Rabi",
    soil: "Well-aerated loamy soils with organic matter",
    water: "Frequent light irrigation",
    duration: "150 - 180 Days",
    desc: "High-value spice crop centered in Khammam and Warangal mandis (Asia's second largest chilli market)."
  },
  {
    name: "Turmeric (పసుపు / हल्दी)",
    season: "Kharif (June - Feb)",
    soil: "Rich friable loamy soil, good drainage",
    water: "High (needs consistent moisture)",
    duration: "240 - 270 Days",
    desc: "Celebrated Nizamabad turmeric variety rich in curcumin; high export demand and medicinal value."
  },
  {
    name: "Groundnut (వేరుశనగ / मूंगफली)",
    season: "Rabi & Kharif",
    soil: "Light sandy loam with gypsum supplement",
    water: "Moderate (450 - 550 mm)",
    duration: "105 - 125 Days",
    desc: "Prominent oilseed in southern Telangana (Nagarkurnool, Wanaparthy, Gadwal) with high export grade pods."
  }
];

function renderCropLibrary() {
  const container = document.getElementById('crop_library_grid');
  if (!container) return;

  container.innerHTML = telanganaCrops.map(c => `
    <div class="crop-card">
      <div class="crop-card-top">
        <h3 style="font-size:1.1rem;">${c.name}</h3>
        <span class="crop-tag">${c.season}</span>
      </div>
      <div class="crop-card-body">
        <p style="font-size:0.84rem; color:#555; margin-bottom:6px;"><strong>🌱 Soil:</strong> ${c.soil}</p>
        <p style="font-size:0.84rem; color:#555; margin-bottom:6px;"><strong>💧 Water:</strong> ${c.water}</p>
        <p style="font-size:0.84rem; color:#555; margin-bottom:10px;"><strong>⏱ Duration:</strong> ${c.duration}</p>
        <p style="font-size:0.86rem; color:#333; line-height:1.4;">${c.desc}</p>
      </div>
    </div>
  `).join('');
}

// Filter Crops
function filterCropLibrary() {
  const query = (document.getElementById('library_search').value || '').toLowerCase();
  const filtered = telanganaCrops.filter(c => 
    c.name.toLowerCase().includes(query) || 
    c.desc.toLowerCase().includes(query) || 
    c.soil.toLowerCase().includes(query)
  );
  const container = document.getElementById('crop_library_grid');
  if (!container) return;

  container.innerHTML = filtered.map(c => `
    <div class="crop-card">
      <div class="crop-card-top">
        <h3 style="font-size:1.1rem;">${c.name}</h3>
        <span class="crop-tag">${c.season}</span>
      </div>
      <div class="crop-card-body">
        <p style="font-size:0.84rem; color:#555; margin-bottom:6px;"><strong>🌱 Soil:</strong> ${c.soil}</p>
        <p style="font-size:0.84rem; color:#555; margin-bottom:6px;"><strong>💧 Water:</strong> ${c.water}</p>
        <p style="font-size:0.84rem; color:#555; margin-bottom:10px;"><strong>⏱ Duration:</strong> ${c.duration}</p>
        <p style="font-size:0.86rem; color:#333; line-height:1.4;">${c.desc}</p>
      </div>
    </div>
  `).join('');
}

// Lifecycle Stages calculation
function updateLifecycleDates() {
  const sowingDateVal = document.getElementById('sowing_date').value;
  if (!sowingDateVal) return;

  const baseDate = new Date(sowingDateVal);
  
  const addDays = (d, n) => {
    const copy = new Date(d);
    copy.setDate(copy.getDate() + n);
    return copy.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  };

  document.getElementById('date_germination').innerText = addDays(baseDate, 5);
  document.getElementById('date_vegetative').innerText = addDays(baseDate, 25);
  document.getElementById('date_flowering').innerText = addDays(baseDate, 55);
  document.getElementById('date_harvest').innerText = addDays(baseDate, 120);
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  setupSliders();
  setupResourceChips();
  loadMarketPrices();
  renderCropLibrary();
  
  // Set default sowing date to today
  const today = new Date().toISOString().split('T')[0];
  const sowingInput = document.getElementById('sowing_date');
  if (sowingInput) {
    sowingInput.value = today;
    updateLifecycleDates();
  }

  // Set default language
  setLanguage('en');
});
