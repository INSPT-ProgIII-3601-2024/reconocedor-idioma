const {reconocerIdioma} = require('./reconocedor');

// Leer archivo de texto
const texto = "The Cat is unDer the table!!---".toLowerCase();

elIdioma = reconocerIdioma(texto);
console.log(`El texto está en ${elIdioma}`);
