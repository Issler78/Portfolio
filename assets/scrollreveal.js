window.sr = ScrollReveal({ reveal: true });

// inicio da pagina
sr.reveal('.image', { duration: 2000 });

// sessao sobre
sr.reveal('.texto-sobre', {
    reveal: true, 
    origin: 'left',
    distance: '500px',
    duration: 1200,
    easing: 'ease-in-out',
});

// sessao projetos
sr.reveal('.container', {
    origin: 'left',
    distance: '500px',
    duration: 1500,
    easing: 'ease-in-out',
    reset: true
});

sr.reveal('form', {
    origin: 'left',
    distance: '500px',
    duration: 1500,
    easing: 'ease-in-out',
    reset: true
});

sr.reveal('.text-contato', {
    origin: 'right',
    distance: '500px',
    duration: 1500,
    easing: 'ease-in-out',
    reset: true
})