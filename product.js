document.querySelector('.product-card').addEventListener('mouseenter', () => {
    document.querySelector('.card-inner').classList.add('flipped');
  });
  
  document.querySelector('.product-card').addEventListener('mouseleave', () => {
    document.querySelector('.card-inner').classList.remove('flipped');
  });
  