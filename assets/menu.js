// MENU MOBILE

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
    document.body.style.overflowY = 'hidden'
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
    document.body.style.overflowY = 'auto'
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
    document.body.style.overflowY = 'auto'
})



// NAVEGAÇÃO NAVBAR

const navLinks = document.querySelectorAll(".navigation")

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault()

        const sectionId = this.getAttribute('href')
        const section = document.getElementById(sectionId.replace('#', ''))

        section.scrollIntoView({ behavior: 'smooth' })
    })
})