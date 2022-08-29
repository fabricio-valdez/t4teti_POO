const btnPulsado = () => {
    alert('Hola!')
}
document.querySelector('button').forEach(obj => obj.addEventListener('click','btnPulsado'));