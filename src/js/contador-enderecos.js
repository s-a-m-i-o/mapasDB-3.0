document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.querySelector(".enderecos table");

  if (!tabela) return;

  const linhas = tabela.querySelectorAll("tr");
  
  // menos 1 por causa do cabeçalho
  const totalEnderecos = linhas.length - 1;

  // salva especificamente do A1
  localStorage.setItem("enderecos_A1", totalEnderecos);
});
