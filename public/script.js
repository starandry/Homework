document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('product-container');

  // Fetch products from the API
  fetch('/products')
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        card.innerHTML = `
          <h2>${product.name}</h2>
          <p>Brand: ${product.brand}</p>
          <p>Material: ${product.material}</p>
          <p class="price">$${product.price}</p>
          <p class="availability">${product.availability ? 'In Stock' : 'Out of Stock'}</p>
          <p>Rating: ${product.rating} / 5</p>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });
});
