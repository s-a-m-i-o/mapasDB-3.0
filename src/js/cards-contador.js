document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll("[data-mapa]");

  cards.forEach(card => {
    const pagina = card.getAttribute("data-mapa");
    const span = card.querySelector(".contador-enderecos");

    fetch(pagina)
      .then(res => res.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const linhas = doc.querySelectorAll(".enderecos table tr");
        const total = linhas.length > 0 ? linhas.length - 1 : 0;

        span.textContent = total;
      })
      .catch(() => {
        span.textContent = "0";
      });
  });
});
