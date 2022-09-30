const somatorioDeNotas = require('./resultado-escolar')

test('Aprovado', () => {
    expect(somatorioDeNotas(9, 9, 10, 10)).toBe(true)
})
test('Reprovado', () => {
    expect(somatorioDeNotas(3, 4, 5, 5)).toBe(false)
})