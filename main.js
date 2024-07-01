window.onload = function() {
  document.getElementById("payment-result").innerText = "Bienvenido al Carrito";
};

function calculateTotal() {
  const checkboxes = document.querySelectorAll(".product-checkbox");
  let total = 0;
  // Sumar el precio de los productos seleccionados
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      total += parseInt(checkbox.getAttribute("data-price"));
    }
  });

  // Array de objetos con códigos de descuento
  const discountCodes = [
    { code: "1191", discount: 0.2 },
    { code: "2345", discount: 0.15 },
    { code: "5678", discount: 0.25 },
    { code: "9101", discount: 0.1 },
    { code: "1122", discount: 0.3 }
  ];

  // Obtener el código de descuento ingresado
  const discountCode = document.getElementById("discount-code").value;
  const validDiscount = discountCodes.filter(discount => discount.code === discountCode);

  if (validDiscount.length > 0) {
    total = total * (1 - validDiscount[0].discount);
  }

  document.getElementById("total").innerText = total.toFixed(2);
}

function displayPaymentForm() {
  document.getElementById("payment-form").style.display = "block";
}

function simulatePayment() {
  const total = parseFloat(document.getElementById("total").innerText);
  let paymentResult = "";

  if (total === 0) {
    paymentResult = "No has seleccionado ningún producto.";
  } else {
    const tipoFactura = document.getElementById("tipoFactura").value;
    const numeroFactura = document.getElementById("numeroFactura").value;

    if (!isNaN(numeroFactura) && Number.isInteger(parseFloat(numeroFactura))) {
      paymentResult = `Pago exitoso! Has pagado $${total.toFixed(2)}. Factura ${tipoFactura} emitida contra ${numeroFactura}.`;

      localStorage.setItem('paymentData', JSON.stringify({
        total: total.toFixed(2),
        cuit: numeroFactura
      }));
    } else {
      paymentResult = "El número ingresado no es válido.";
    }
  }

  document.getElementById("payment-result").innerText = paymentResult;
}