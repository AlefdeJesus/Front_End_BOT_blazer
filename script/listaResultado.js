function listaResultado() {
    const resultado = document.getElementById('resultados');
  
    const intervaloDePesquisa = 5000; // Intervalo de 5 segundos (ajuste conforme necessário)
  
    const buscarDados = () => {
      fetch('http://localhost:3333/home')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
          resultado.innerHTML = ''; // Limpe o conteúdo atual
          data.forEach((element) => {
            const classCor = element.cor;
            const seBrancoSeNumero =
              classCor === 'branco'
                ? '<img src="./image/branco.svg" alt="sinal branco" class="img-branco">'
                : element.numero;
            const listar = `
              <div class="caixa ${classCor}">
                <div class="circulo">
                  <span>${seBrancoSeNumero}</span>
                </div>
              </div>
              <div id="data-hora">${element.data} ${element.hora}</div>
            `;
            resultado.innerHTML += listar;
          });
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    buscarDados(); // Execute a primeira busca imediatamente
  
    // Defina um timeout para buscar dados periodicamente
    setInterval(buscarDados, intervaloDePesquisa);
  }
  
  listaResultado();
  