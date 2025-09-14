// 📁 File System Access API
document.getElementById('openFile').onclick = async () => {
  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  const content = await file.text();
  document.getElementById('fileContent').value = content;
};

document.getElementById('saveFile').onclick = async () => {
  const content = document.getElementById('fileContent').value;
  const handle = await window.showSaveFilePicker();
  const writable = await handle.createWritable();
  await writable.write(content);
  await writable.close();
};

// 🎤 Speech Recognition API
document.getElementById('voiceBtn').onclick = () => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'fr-FR';
  recognition.start();
  recognition.onresult = (e) => {
    const command = e.results[0][0].transcript.toLowerCase();
    if (command.includes("plein écran")) document.getElementById('fullscreenBtn').click();
    if (command.includes("copier")) document.getElementById('copyBtn').click();
    if (command.includes("coller")) document.getElementById('pasteBtn').click();
  };
};

// 🎥 Webcam
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => document.getElementById('webcam').srcObject = stream);

document.getElementById('captureBtn').onclick = () => {
  const video = document.getElementById('webcam');
  const canvas = document.getElementById('snapshot');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
};

// 📋 Clipboard API
document.getElementById('copyBtn').onclick = async () => {
  const text = document.getElementById('clipboardArea').value;
  await navigator.clipboard.writeText(text);
};

document.getElementById('pasteBtn').onclick = async () => {
  const text = await navigator.clipboard.readText();
  document.getElementById('clipboardArea').value = text;
};

// 🖱️ Pointer Lock / Fullscreen
document.getElementById('fullscreenBtn').onclick = () => {
  document.documentElement.requestFullscreen();
};