const numerosDivisiveis = (num1, num2) => {
    const number1 = []
    const number2 = []
    for (let i = num1; i <= num2; i++) {
        i % 2 === 0 ? number1.push(i) : number2.push(i)
    }
    return number1
}
module.exports = numerosDivisiveis

