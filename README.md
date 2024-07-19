Buenas

Esta es la entrega para el Proyecto Final de Andres Listorti para el Curso de Javascript en CODER.

El código simula la selección de uno o varios productos, sumatoria de su precio, cálculo de descuento (solo si se ingresa alguno de los códigos de descuento del Array de objetos) y simulación de pago. Se utilizan algoritmos condicionales, variables, objetos, arreglos, ciclos y funciones. También se aplica Array de objetos, con su filtrado, para más códigos de descuento. 

Se amplía en varias partes el código de las primeras tres entregas. 

El mismo ya tenía funciones de orden superior (ej: forEach()) y ya cumplía con varios de los requisitos pedidos a partir de esta entrega, Modificaciones del DOM y salidas por HTML. 

Luego se quita la aplicación alert y prompt, ahora se captura evento de usuario con "onclick" en los botones para ingresar un nuevo input al DOM consultando datos al usuario del tipo de factura y su número de identificación impositiva. 

Estos datos de usuario precio y CUIT seran almacenados en el localStorage por supuesto con el uso de JSON.

Todas las entradas son inputs y las salidas van por HTML.

Se agrega el uso de fetch: He creado una función loadProducts que utiliza fetch para cargar los datos de productos desde un archivo JSON (products.json). Esto simula una llamada a una API.
En el archivo HTML, los productos se generan dinámicamente usando JavaScript.

Uso de Promesas y Funciones Asíncronas: La función loadProducts está definida como async y utiliza await para esperar a que la respuesta de fetch sea procesada. La función calculateTotal también se ha convertido en async para cumplir con el requerimiento aunque en este caso await no es necesario, se deja como async por consistencia del ejemplo.

Incorporación de la Librería SweetAlert2: Se ha añadido el script y la hoja de estilos de SweetAlert2 en el archivo HTML, esto permite mostrar alertas con un estilo agradable y moderno.
En la función simulatePayment, se utiliza Swal.fire para mostrar mensajes de éxito o error cuando se realiza una simulación de pago.
La función simulatePayment ahora muestra una alerta usando SweetAlert2 si no se ha seleccionado ningún producto o si el DNI/CUIT ingresado es inválido.
Si la simulación de pago es exitosa, se almacena la información del pago en el localStorage y se muestra una alerta de éxito.

Todo esto se asegura de que los datos sean dinámicos, y la experiencia del usuario sea mucho más rica y manejable.



GitHub: https://github.com/andresListorti/coderJS

Saludos!
