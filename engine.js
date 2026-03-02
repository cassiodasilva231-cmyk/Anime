let playerHP = 150;
let enemyHP = 0;

function salvarEp(ep){
localStorage.setItem("epAtual", ep);
}

function barraHP(id, valor, max){
let el = document.getElementById(id);
let pct = (valor/max)*100;
el.style.width = pct+"%";
}

function ataque(){
let dano = Math.floor(Math.random()*25)+10;
enemyHP -= dano;

animarImpacto();

if(enemyHP <= 0){
proximaCena();
}
else{
contraAtaque();
}

updateHP();
}

function contraAtaque(){
let dano = Math.floor(Math.random()*18)+8;
playerHP -= dano;

if(playerHP <= 0){
alert("Você perdeu!");
location.reload();
}
}

function updateHP(){
barraHP("playerBar",playerHP,150);
barraHP("enemyBar",enemyHP,enemyMax);
}

function animarImpacto(){
ctx.fillStyle="yellow";
ctx.fillRect(Math.random()*400,Math.random()*400,20,20);
  }
