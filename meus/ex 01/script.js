function calculo() {
    let alt = document.getElementById('txta')
    let bas = document.getElementById('txtb')
    let area = document.getElementById('area')
    let perimetro = document.getElementById('perimetro')

    if (alt.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let h = Number(alt.value)
        let b = Number(bas.value)
        perimetro.innerHTML = `Perímetro: ${h*2 + b*2}`;
        area.innerHTML = `Área: ${h*b}`;
    }
}
