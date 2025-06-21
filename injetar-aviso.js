
fetch('/aviso.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('aviso-container').innerHTML = html;
    })
    .catch(err => {
        console.error('Erro ao carregar aviso de eventos:', err);
    });
