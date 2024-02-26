const { addKeyword, EVENTS } = require('@bot-whatsapp/bot');

module.exports = addKeyword('dudas', { caseSensitive: false }) 
    .addAnswer('🤔 ¡Claro! Estoy aquí para ayudarte con cualquier duda que tengas.')
    .addAnswer('Puedes preguntarme sobre nuestros productos, pedidos, horarios, etc.')
    .addAnswer([
        '¿Cuáles son sus productos más populares?',
        '¿Cuál es el proceso para realizar un pedido?',
        '¿Cuánto tiempo tardan en entregar los pedidos?',
        
    ], { capture: true }, null,
    async (ctx, { captured }) => {
       
        const respuesta = `¡Entendido! Veo que tienes dudas sobre: ${captured}. Responderé tan pronto como pueda.`;
        ctx.sendText(respuesta);
    }
);
