// Login logic
if (document.getElementById('loginForm')) {
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
}

// Sign Up logic
if (document.getElementById('signupForm')) {
  document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Basic validation
    if (username.length < 3) {
      message.style.color = 'red';
      message.textContent = 'Username must be at least 3 characters long';
      return;
    }

    if (password.length < 6) {
      message.style.color = 'red';
      message.textContent = 'Password must be at least 6 characters long';
      return;
    }

    // Check for at least one uppercase, one lowercase, and one number
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);

    if (!hasUpperCase || !hasLowerCase || !hasNumbers) {
      message.style.color = 'red';
      message.textContent = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
      return;
    }

    // Simulate successful sign up
    message.style.color = 'lightgreen';
    message.textContent = 'Account created successfully! You can now login.';
  });
}

// Theme toggle
const toggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Load saved theme preference on page load
function loadThemePreference() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeIcon.src = 'img/dark.png';
  } else {
    document.body.classList.remove('dark');
    themeIcon.src = 'img/light.png';
  }
}

// Toggle theme and save preference
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeIcon.src = isDark ? 'img/dark.png' : 'img/light.png';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Load theme on page load
loadThemePreference();

// Prevent code inspection
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('keydown', function(e) {
  // Block F12, Ctrl+Shift+I (inspect), Ctrl+Shift+J (console), Ctrl+U (view source)
  if (e.key === 'F12' || 
      (e.ctrlKey && e.shiftKey && e.key === 'I') || 
      (e.ctrlKey && e.shiftKey && e.key === 'J') || 
      (e.ctrlKey && e.key === 'U')) {
    e.preventDefault();
    alert('Developer tools are disabled on this website.');
  }
});

// Vanilla Tilt
VanillaTilt.init(document.querySelector(".glass-box"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.4
});

// Google login/signup
if (document.getElementById('googleBtn')) {
  document.getElementById('googleBtn').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.style.color = 'lightblue';
    message.textContent = 'Redirecting to Google...';
    // In a real app, you would redirect to Google OAuth
    console.log('Google button clicked');
  });
}

// Email login/signup
if (document.getElementById('emailBtn')) {
  document.getElementById('emailBtn').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.style.color = 'lightyellow';
    message.textContent = 'Redirecting to Email...';
    // In a real app, you would redirect to email login/signup page
    console.log('Email button clicked');
  });
}

// BaseLibre login/signup
if (document.getElementById('baseLibreBtn')) {
  document.getElementById('baseLibreBtn').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.style.color = 'lightgreen';
    message.textContent = 'Redirecting to BaseLibre...';
    // In a real app, you would redirect to BaseLibre authentication
    console.log('BaseLibre button clicked');
  });
}

// Disable copy/cut for the entire page
document.addEventListener('copy', (e) => {
    e.preventDefault();
});

document.addEventListener('cut', (e) => {
    e.preventDefault();
});

// Optionally, disable text selection via JS for older browsers
document.onselectstart = () => false;