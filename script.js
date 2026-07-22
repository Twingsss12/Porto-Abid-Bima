document.addEventListener("DOMContentLoaded", () => {
    
  /* ==========================================================================
     1. HAMBURGER MENU (MOBILE NAVIGATION)
     ========================================================================== */
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li a');

  if (hamburger && navMenu) {
      // Toggle menu saat ikon hamburger diklik
      hamburger.addEventListener('click', () => {
          navMenu.classList.toggle('active');
          
          const icon = hamburger.querySelector('i');
          if (icon) {
              icon.classList.toggle('fa-bars');
              icon.classList.toggle('fa-times');
          }
      });

      // Tutup menu otomatis saat salah satu link diklik
      navItems.forEach(item => {
          item.addEventListener('click', () => {
              if (navMenu.classList.contains('active')) {
                  navMenu.classList.remove('active');
                  const icon = hamburger.querySelector('i');
                  if (icon) {
                      icon.classList.add('fa-bars');
                      icon.classList.remove('fa-times');
                  }
              }
          });
      });
  }

  /* ==========================================================================
     2. SCROLL SPY (ACTIVE LINK ON SCROLL)
     ========================================================================== */
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
      let top = window.scrollY;

      sections.forEach(sec => {
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');

          if (top >= offset && top < offset + height) {
              navItems.forEach(link => {
                  link.classList.remove('active');
              });
              
              const activeLink = document.querySelector('.nav-links a[href*=' + id + ']');
              if (activeLink) {
                  activeLink.classList.add('active');
              }
          }
      });
  });

  /* ==========================================================================
     3. TYPING EFFECT ANIMATION
     ========================================================================== */
  const textElement = document.getElementById("typing-text");

  if (textElement) {
      const words = ["Frontend Developer", "UI/UX Designer", "Full Stack Developer", "Backend Developer"];
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      function typeAnimation() {
          const currentWord = words[wordIndex];

          if (isDeleting) {
              textElement.textContent = currentWord.substring(0, charIndex - 1);
              charIndex--;
          } else {
              textElement.textContent = currentWord.substring(0, charIndex + 1);
              charIndex++;
          }

          let typeSpeed = isDeleting ? 50 : 100;

          if (!isDeleting && charIndex === currentWord.length) {
              typeSpeed = 2000; // Pause 2 detik di akhir kata
              isDeleting = true;
          } else if (isDeleting && charIndex === 0) {
              isDeleting = false;
              wordIndex = (wordIndex + 1) % words.length; // Pindah ke kata berikutnya
              typeSpeed = 500; // Jeda sebelum mulai mengetik kata baru
          }

          setTimeout(typeAnimation, typeSpeed);
      }

      // Jalankan animasi ketik setelah jeda 1 detik
      setTimeout(typeAnimation, 1000);
  }

  /* ==========================================================================
     4. CONSTELLATION CANVAS (IF EXISTS)
     ========================================================================== */
  const canvas = document.getElementById('constellationCanvas');
  if (canvas) {
      const ctx = canvas.getContext('2d');
      // Logika atau animasi canvas milikmu bisa diletakkan di sini
  }

});