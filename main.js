window.onload = async function() {
  document.getElementById("payment-result").innerText = "Bienvenido al Carrito";
  await loadProducts();
};

async function loadProducts() {
  try {
    const response = await fetch('./products.json');
    const products = await response.json();

    const productsDiv = document.getElementById('products');
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `product${product.id}`;
      checkbox.classList.add('product-checkbox');
      checkbox.setAttribute('data-price', product.price);

      const label = document.createElement('label');
      label.setAttribute('for', `product${product.id}`);
      label.innerText = `${product.name} - $${product.price}`;

      productDiv.appendChild(checkbox);
      productDiv.appendChild(label);
      productsDiv.appendChild(productDiv);
    });
  } catch (error) {
    console.error('Error loading products:', error);
  }
}

async function calculateTotal() {
  const checkboxes = document.querySelectorAll(".product-checkbox");
  let total = 0;

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      total += parseInt(checkbox.getAttribute("data-price"));
    }
  });

  const discountCodes = [
    { code: "1191", discount: 0.2 },
    { code: "2345", discount: 0.15 },
    { code: "5678", discount: 0.25 },
    { code: "9101", discount: 0.1 },
    { code: "1122", discount: 0.3 }
  ];

  const discountCode = document.getElementById("discount-code").value;
  const validDiscount = discountCodes.find(discount => discount.code === discountCode);

  if (validDiscount) {
    total *= (1 - validDiscount.discount);
  }

  document.getElementById("total").innerText = total.toFixed(2);
}

function displayPaymentForm() {
  document.getElementById("payment-form").style.display = "block";
}

async function simulatePayment() {
  const total = parseFloat(document.getElementById("total").innerText);
  let paymentResult = "";

  if (total === 0) {
    Swal.fire('Error', 'No has seleccionado ningún producto.', 'error');
    } else {
      const tipoFactura = document.getElementById("tipoFactura").value;
      const numeroFactura = document.getElementById("numeroFactura").value;
  
      if (!isNaN(numeroFactura) && Number.isInteger(parseFloat(numeroFactura))) {
        paymentResult = `Pago exitoso! Has pagado $${total.toFixed(2)}. Factura ${tipoFactura} emitida contra ${numeroFactura}.`;
  
        localStorage.setItem('paymentData', JSON.stringify({
          total: total.toFixed(2),
          cuit: numeroFactura
        }));
  
        Swal.fire('Pago Exitoso', paymentResult, 'success');
      } else {
        paymentResult = "El número ingresado no es válido.";
        Swal.fire('Error', paymentResult, 'error');
      }
    }
  
    document.getElementById("payment-result").innerText = paymentResult;
  }
  