function AbrirMenu() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 920) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}