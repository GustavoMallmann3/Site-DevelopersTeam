function calcularCompras(_precoPreta, _precoFortnite, _precoRosa, _valorPreta, _valorFortnite, _valorRosa, _porcentagem)  {
    const precoPreta = _precoPreta.value
    const precoFortnite = _precoFortnite.value
    const precoRosa = _precoRosa.value
    const valorPreta = _valorPreta.value
    const valorFortnite = _valorFortnite.value
    const valorRosa =  _valorRosa.value
    const porcentagem = _porcentagem.value

    const numPreta = precoPreta * valorPreta
    const numFortnite = precoFortnite * valorFortnite
    const numRosa = precoRosa * valorRosa
    const valorTotal = numFortnite + numPreta + numRosa
    const valorPercentual = valorTotal / 100
    const valorComDesconto = valorPercentual * porcentagem
    const valorFinal = valorTotal - valorComDesconto

    document.querySelector('#resultado').value = valorFinal
}