$(document).ready(function () {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});

var login = document.getElementById('account');
login.addEventListener('click',displayLogin);


function displayLogin() {
    document.getElementById('main').style.display= "none";
    document.getElementById('cart-container').style.display="none";
    document.getElementById('form-container').style.display= "block";
}
/*localstorag
---------------*/

let name = document.querySelector('#username');
let labelName = document.querySelector('#labelName')
let validName = false
let Email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
validEmail = false
let delivery = document.querySelectorAll('#address')
let book = document.querySelectorAll('#bookname')
let amount = document.querySelectorAll('#bookamount')
let cod = document.querySelectorAll('#bookcod')

username.addEventListener('keyup', () => {
    if (username.value.length <= 2) {
        labelName.setAttribute('style', 'color: red')
        labelName.innerHTML = '<strong> Nome *Insira no minímo 3 caracteres</strong>'
        validName = false
    } else {
        labelName.setAttribute('style', 'color: green')
        labelName.innerHTML = '<strong>Nome</strong>'
        validName = true
    }
})

function validateEmail() {
    var email = document.querySelector('#email');
    var error = document.querySelector('#error-email');
    if (!email.checkValidity()) {
        error.innerHTML = "";
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = '<strong>Email *Insira um email correto</strong>'
        validEmail = false
    } else {
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = '<strong>Email</strong>'
        validEmail = true
    }
}

function resetMsg() {
    var error = document.querySelector('#error-email');
    if (error.innerHTML == "") {
        error.innerHTML = "";
    }
}

function register() {
    if (validName && validEmail) {
        let listUser = JSON.parse(localStorage.getItem('listUser') || '[]')
        listUser.push({
            nameReg: username.value,
            emailReg: email.value,
            deliveryReg: address.value
        })
        localStorage.setItem('listUser', JSON.stringify(listUser))

        alert('Obrigada por se registrar');
    } else {
        alert('Por favor, preencha o formulario corretamente');
    }

}
function shop() {
    let book 
        let listshop = JSON.parse(localStorage.getItem('listshop') || '[]')
        listshop.push({
            bookReg: bookname.value,
            amountReg: bookamount.value,
            codReg: bookcod.value
        })
        localStorage.setItem('listshop', JSON.stringify(listshop))

        alert('Obrigada por comprar conosco');
}