const mediaDeNotas = (n1, n2, n3, n4) => {
    const media = (n1 + n2 + n3 + n4) / 4
    const result = media > 7 ? true : false
    if (media > 7) {
        return 'Aprovado'
    } else if (media < 4) {
        return 'Reprovado'
    } else if (media >= 4 && media < 7) {
        return 'Exame'
    }
}

module.exports = mediaDeNotas