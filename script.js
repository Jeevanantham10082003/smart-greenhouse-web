// ================= CONFIG =================
const BASE_URL = "http://10.215.138.222:3000";
const CAM_IP   = "http://10.215.138.82";

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

/* ================= SENSOR DATA ================= */
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
  } catch {
    espEl.innerText = 'Disconnected ✖';
  }
}

setInterval(loadData, 400);
loadData();

/* ================= DEVICE CONTROL ================= */
function send(device, state){
  fetch(`${BASE_URL}/api/control?device=${device}&state=${state}`, { method: 'POST' });
}

/* ================= THEME ================= */
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('day');
  themeToggle.innerText = document.body.classList.contains('dark') ? 'Light' : 'Dark';
});

/* ================= AUTO MODE ================= */
autoToggle.addEventListener('click', async () => {
  autoMode = !autoMode;
  const state = autoMode ? 'ON' : 'OFF';
  autoToggle.innerText = `Auto: ${state}`;
  await fetch(`${BASE_URL}/api/auto?state=${state}`, { method: 'POST' });
});

/* ================= CAMERA STREAM ================= */
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

/* ================= CAPTURE ================= */
captureBtn.addEventListener('click', async () => {
  try {
    const res = await fetch(`${CAM_IP}/capture`);
    if (!res.ok) throw new Error();

    const blob = await res.blob();
    const filename = res.headers.get("X-Filename");

    capturedImg.src = URL.createObjectURL(blob);
    capturedImg.style.display = 'block';
    camFrame.style.display = 'none';

    aiResultEl.innerText = `📸 Saved: ${filename}`;

    loadGallery();   // ✅ correct
  } catch {
    aiResultEl.innerText = "❌ Capture failed";
  }
});
/* ================= SD GALLERY ================= */
async function loadGallery() {
  const res = await fetch(`${CAM_IP}/list`);
  const files = await res.json();

  const g = document.getElementById("gallery");
  g.innerHTML = "";

  files.forEach(name => {
    const div = document.createElement("div");

    // IMAGE
    const img = document.createElement("img");
    img.src = `${CAM_IP}/image?name=${name}`;
    img.onclick = () => {
      capturedImg.src = img.src;
      capturedImg.style.display = "block";
    };

    // DOWNLOAD BUTTON
    const download = document.createElement("button");
    download.innerText = "Download";
    download.onclick = () => {
      window.open(`${CAM_IP}/image?name=${name}`, "_blank");
    };

    // DELETE BUTTON
    const del = document.createElement("button");
    del.innerText = "Delete";
    del.onclick = async () => {
      await fetch(`${CAM_IP}/delete?name=${name}`);
      loadGallery();
    };

    div.appendChild(img);
    div.appendChild(download);
    div.appendChild(del);
    g.appendChild(div);
  });
}
/* ================= END GALLERY =================

/* ================= FLASH ================= */
flashOnBtn.addEventListener('click', () => fetch(`${CAM_IP}/flash/on`));
flashOffBtn.addEventListener('click', () => fetch(`${CAM_IP}/flash/off`));

/* ================= INIT ================= */
loadGallery();   // ✅ now works
aiResultEl.innerText = '📸 Ready to capture';
/* ================= END ================= */
