const numerosDivisiveis = require('./numeros-divisiveis')

test('numeros divisiveis por 2', () => {
    expect(numerosDivisiveis(1, 10)).toStrictEqual([2, 4, 6, 8, 10])
})
