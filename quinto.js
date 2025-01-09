// quinto e ultimo desafio rsrs
// Chama a função e exibe os resultados
const resultado = calcularPercentuais(faturamento);
console.log(`Valor total: R$ ${resultado.total.toFixed(2)}`);
console.log("Percentual de representação por estado:");
for (const estado in resultado.percentuais) {
    console.log(`${estado}: ${resultado.percentuais[estado]}%`);
}

function inverterString(texto) {
    let textoInvertido = "";

    // Percorre a string de trás para frente
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }

    return textoInvertido;
}

// Exemplo de uso
const stringOriginal = "GabrielaAlcantara";
const stringInvertida = inverterString(stringOriginal);

console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);
