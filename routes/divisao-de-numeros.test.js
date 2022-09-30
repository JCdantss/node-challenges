const divisao = require('./divisao-de-numeros')

test('divisao entre os numeros 10 e 5 é 2', () => {
    expect(divisao(10, 5)).toBe(2)
})