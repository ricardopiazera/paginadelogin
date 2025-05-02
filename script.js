const form = document.getElementById('form-login');
const usuarioInput = document.getElementById('usuario');
const senhaInput = document.getElementById('senha');

form.addEventListener ('submit', function(event) {
    event.preventDefault();


    const usuario = usuarioInput.value;
    const senha = senhaInput.value;

    if (usuario ==='admin' && senha ==='123456') {
        window.location.href = 'bemvindo.html';
    }

    else{
        alert('Usuário ou senha incorretos. Tente novamente.');

    }
});


// const togglePasswordButton = document.getElementById('toggle-password');
// const senhaInput = document.getElementById('senha');

// togglePasswordButton.addEventListener('click', function() {
//     // Verificar o tipo atual e alterar
//     const tipoAtual = senhaInput.type;
//     if (tipoAtual === 'password') {
//         senhaInput.type = 'text'; // Mostrar a senha
//         togglePasswordButton.textContent = 'Esconder'; // Mudar texto do botão
//     } else {
//         senhaInput.type = 'password'; // Esconder a senha
//         togglePasswordButton.textContent = 'Mostrar'; // Mudar texto do botão
//     }
// });


