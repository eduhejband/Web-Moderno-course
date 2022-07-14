function multiplicar(numeroA, numeroB) {
    let resultado = 0
    /* a otimização feita para diminuir a quantidade de chamadas recursivas pode ser
    realizada aqui para diminuir a quantidade de loops */
    for(let i = 0; i < numeroB; i++)
    resultado += numeroA
    return resultado
    }