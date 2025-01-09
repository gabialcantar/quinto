// Função para calcular percentuais de faturamento
function calcularPercentuais(faturamento) {
    // Soma o valor total do faturamento
    const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

    // Calcula os percentuais de cada estado
    const percentuais = {};
    for (const estado in faturamento) {
        percentuais[estado] = ((faturamento[estado] / total) * 100).toFixed(2);
    }

    return { total, percentuais };
}

// Dados de faturamento
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Chama a função e exibe os resultados
const resultado = calcularPercentuais(faturamento);
console.log(`Valor total: R$ ${resultado.total.toFixed(2)}`);
console.log("Percentual de representação por estado:");
for (const estado in resultado.percentuais) {
    console.log(`${estado}: ${resultado.percentuais[estado]}%`);
}

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
