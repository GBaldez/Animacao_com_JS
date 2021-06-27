const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");

/*Obtendo a hora atual, criando uma variável para receber dia e hora atuais 
e pegando as horas, minutos e segundos usando os métodos get*/
var data = new Date();
console.log(data);
let hr = data.getHours();
let min = data.getMinutes();
let seg = data.getSeconds();
console.log("Hora: " + hr + " Minuto: " + min + "Segundos: " + seg);

/*Calculando as unidades de medida de tempo e graus para definir a posição dos ponteiros*/
let posicaoHr = (hr*360/12)+(min*(360/60)/12);
let posicaoMin = (min*360/60)+(seg*(360/60)/60);
let posicaoSeg = seg*360/60;

function executarRelogio() {
    
    posicaoHr = posicaoHr+(3/360);
    posicaoMin = posicaoMin+(6/60);
    posicaoSeg = posicaoSeg+6;

/* Aplicando uma rotação ao estilo da constante usando transform com o valor
da variável posicao em graus.*/

    PONTEIROHORA.style.transform = "rotate(" + posicaoHr + "deg)";
    PONTEIROMINUTO.style.transform = "rotate(" + posicaoMin + "deg)";
    PONTEIROSEGUNDO.style.transform = "rotate(" + posicaoSeg + "deg)";
    
}
/*setInterval* chama uma função ou executa um trecho de código
em um intervalo de tempo estabeleciodo*/
var intervalo = setInterval(executarRelogio, 1000);
