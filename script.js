function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML =`Agora são ${hora} horas.`
if (hora >= 0 && hora <=12) { 
    img.src = 'img/manha.png'
    document.body.style.background = 'yellow'
} else if (hora >= 12 && hora < 18) {
    img.src = 'img/tarde.png'
    document.body.style.background = 'purple'
} else {
    img.src = 'img/noite.png'
    document.body.style.background = 'black'
}
}