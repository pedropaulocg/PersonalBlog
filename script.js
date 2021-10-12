var menuItens = document.querySelectorAll('.menu a');

menuItens.forEach(item => {
    item.addEventListener('click', scrolltoid)
})
function scrolltoid(event) {
    event.preventDefault();
    var element = event.target;
    var id = element.getAttribute('href');
    var to = document.querySelector(id).offsetTop

    window.scroll({
        top: to - 40,
        behavior: "smooth"
    })
}

function copiar() {
    navigator.clipboard.writeText('pedropaulocostaguima@hotmail.com')
    alert('Meu email é pedropaulocostaguima@hotmail.com, e ja foi copiado para sua area de transferência')

}