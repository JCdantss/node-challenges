const salarioBruto = require('./desafio-do-salario')

test('salario bruto com porcetagem de diferenca', () => {
    expect(salarioBruto(1000)).toBe(1200)
})
test('salario bruto com porcetagem de diferenca', () => {
    expect(salarioBruto(2600)).toBe(2860)
})