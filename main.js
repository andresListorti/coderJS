function calculateTotal() {
  const checkboxes = document.querySelectorAll(".product-checkbox");
  let total = 0;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      total += parseInt(checkbox.getAttribute("data-price"));
    }
  });

  const discountCode = document.getElementById("discount-code").value;
  if (discountCode === "1191") {
    total = total * 0.8;
  }

  document.getElementById("total").innerText = total.toFixed(2);
}

function simulatePayment() {
  const total = parseFloat(document.getElementById("total").innerText);
  let paymentResult = "";

  if (total === 0) {
    paymentResult = "No has seleccionado ningún producto.";
  } else {
    paymentResult = `Pago exitoso! Has pagado $${total.toFixed(2)}.`;  
  }

  document.getElementById("payment-result").innerText = paymentResult;
}
