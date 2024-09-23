const form = document.querySelector('form');
const nome = document.getElementById('nome-input');
const email = document.getElementById('email-input');
const body = document.getElementById('mensagem-input');
const alertmessage = document.querySelector('.alert-message');

function checkInputs() {
    const items = document.querySelectorAll('.item');

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
    const bodyMessage = `Nome: ${nome.value}<br><br> E-Mail: ${email.value}<br><br> Mensagem: ${body.value}`;

    Email.send({
        SecureToken : "007ccf56-9ec0-41c4-9386-c0c71ad05b12",
        To : 'isslercontato1901@gmail.com',
        From : `${email.value}`,
        Subject : `Mensagem de contato de ${nome.value}`,
        Body : bodyMessage
    }).then(
        message => {
            console.log(message)
            if (message == "OK") {
                // Mensagem de alerta
                alertmessage.style.visibility = 'visible';
                alertmessage.style.opacity = '1';
            }
        }
    );
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInputs();

    if (!nome.classList.contains("error") && !email.classList.contains("error") && !body.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }
})