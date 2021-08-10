var div = document.querySelector("div");
var div_metrics = div.getBoundingClientRect();
var pos_x = 0
var pos_y = 0
var velocidade_x = 3
var velocidade_y = 4

function movement() { // função que movimenta o objeto
    pos_x += velocidade_x
    pos_y += velocidade_y
    div.style.left = `${pos_x}px`
    div.style.top = `${pos_y}px`

    if (pos_x >= window.innerWidth - div.clientWidth) { // colisão da bola com a parede direita
        velocidade_x = -3
    }
    if (pos_x <= 0) { // colisão da bola com a parede esquerda
        velocidade_x = 3
    }


    if (pos_y >= window.innerHeight - div.clientHeight) { // colisão da bola com o teto
        velocidade_y = -4
    }
    if (pos_y <= 0) { // colisão da bola com o chão
        velocidade_y = 4
    }
}
window.setInterval(movement, 1); // chamada da função que movimenta o objeto