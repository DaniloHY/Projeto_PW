document.getElementById('contatoForm').addEventListener('submit', function () {
    var nome = this.querySelector('input[name=nome]'), nome = nome.value;
    var email = this.querySelector('input[name=email]'), email = email.value;
    var mensagem = this.querySelector('input[name=mensagem]'), mensagem = mensagem.value;
    var texto = 'Olá Letícia, \nMeu nome é '+ nome +' e meu email é '+ email + ' e minha mensagem é '+ mensagem;
    this.querySelector('input[name=Body]').setAttribute('value', texto);
});