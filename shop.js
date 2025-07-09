
  let id = 2; 

  function buy() {
    const products = document.querySelectorAll('.product');
    products.forEach((product, index) => {
      const quantityInput = product.querySelector('input');
      const quantity = parseInt(quantityInput.value);
      if (quantity > 0) {
        const name = product.querySelector('p').textContent;
        const priceText = product.querySelector('h3').textContent;
        const price = parseFloat(priceText.replace('$', ''));
        const total = price * quantity;

     
        const tbody = document.querySelector('tbody');
        const tr = document.createElement('tr');

        tr.innerHTML = `
          <td>${id}</td>
          <td>${name}</td>
          <td>${quantity}</td>
          <td>${price}$</td>
          <td>${total}$</td>
          <td><button onclick="deleteRow(this)">Delete</button></td>
        `;

        tbody.appendChild(tr);
        id++;

       
        quantityInput.value = '';
      }
    });
  }

  function deleteRow(btn) {
    btn.closest('tr').remove();
  }

