const reconocerIdioma = (texto) => {    
    // Normalizar cadena
    let textoArreglado = texto.replace(/[^a-z]/g, "");
    
    // Contar ocurrencias de cada letra
    contadores = crearVecOcurrencias(textoArreglado);
    const cod = codigoIdiomaConMenorError(contadores);
    
    // Calcular ECM para cada idioma
    return cod;
}

const otra = () => {
    
}

const codigoIdiomaConMenorError = (contadores) => {

    /*
        Esto calcula el ECM de UN IDIOMA. Habría que hacerlo para todos los demas. Esta función debería detectar cuál es el más chico y retornar el nombre del idioma asociado a tal ECM.
    */ 

    frecuenciasEspaniol = [7.81,1.28,2.93,4.11,13.05,2.88,1.39,5.85,6.77,0.23,0.42,3.6,2.62,7.28,8.21,2.15,0.14,6.64,6.46,9.02,2.77,1,1.49,0.3,1.51,0.09];
    const sumatoria = contadores.reduce( (a,b) => a + b );
    contadores = contadores.map(numAbsoluto => numAbsoluto / sumatoria);
    
    contadores = contadores.map((porc, i) => Math.pow(frecuenciasEspaniol[i] - porc, 2)  );
    console.log(contadores)

    ecm = contadores.reduce( (a,b) => a + b ) / contadores.length;
    return ecm;
}

const crearVecOcurrencias = (textoArreglado) => {
    const contadores = new Array(26).fill(0);
    [...textoArreglado].forEach(cadenaDeUnSoloCaracter => {
        contadores[cadenaDeUnSoloCaracter.charCodeAt(0) - 97]++;
    });
    return contadores;
}
/*

module.export = {
    reconocerIdioma: reconocerIdioma,
    otra: otra
}

*/

module.exports = {
    reconocerIdioma,
    otra
}