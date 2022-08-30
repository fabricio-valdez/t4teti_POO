const Paneles = [];
let turno = 0;
const btnPanel = (panel, posicion) => {
    turno+=1;
    const btn= panel.target;
    const jugador = turno % 2 ? 'red' : 'green'; 
    btn.style.backgroundColor = jugador;
    Paneles [posicion] = jugador;
    alert (juego())
}
const juego = () =>{
    if (Paneles[0] == Paneles[1] && Paneles[0] == Paneles[2] && Paneles[0]){
        return true;
    }else if (Paneles[3] == Paneles[4] && Paneles[3] == Paneles[5] && Paneles[3]){
        return true;
    }else if (Paneles[6] == Paneles[7] && Paneles[6] == Paneles[8] && Paneles[6]){
        return true
    }else if (Paneles[0] == Paneles[3] && Paneles[0] == Paneles[6] && Paneles[0]){
        return true
    }else if (Paneles[1] == Paneles[4] && Paneles[1] == Paneles[7] && Paneles[1]){
        return true
    }else if (Paneles[2] == Paneles[5] && Paneles[2] == Paneles[8] && Paneles[2]){
        return true
    }else if (Paneles[0] == Paneles[4] && Paneles[0] == Paneles[8] && Paneles[0]){
        return true
    }else if (Paneles[2] == Paneles[4] && Paneles[2] == Paneles[6] && Paneles[2]){
        return true
    }
    return false
}
document.querySelectorAll('button').forEach ((obj,i) => obj.addEventListener('click',(panel) => btnPanel (panel,i)));