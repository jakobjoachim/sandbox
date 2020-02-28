const WebSocket = require('ws');

const ws = new WebSocket('wss://bis2-test.strassen.baden-wuerttemberg.de:80');

ws.onmessage = function(e) {
  console.log(e); // ArrayBuffer object if binary
};

ws.onclose = function(e) {
  console.log(e);
};

ws.onopen = function(e) {
  console.log(e);
  ws.send('hellllooooo');
};

