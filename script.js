// Mengaktifkan efek smooth scroll aktif pada menu saat di-scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-links a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
const textElement = document.getElementById("typing-text");
// Kamu bisa menambah profesi lain di dalam array ini
const words = ["Frontend Developer", "UI/UX Designer","Videographer"]; 
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeAnimation() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    // Menghapus karakter
    textElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    // Menulis karakter
    textElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  // Mengatur kecepatan ketik
  let typeSpeed = isDeleting ? 50 : 100;

  // Jika teks sudah selesai diketik sepenuhnya
  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000; // Berhenti sejenak selama 2 detik sebelum menghapus
    isDeleting = true;
  } 
  // Jika teks sudah terhapus semua
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Ganti ke kata berikutnya
    typeSpeed = 500; // Jeda sebelum mulai mengetik kata baru
  }

  setTimeout(typeAnimation, typeSpeed);
}

// Menjalankan fungsi setelah seluruh dokumen selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeAnimation, 1000); // Mulai animasi ketik setelah 1 detik
});
const canvas = document.getElementById('constellationCanvas');
const ctx = canvas.getContext('2d');


