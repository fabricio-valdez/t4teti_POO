const Paneles = [];
let turno = 0;
const btnPanel = (panel, posicion) => {
    turno+=1;
    const btn= panel.target;
    const jugador = turno % 2 ? 'red' : 'green'; 
    btn.style.backgroundColor = jugador;
    Paneles [posicion] = jugador;
    if(juego())alert('Gano el jugador ' + jugador);
}
const juego = () =>{
    if ((Paneles[0] == Paneles[1] && Paneles[0] == Paneles[2] && Paneles[0])||
    (Paneles[3] == Paneles[4] && Paneles[3] == Paneles[5] && Paneles[3])||
    (Paneles[6] == Paneles[7] && Paneles[6] == Paneles[8] && Paneles[6])||
    (Paneles[0] == Paneles[3] && Paneles[0] == Paneles[6] && Paneles[0])||
    (Paneles[1] == Paneles[4] && Paneles[1] == Paneles[7] && Paneles[1])||
    (Paneles[2] == Paneles[5] && Paneles[2] == Paneles[8] && Paneles[2])||
    (Paneles[0] == Paneles[4] && Paneles[0] == Paneles[8] && Paneles[0])||
    (Paneles[2] == Paneles[4] && Paneles[2] == Paneles[6] && Paneles[2])){
        reset()
        Paneles.forEach((i)=>{Paneles.splice(i)})
        return true
    }else if(empate()) {
        reset()
        Paneles.forEach((i)=>{Paneles.splice(i)})
        alert('Empate')
    }else { 
    return false
    }
}
document.querySelectorAll('button').forEach ((obj,i) => obj.addEventListener('click',(panel) => btnPanel (panel,i)));
function empate(){
    cont = 0
    for (i=0;i<9;i++){
        if(document.getElementById(i).style.backgroundColor=="red"|| document.getElementById(i).style.backgroundColor=='green'){
            cont+=1}}
    if (cont == 9){
        return true
    }else{
        return false
    }
}
function reset(){
    for (i=0;i<9;i++){
        document.getElementById(i).style.background = ''
    }
}
function color(id){
    return document.getElementById(id).style.background
}