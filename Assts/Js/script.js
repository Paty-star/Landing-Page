/*
case sensitive = reconhece letras maiusculas e minusculas 


por Tag: getElementByName()
por Id:getElementById()
por Nome:getElementsByName()
por Class:getElementsByClassName()
por seletor:querySelector()
*/

let nome = window.document.getElementById('nome')
let email= document.querySelector('#email')
let assunto=document.querySelector('#assunto')
let nomeOk= false
let emailOk= false
let assuntoOk= false
let mapa=document.querySelector('#mapa')

nome.style.width='100%'
email.style.width='100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.Value.length < 3){
        txtNome.innerHTML='Nome invalido'
        txtNome.style.color = 'red'
    }else {
        txt.innerHTML='Nome válido'
        txt.style.color='green'
        let nomeOk= true

    }
}
function validaEmail(){
    let txtemail = document.querySelector('#txtEmail')

    if(email.Value.indexof('@')== -1 || email.Value.indexof('.')){
        txtEmail.innerHTML = 'E-mail Invalido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail valido'
        txtEmail.style.color = 'green'     
        let emailOk= true
    }
}

function validaAssunto(){
    let txtassunto = document.querySelector('#assunto')
    if(assunto.Value.length >=100){
        txtassunto.innerHTML='Texto muito grande digite no maximo 100 caracteres'
        txtassunto.style.color='red'
        txtassunto.style.display = 'block'
    }else{
        txtassunto.style.display = 'none'
        let assuntoOk= true
}
}

function enviar(){
    if(nomeOk==true && emailOk==true && assuntoOk==true){
        alert('formulario enviado com sucesso! ')
    }else{
        alert('Preencha o formulario corretamente antes de enviar...')
}
}

function mapazoom(){
    mapa.style.width='800px'
    mapa.style.height='600px'

}

function mapanormal(){
    mapa.style.width='400px'
    mapa.style.height='250px'

}