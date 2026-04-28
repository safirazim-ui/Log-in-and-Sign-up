// Login logic
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');

  if (username === 'admin' && password === '1234') {
    message.style.color = 'lightgreen';
    message.textContent = 'Login successful!';
  } else {
    message.style.color = 'red';
    message.textContent = 'Invalid credentials';
  }
});

// Theme toggle
const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  toggleBtn.textContent = 
    document.body.classList.contains('dark') ? '☀️' : '🌙';
});