const mediaDeNotas = require('./resultado-escolar')

test('Aprovado', () => {
    expect(mediaDeNotas(9, 9, 10, 10)).toBe('Aprovado')
})
test('Reprovado', () => {
    expect(mediaDeNotas(5, 0, 4, 4)).toBe('Reprovado')
})
test('Exame', () => {
    expect(mediaDeNotas(6, 5, 5, 5)).toBe('Exame')
})