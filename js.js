function toggleExperience() {
  const work = document.getElementById("workExperience");
  const btn = document.querySelector(".show-more");
  if (work.style.display === "none" || work.style.display === "") {
    work.style.display = "block";
    btn.textContent = "Show less";
  } else {
    work.style.display = "none";
    btn.textContent = "Show more";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Header slide xuống
  setTimeout(() => {
    document.querySelector('header').classList.add('show');
  }, 100);

  // Carousel ảnh fade in/out
  const images = document.querySelectorAll('.carousel-image');
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.remove('active');
      if (i === index) {
        img.classList.add('active');
      }
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  showImage(currentIndex);
  setInterval(nextImage, 3000);

  // Progress bar animation khi vào view
  const progressObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progress = entry.target;
        const percent = progress.getAttribute('data-percent');
        progress.style.width = percent;
        observer.unobserve(progress);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.progress').forEach(progress => {
    progressObserver.observe(progress);
  });

  // Animation cho service cards
  const serviceCards = document.querySelectorAll(".service-card");
  const cardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, i * 200);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  serviceCards.forEach(card => {
    cardObserver.observe(card);
  });
});
window.addEventListener('DOMContentLoaded', () => {
  // Hiện header trượt xuống
  setTimeout(() => {
    document.querySelector('header').classList.add('show');
  }, 100);

  // Hiện about text fade in từ trên xuống
  setTimeout(() => {
    document.querySelector('.info').classList.add('fade-in-down');
  }, 300); // delay 300ms, tùy chỉnh được
});
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.about-text-box').classList.add('slide-in-left');
    document.querySelector('.about-image').classList.add('fade-in');
  }, 300);
});


function showGallery(type, element) {
  const graphic = document.getElementById('graphic-gallery');
  const photo = document.getElementById('photo-gallery');
  const concept = document.getElementById('concept-gallery'); // Thêm biến mới
  const tabs = document.querySelectorAll('.tab');

  // Ẩn hết tất cả gallery trước
  graphic.classList.add('hidden');
  photo.classList.add('hidden');
  concept.classList.add('hidden');

  // Hiện gallery tương ứng
  if (type === 'graphic') {
    graphic.classList.remove('hidden');
  } else if (type === 'photo') {
    photo.classList.remove('hidden');
  } else if (type === 'concept') {
    concept.classList.remove('hidden');
  }

  // Đánh dấu tab active
  tabs.forEach(tab => tab.classList.remove('active'));
  element.classList.add('active');
}

function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}



document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Ngăn form reload trang

      // Lấy giá trị các ô input
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const tel = document.getElementById('tel').value.trim();
      const message = document.getElementById('message').value.trim();
      const errorMsg = document.getElementById('error-msg');

      // Kiểm tra nếu có ô trống
      if (!name || !email || !tel || !message) {
        errorMsg.classList.remove('hidden');
      } else {
        errorMsg.classList.add('hidden');
        alert("Gửi thành công!");
        this.reset(); // reset form
      }
    });
  }
});
//link//
// Scroll to Contact Section when any "Sign Up" button is clicked
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function () {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


