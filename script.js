// ================= CONFIG =================
const BASE_URL = "http://10.215.138.222:3000";   // Node server (change if needed)
const CAM_IP   = "http://10.215.138.82";         // ESP32-CAM IP (change if needed)

const $ = id => document.getElementById(id);

const espEl = $('esp');
const timeEl = $('time');
const modeEl = $('mode');
const tempEl = $('temp');
const humEl = $('hum');
const soilEl = $('soil');
const lightEl = $('light');
const airEl = $('air');

const startStreamBtn = $('startStream');
const stopStreamBtn  = $('stopStream');
const camFrame = $('camFrame');
const capturedImg = $('captured');
const captureBtn = $('capture');
const flashOnBtn = $('flashOn');
const flashOffBtn = $('flashOff');
const themeToggle = $('themeToggle');
const autoToggle = $('autoToggle');
const aiResultEl = $('aiResult');

let autoMode = true;

async function loadData(){
  try {
    const res = await fetch(`${BASE_URL}/api/data`);
    const d = await res.json();
    tempEl.innerText  = (d.temp ?? '--') + ' °C';
    humEl.innerText   = (d.hum ?? '--') + ' %';
    soilEl.innerText  = d.soil ?? '--';
    lightEl.innerText = (d.light == 0 ? 'Dark' : 'Bright');
    airEl.innerText   = (d.air == 1 ? 'Polluted' : 'Good');

    espEl.innerText = 'Connected ✔';
    timeEl.innerText = new Date().toLocaleTimeString();
    modeEl.innerText = d.auto ?? (autoMode ? 'Auto' : 'Manual');
  } catch(err) {
    espEl.innerText = 'Disconnected ✖';
    console.error("Fetch error:", err);
  }
}
setInterval(loadData, 400);   // 0.4s fast refresh
loadData();
function send(device, state){
  fetch(`${BASE_URL}/api/control?device=${device}&state=${state}`, { method: 'POST' })
    .then(()=> console.log(`${device} -> ${state}`))
    .catch(e => console.error("Control error", e));
}

themeToggle.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    document.body.classList.add('day');
    themeToggle.innerText = 'Dark';
  } else {
    document.body.classList.remove('day');
    document.body.classList.add('dark');
    themeToggle.innerText = 'Light';
  }
});

autoToggle.addEventListener('click', async () => {
  autoMode = !autoMode;
  const state = autoMode ? 'ON' : 'OFF';
  autoToggle.innerText = `Auto: ${state}`;
  await fetch(`${BASE_URL}/api/auto?state=${state}`, { method: 'POST' });
});

startStreamBtn.addEventListener('click', () => {
  camFrame.src = `${CAM_IP}/stream?${Date.now()}`;
  camFrame.style.display = 'block';
  capturedImg.style.display = 'none';
  startStreamBtn.style.display = 'none';
  stopStreamBtn.style.display = 'inline-block';
});

stopStreamBtn.addEventListener('click', () => {
  camFrame.src = '';
  camFrame.style.display = 'none';
  stopStreamBtn.style.display = 'none';
  startStreamBtn.style.display = 'inline-block';
});

captureBtn.addEventListener('click', async () => {
  captureBtn.disabled = true;
  aiResultEl.innerText = "📸 Capturing...";

  try {
    const r = await fetch(`${CAM_IP}/capture`);
    if (!r.ok) throw new Error("Capture failed");

    const blob = await r.blob();
    capturedImg.src = URL.createObjectURL(blob);
    capturedImg.style.display = 'block';
    camFrame.style.display = 'none';

    aiResultEl.innerText = "📸 Image captured & saved to SD card";
  } catch (err) {
    aiResultEl.innerText = "❌ Capture failed";
  } finally {
    captureBtn.disabled = false;
  }
});

flashOnBtn.addEventListener('click', () => fetch(`${CAM_IP}/flash/on`));
flashOffBtn.addEventListener('click', () => fetch(`${CAM_IP}/flash/off`));
