// Toggle Navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Product Hover Effect
const products = document.querySelectorAll('.product');

products.forEach(product => {
  product.addEventListener('mouseover', () => {
    product.classList.add('hover');
  });

  product.addEventListener('mouseout', () => {
    product.classList.remove('hover');
  });
});

// Search Bar
const searchInput = document.querySelector('.search-input');
const searchResults = document.querySelector('.search-results');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm.length > 2) {
    searchResults.innerHTML = '';
    for (let i = 0; i < 5; i++) {
      const resultHTML = `<li>Search result ${i + 1}</li>`;
      searchResults.innerHTML += resultHTML;
    }
    searchResults.style.display = 'block';
  } else {
    searchResults.style.display = 'none';
  }
});