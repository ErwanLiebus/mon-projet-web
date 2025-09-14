// Horloge dynamique
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('fr-FR');
  document.getElementById('clock').textContent = time;
}
setInterval(updateClock, 1000);
updateClock();

// Météo fictive
const fakeWeather = ["☀️ Soleil", "🌧️ Pluie", "⛅ Nuages", "❄️ Neige"];
document.getElementById('weather').textContent = fakeWeather[Math.floor(Math.random() * fakeWeather.length)];

// Tâches avec stockage local
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  taskList.innerHTML = '';
  tasks.forEach((task, i) => {
    const li = document.createElement('li');
    li.textContent = task;
    li.onclick = () => {
      tasks.splice(i, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      loadTasks();
    };
    taskList.appendChild(li);
  });
}

addTaskBtn.onclick = () => {
  const task = taskInput.value.trim();
  if (task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    loadTasks();
  }
};

loadTasks();

// Thème clair/sombre
const themeToggle = document.getElementById('themeToggle');
themeToggle.onclick = () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
};