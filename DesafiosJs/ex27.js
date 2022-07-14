function contarCaractere(caractereBuscado, frase) {
    let contador = 0
    for (let i = 0; i < frase.length; i++)
        if (frase.charAt(i) === caractereBuscado)
            contador++
    return contador
    }