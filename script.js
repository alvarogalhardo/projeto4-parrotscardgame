let cont=null;
let jogadas=0;
/*Prompt para coletar a quantidade de cartas*/
function verificaAviso (){
    let cartas = prompt('Com quantas cartas quer jogar? (números pares, de 4 a 14 cartas)');
    while ((cartas < 4 || cartas > 14) || cartas%2!==0){
        cartas = prompt('Com quantas cartas quer jogar? (números pares, de 4 a 14 cartas)');
    }
    return cartas;
}

const cartas = verificaAviso(); /*armazena a quantidade de cartas na variavel global cartas*/

function adicionaCartas(){  /*distribui as cartas no jogo*/
    const x = document.querySelector('.cartas');
    const listaCartas = [];
    for (let i=0;i<cartas;i++){
        listaCartas[i]=i;
    }
    listaCartas.sort(comparador);
    for (let j=0;j<cartas;j++){
        x.innerHTML += `<div class="carta-container">
                            <div class="carta"  onclick="virar(this)">
                                <div class="frente"><img src="./img/frente.png"></div>
                                <div class="carta${listaCartas[j]}"></div>
                                <span>${listaCartas[j]}</span>
                            </div>
                        </div>`
    }
    atribuiCartas(listaCartas);
    return listaCartas; /*lista com os índices das cartas*/
}
const listaCartas = adicionaCartas();
function comparador() { /*embaralha a lista de cartas*/
	return Math.random() - 0.5; 
}


function atribuiCartas (listaCartas){  /*atribui o verso das cartas*/
    console.log(listaCartas);
    for (let i=0;i<listaCartas.length;i++){
        let elemento = document.querySelector(`.carta${listaCartas[i]}`);
        elemento.classList.add('verso');
        if (listaCartas[i] == 0 || listaCartas[i] == 1){
            elemento.innerHTML = '<img src="./img/lsdparrot.gif">';
        }
        if (listaCartas[i]== 2 || listaCartas[i]== 3){
            elemento.innerHTML = '<img src="./img/negativeparrot.gif">';
        }
        if (listaCartas[i]==4 || listaCartas[i]==5){
            elemento.innerHTML = '<img src="./img/3parrots.gif">';
        }
        if (listaCartas[i]==6 || listaCartas[i] == 7){
            elemento.innerHTML = '<img src="./img/soccerparrot.gif">';
        }
        if (listaCartas[i]==8 || listaCartas[i]==9){
            elemento.innerHTML = '<img src="./img/headbangingparrot.gif">';
        }
        if (listaCartas[i]==10 || listaCartas[i]==11){
            elemento.innerHTML = '<img src="./img/mustacheparrot.gif">';
        }
        if (listaCartas[i]==12 || listaCartas[i]==13){
            elemento.innerHTML = '<img src="./img/sunglassparrot.gif">';
        }
    }
}

function virar(div){ /*vira as Cartas e chama a função que verifica se são iguais*/
    cont++;
    jogadas++;
    div.classList.add('virada');
    console.log(jogadas);
    verificaCarta();
}

function verificaCarta(){ /*verifica se as cartas são Iguais*/
    if (cont === 2){
        let i=0;
        let duasCartas = document.querySelectorAll('.virada');
        console.log(duasCartas);
        const a = duasCartas[0];
        const b = duasCartas[1];
        const x = Number(duasCartas[0].querySelector('span').innerHTML);
        const y = Number(duasCartas[1].querySelector('span').innerHTML);
       if ((x!==0 && y ===1) || (x===0 && y!==1) || (x!==1 && y===0) || (x===1 && y!==0)){
        setTimeout(desviraCartas, 1000, a,b);
        i++;
       }
       if ((x!==2 && y ===3) || (x===2 && y!==3) || (x!==3 && y===2) || (x===3 && y!==2)){
        setTimeout(desviraCartas, 1000, a,b);
        i++;
       } 
       if ((x!==4 && y ===5) || (x===4 && y!==5) || (x!==5 && y===4) || (x===5 && y!==4)){
        setTimeout(desviraCartas, 1000,a,b);
        i++;
       }
       if ((x!==6 && y ===7) || (x===6 && y!==7) || (x!==7 && y===6) || (x===7 && y!==6)){
        setTimeout(desviraCartas, 1000,a,b);
        i++;
       }
       if ((x!==8 && y ===9) || (x===8 && y!==9) || (x!==9 && y===8) || (x===9 && y!==8)){
        setTimeout(desviraCartas, 1000,a,b);
        i++;
       }
       if ((x!==10 && y ===11) || (x===10 && y!==11) || (x!==11 && y===10) || (x===11 && y!==10)){
        setTimeout(desviraCartas, 1000,a,b);
        i++;
       }
       if ((x!==12 && y ===13) || (x===12 && y!==13) || (x!==13 && y===12) || (x===13 && y!==12)){
        setTimeout(desviraCartas, 1000,a,b);
        i++;
       }
      cont=0;
      console.log(i);
      if(i===0){
        acertou(a,b);
      }
    } 
}
function desviraCartas (a,b){
    a.classList.remove('virada');
    b.classList.remove('virada');
}
function acertou(a,b){
    a.classList.add('virada-certa');
    b.classList.add('virada-certa');
    a.classList.remove('virada');
    b.classList.remove('virada');
    setTimeout(verificaJogo, 1000);
}
function verificaJogo () {
    let viradas = document.querySelectorAll('.virada-certa');
    if (viradas.length == listaCartas.length) {
        alert(`Você ganhou em ${jogadas} jogadas!!`);
    }
}
