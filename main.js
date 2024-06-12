window.onload = function() {
  alert("Bienvenido al Carrito"); 
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

  // Buscar el código de descuento en el array
  const validDiscount = discountCodes.filter(discount => discount.code === discountCode);

  // Si se encuentra un código de descuento válido, aplicar el descuento
  if (validDiscount.length > 0) {
    total = total * (1 - validDiscount[0].discount);
  }

  // Mostrar el total con dos decimales
  document.getElementById("total").innerText = total.toFixed(2);
}


function simulatePayment() {
  const total = parseFloat(document.getElementById("total").innerText);
  let paymentResult = "";

  if (total === 0) {
    paymentResult = "No has seleccionado ningún producto.";
  } else {
    // Solicitar si es consumidor final o requiere factura A
    const tipoFactura = prompt("¿Es consumidor final o requiere factura A? (Ingrese 'A' o 'B' si es consumidor Final)");

    // Solicitar un número entero
    const numeroFactura = prompt("Por favor, ingrese su DNI o CUIT para factura A:");

    // Verificar si el número ingresado es válido
    if (!isNaN(numeroFactura) && Number.isInteger(parseFloat(numeroFactura))) {
      paymentResult = `Pago exitoso! Has pagado $${total.toFixed(2)}. Su pago fue Exitoso: Factura ${tipoFactura} emitida contra ${numeroFactura}.`;
      alert(`Su pago Exitoso: Factura ${tipoFactura} emitida contra ${numeroFactura}.`);
    } else {
      paymentResult = "El número ingresado no es válido.";
    }
  }

  document.getElementById("payment-result").innerText = paymentResult;
}
