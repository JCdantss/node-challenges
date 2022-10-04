const numerosDivisiveis = (num1, num2) => {
    const numerosDivisores = []
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) { numerosDivisores.push(i) }
    }
    return numerosDivisores
}
module.exports = numerosDivisiveis

