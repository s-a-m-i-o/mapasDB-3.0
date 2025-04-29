(function () {
    let btnConfirmados = document.getElementById('btn01');
    let btnConfirmar = document.getElementById('btn02');
    let secConfirmados = document.getElementById('enderecos');
    let secConfirmar = document.getElementById('confirmacao');

    btnConfirmados.addEventListener('click', function () {
        secConfirmar.classList.add('oculto');
        secConfirmados.classList.remove('oculto');
    });

    btnConfirmar.addEventListener('click', function () {
        secConfirmados.classList.add('oculto');
        secConfirmar.classList.remove('oculto');
    });
})();