document.addEventListener('DOMContentLoaded', function() {
  // Inicializo Glide karuselin
  new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 3000,
    hoverpause: true,
  }).mount();

  // Modal për galerinë grid
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.close');

  document.querySelectorAll('.image-grid img').forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Mbyll modalin edhe nëse klikoni jashtë imazhit
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});