var enderecoremoto = "10.1.64.208";
var portaremota = "8099";
const urlinicial = "ws://" + enderecoremoto + ":" + portaremota;

const WebSocket = require('ws');
const ws = new WebSocket(urlinicial);

//const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade/bnbusdt@trade');

ws.onmessage = (event) => {
    console.log(event.data);
}

ws.onerror = (error) => {
    console.log("Error", error);
}