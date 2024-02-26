const { addKeyword, EVENTS } = require('@bot-whatsapp/bot');
const cancelFlow = require('./cancel.flow');
const rateFlow = require('./rate.flow');
const commentsFlow = require('./comments.flow');
const dudasFlow = require('./dudas.flow');

//  la hora del día
function obtenerSaludo() {
    const horaActual = new Date().getHours();

    let saludo;
    if (horaActual >= 5 && horaActual < 12) {
        saludo = '¡Buen día!';
    } else if (horaActual >= 12 && horaActual < 18) {
        saludo = '¡Buenas tardes!';
    } else {
        saludo = '¡Buenas noches!';
    }

    return saludo + ' Bienvenido a la pastelería "La Condesa"';
}

module.exports = addKeyword(EVENTS.WELCOME)
    .addAnswer(obtenerSaludo())
    .addAnswer([
        'Escribe la palabra del servicio que te gustaría conocer:',
        '👉 *ventas* para conocer nuestros productos',
        '👉 *pedidos* para ver el estado de tu pedido',
        '👉 *cancelar* para terminar la conversación en cualquier momento',
        '👉 *dudas* para saber quiénes somos y tengo dudas'
    ], 
    { capture: true, delay: 3000 }, null,
    [rateFlow, commentsFlow, cancelFlow, dudasFlow]
);
