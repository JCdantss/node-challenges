const salario = (bruto) => {
    const salarioBruto = bruto > 2500 ? bruto * 1.2 : bruto * 1.1
    return salarioBruto
}

module.exports = salario