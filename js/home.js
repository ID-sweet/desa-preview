// ====== NAVIGASI HAMBURGER ======
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close hamburger menu when clicking on nav links
const navLinkElements = document.querySelectorAll('.nav-link');
navLinkElements.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// ====== SCROLL KE SECTION ======
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
window.scrollToSection = scrollToSection;

// ====== MODAL PENCARIAN ======
const searchBtn = document.getElementById('search-btn');
const searchBtnMobile = document.getElementById('search-btn-mobile');
const searchModal = document.getElementById('search-modal');
const closeSearch = document.getElementById('close-search');

function openSearchModal() {
  searchModal.style.display = 'flex';
  document.getElementById('search-input').focus();
}

searchBtn.addEventListener('click', openSearchModal);
if (searchBtnMobile) {
  searchBtnMobile.addEventListener('click', openSearchModal);
}
closeSearch.addEventListener('click', () => {
  searchModal.style.display = 'none';
});
searchModal.addEventListener('click', (e) => {
  if (e.target === searchModal) searchModal.style.display = 'none';
});
function search() {
  const query = document.getElementById('search-input').value;
  showToast('Mencari: ' + query, 'success');
}
window.search = search;
function searchByTag(tag) {
  document.getElementById('search-input').value = tag;
  search();
}
window.searchByTag = searchByTag;



// ====== DARK MODE ======
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');

function setTheme(dark) {
  document.body.dataset.theme = dark ? 'dark' : 'light';
  themeToggle.classList.toggle('fa-moon', !dark);
  themeToggle.classList.toggle('fa-sun', dark);
  if (themeToggleMobile) {
    themeToggleMobile.classList.toggle('fa-moon', !dark);
    themeToggleMobile.classList.toggle('fa-sun', dark);
  }
}

function toggleTheme() {
  const isDark = document.body.dataset.theme === 'dark';
  setTheme(!isDark);
}

themeToggle.addEventListener('click', toggleTheme);
if (themeToggleMobile) {
  themeToggleMobile.addEventListener('click', toggleTheme);
}
// Set default theme
setTheme(false);

// ====== HERO CAROUSEL ======
let currentSlide = 0;
const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;
function updateCarousel() {
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  indicators.forEach((ind, idx) => ind.classList.toggle('active', idx === currentSlide));
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}
function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}
function goToSlide(idx) {
  currentSlide = idx;
  updateCarousel();
}
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.goToSlide = goToSlide;
setInterval(nextSlide, 5000);

// ====== FILTER GALERI ======
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    filterBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const filter = this.dataset.filter;
    galleryItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// ====== ANIMASI COUNTER STATISTIK ======
function animateCounter(el) {
  const target = +el.dataset.target;
  let count = 0;
  const increment = Math.ceil(target / 100);
  function update() {
    count += increment;
    if (count > target) count = target;
    el.textContent = count.toLocaleString('id-ID');
    if (count < target) requestAnimationFrame(update);
  }
  update();
}
document.querySelectorAll('.counter').forEach(animateCounter);

// ====== TOAST NOTIFIKASI ======
function showToast(pesan, tipe = 'success') {
  const toast = document.getElementById('toast');
  const icon = toast.querySelector('.toast-icon');
  const message = toast.querySelector('.toast-message');
  toast.className = 'toast ' + tipe;
  message.textContent = pesan;
  icon.className = 'toast-icon';
  if (tipe === 'success') icon.classList.add('fa', 'fa-check-circle');
  if (tipe === 'error') icon.classList.add('fa', 'fa-times-circle');
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 3000);
}
window.showToast = showToast;

// ====== BACK TO TOP ======
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ====== FORM ADUAN ======
const complaintForm = document.getElementById('complaintForm');
if (complaintForm) {
  complaintForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Validasi sederhana
    const nama = document.getElementById('complaint-name').value.trim();
    const kategori = document.getElementById('complaint-category').value;
    const judul = document.getElementById('complaint-subject').value.trim();
    const pesan = document.getElementById('complaint-message').value.trim();
    if (!nama || !kategori || !judul || !pesan) {
      showToast('Harap isi semua kolom wajib!', 'error');
      return;
    }
    showToast('Aduan berhasil dikirim. Terima kasih!', 'success');
    complaintForm.reset();
  });
}

// ====== LOADING ANIMATION ======
window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  if (loading) loading.style.opacity = 0;
  setTimeout(() => { if (loading) loading.style.display = 'none'; }, 500);
}); 