const btnPanel = (panel) => {
    const btn= panel.target;
    btn.style.backgroundColor = 'red'
    
}
document.querySelectorAll('button').forEach(obj => obj.addEventListener('click',btnPanel));