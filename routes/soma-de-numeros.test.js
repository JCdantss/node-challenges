const somatorio = require('./soma-de-numeros')

test('a soma de 2,3 e 5 é 10', () => {
    expect(somatorio(2, 3, 10)).toBe(15)
})