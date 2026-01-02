document.addEventListener("DOMContentLoaded", () => {

    const grupos = {
        A: {
            pasta: "../a-itaquera/",
            paginas: ["a1.html","a2.html","a3.html","a4.html","a5.html","a6.html","a7.html","a8.html","a9.html","a10.html"]
        },
        B: {
            pasta: "../b-josebonifacio/",
            paginas: ["b1.html","b2.html","b3.html","b4.html","b5.html","b6.html"]
        },
        C: {
            pasta: "../c-parque/",
            paginas: ["c1.html","c2.html","c3.html","c4.html","c5.html","c6.html","c7.html"]
        }
    };

    Object.entries(grupos).forEach(([letra, grupo]) => {

        const spanTerritorios = document.getElementById(`total-territorios-${letra}`);
        const spanEnderecos   = document.getElementById(`total-enderecos-${letra}`);

        if (spanTerritorios) {
            spanTerritorios.textContent = grupo.paginas.length;
        }

        let soma = 0;
        let carregados = 0;

        grupo.paginas.forEach(pagina => {
            fetch(grupo.pasta + pagina)
                .then(res => res.text())
                .then(html => {
                    const doc = new DOMParser().parseFromString(html, "text/html");
                    const linhas = doc.querySelectorAll(".enderecos table tr");
                    soma += linhas.length > 0 ? linhas.length - 1 : 0;
                })
                .finally(() => {
                    carregados++;
                    if (carregados === grupo.paginas.length && spanEnderecos) {
                        spanEnderecos.textContent = soma;
                    }
                });
        });
    });

});
