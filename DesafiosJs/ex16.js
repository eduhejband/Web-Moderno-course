function filtrarNumeros(array) {
    const resultado = []
    for(let item of array)
        if(typeof item === "number")
           resultado.push(item)
    return resultado
}