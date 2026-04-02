// ============================================
// Ahmed F. AbouElhamayed - Academic Website JS
// ============================================

(function () {
  'use strict';

  // ---------- Dark Mode Toggle ----------
  const themeToggle = document.querySelector('.theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeToggle) {
      themeToggle.innerHTML = theme === 'dark'
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
    }
  }

  // Initialize theme
  const saved = localStorage.getItem('theme');
  if (saved) {
    setTheme(saved);
  } else if (prefersDark.matches) {
    setTheme('dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // ---------- Mobile Navigation ----------
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // ---------- Active Nav Link ----------
  var path = window.location.pathname;
  var page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === page || (page === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
    // Handle blog subpages
    if (page === 'index.html' && path.includes('/blog/') && href === 'blog/index.html') {
      link.classList.add('active');
    }
  });

})();
