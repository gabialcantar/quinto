// Função para inverter uma string
function inverterString(texto) {
    let textoInvertido = "";

    // Percorre a string de trás para frente
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }

    return textoInvertido;
}

// Exemplo de uso da inversão de string
const stringOriginal = "GabrielaAlcantara";
const stringInvertida = inverterString(stringOriginal);

console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);
