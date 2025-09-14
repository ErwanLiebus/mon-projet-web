// 🗓️ Date
document.getElementById('date').textContent = new Date().toLocaleDateString('fr-FR', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
});

// 🌤️ Météo fictive
const fakeWeather = ["☀️ Soleil", "🌧️ Pluie", "⛅ Nuages", "❄️ Neige"];
document.getElementById('weather').textContent = fakeWeather[Math.floor(Math.random() * fakeWeather.length)];

// ✅ Tâches
let completed = 0;
function updateStats() {
  document.getElementById('stats').textContent = `Tâches accomplies : ${completed}`;
}

document.getElementById('addTask').onclick = () => {
  const task = document.getElementById('taskInput').value.trim();
  const priority = document.getElementById('priority').value;
  if (!task) return;

  const li = document.createElement('li');
  li.textContent = `${task} [${priority}]`;
  li.onclick = () => {
    li.style.textDecoration = 'line-through';
    completed++;
    updateStats();
  };
  document.getElementById('taskList').appendChild(li);
  document.getElementById('taskInput').value = '';
};

// 🌙 Thème
document.getElementById('themeToggle').onclick = () => {
  document.body.classList.toggle('dark');
  document.getElementById('themeToggle').textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
};

// 🧘 Respiration guidée
document.getElementById('startBreath').onclick = () => {
  const guide = document.getElementById('breathGuide');
  guide.textContent = "Inspire...";
  setTimeout(() => guide.textContent = "Expire...", 4000);
  setTimeout(() => guide.textContent = "Relâche...", 8000);
};