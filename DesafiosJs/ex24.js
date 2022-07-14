function menorNumero(numeros) {
    let menor = numeros[0]
    for (let i in numeros)
        if (numeros[i] < menor)
            menor = numeros[i]
    return menor
    }