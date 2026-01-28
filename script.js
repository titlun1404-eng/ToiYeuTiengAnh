/* =========================
   1. Navbar đổi màu khi cuộn
========================= */
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* =========================
   2. Modal đặt tour
========================= */
const modal = document.getElementById('tourModal');
const btnContact = document.querySelector('.btn-contact');
const closeBtn = document.querySelector('.close-btn');

btnContact.addEventListener('click', e => {
  e.preventDefault();
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

/* =========================
   3. Gửi form (giả lập)
========================= */
document.getElementById('booking-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.');
  modal.style.display = 'none';
});

/* =========================
   4. Card xuất hiện khi cuộn
========================= */
const cards = document.querySelectorAll('.card');

function showCardsOnScroll() {
  const trigger = window.innerHeight * 0.85;

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      card.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showCardsOnScroll);
window.addEventListener('load', showCardsOnScroll);

/* =========================
   5. Click card → active
========================= */
cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

/* =========================
   6. Nút "Xem chi tiết"
========================= */
document.querySelectorAll('.card-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation(); // vẫn chặn click lan lên card

    const card = btn.closest('.card');
    const link = card.dataset.link;

    if (link) {
      window.location.href = link;
    }
  });
});

cards.forEach(card => {
  card.addEventListener('click', () => {
    const link = card.dataset.link;
    if (link) {
      window.location.href = link;
    }
  });
});
const galleryImgs = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

galleryImgs.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
const params = new URLSearchParams(window.location.search);
const tour = params.get('tour');

if (
  tour &&
  ['halong', 'yentu', 'baotang'].includes(tour) &&
  document.getElementById('tourModal')
) {
  document.getElementById('tourModal').style.display = 'block';
}
