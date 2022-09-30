const somatorioDeNotas = (n1, n2, n3, n4) => {
    const somatorio = (n1 + n2 + n3 + n4) / 4
    const result = somatorio > 7 ? true : false
    return result
}

module.exports = somatorioDeNotas