function listaResultado() {
    const resultado = document.getElementById('resultados');
    const intervaloDePesquisa = 5000;
  
    const buscarDados = () => {
      fetch('http://localhost:3333/home')
        .then((response) => response.json())
        .then((data) => {
          resultado.innerHTML = ''; // Limpe o conteúdo atual
  
          const gridContainer = document.createElement('div');
          gridContainer.id = 'quadrados-container';
  
          let divRow = document.createElement('div');
          divRow.className = 'linha-quadrados';
  
          data.forEach((element) => {
            const classCor = element.cor;
            const seBrancoSeNumero =
              classCor === 'branco'
                ? '<img src="./image/branco.svg" alt="sinal branco" class="img-branco">'
                : element.numero;
            const divResultado = document.createElement('div');
            divResultado.className = 'resultadoDoJs';
            divResultado.innerHTML = `
       
            <div id="resultadoDoJs">
              <div class="caixa ${classCor}">
                <div class="circulo">
                  <span>${seBrancoSeNumero}</span>
                </div>
              </div>
              <div class="hora">${element.hora}</div>
            </div>

            `;
  
            divRow.appendChild(divResultado);
  
            if (divRow.childElementCount >= 5) {
              gridContainer.appendChild(divRow);
              divRow = document.createElement('div');
              divRow.className = 'linha-quadrados';
            }
          });
  
          if (divRow.childElementCount > 0) {
            gridContainer.appendChild(divRow);
          }
  
          resultado.appendChild(gridContainer);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  
    buscarDados();
    setInterval(buscarDados, intervaloDePesquisa);
  }
  
  listaResultado();
  