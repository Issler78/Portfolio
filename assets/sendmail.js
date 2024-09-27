const form = document.querySelector('form');
const nome = document.getElementById('nome-input');
const email = document.getElementById('email-input');
const body = document.getElementById('mensagem-input');
const alertmessage = document.querySelector('.alert-message');

function checkInputs() {
    const items = document.querySelectorAll('.item');

    // Verifica para cada input se esta vazio, se estiver adicionar classe de error nele
    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    // Verifica via um Regex se o campo de email esta válido
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Insira um endereço de e-mail válido";
        } else {
            errorTxtEmail.innerText = "O campo e-mail é obrigatório";
        }
    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

function sendEmail() {
    // Dados do formulário
    const formData = new FormData(form);
    formData.set('subject', `Mensagem de contato de ${nome.value}`);

    // Transforma o form data em JSON
    const JSONform = JSON.stringify(Object.fromEntries(formData)); 

    

    // Envia a requisição AJAX usando fetch
    fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSONform,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Exibe a mensagem de alerta
            alertmessage.style.visibility = 'visible';
            alertmessage.style.opacity = '1';
        } else {
            console.log('Erro: ', data.message);
        }
    })
    .catch(error => {
        console.log('Erro: ', error);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Valida os inputs
    checkInputs();

    if (!nome.classList.contains("error") && !email.classList.contains("error") && !body.classList.contains("error")) {
        // Envia o email
        sendEmail();

        // Reseta o formulario
        form.reset();
        return false;
    }
})