const salario = (bruto) => {
    const salarioBruto = bruto > 2500 ? bruto * 1.1 : bruto * 1.2
    return Math.round(salarioBruto)
}

module.exports = salario