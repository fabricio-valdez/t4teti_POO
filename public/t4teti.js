const btnPulsado = () => {
    alert('Hola!')
}
document.querySelectorAll('button').forEach(obj => obj.addEventListener('click',btnPulsado));