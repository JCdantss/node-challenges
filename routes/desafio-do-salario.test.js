const salarioBruto = require('./desafio-do-salario')

test('salario bruto com porcetagem de diferenca', () => {
    expect(salarioBruto(1000)).toBe(1100)
})

test('salario bruto com porcetagem de diferenca', () => {
    expect(salarioBruto(2500)).toBe(2750)
})