const perguntas = [
    {
      pergunta: "Quanto é 5 + 3?",
      opcoes: ["6", "8", "9"],
      correta: "8"
    },
    {
      pergunta: "Qual é a capital do Brasil?",
      opcoes: ["São Paulo", "Rio de Janeiro", "Brasília"],
      correta: "Brasília"
    },
    {
        pergunta: "Qual é o plural de 'coração'?",
        opcoes: ["corações", "coraçãos", "coraçõeses"],
        correta: "corações"
      },
      {
        pergunta: "Quanto é 9 × 7?",
        opcoes: ["56", "63", "72"],
        correta: "63"
      },
      {
        pergunta: "Qual é o maior continente do mundo?",
        opcoes: ["África", "Ásia", "América"],
        correta: "Ásia"
      },
      {
        pergunta: "Qual parte do corpo humano é responsável por bombear o sangue?",
        opcoes: ["Pulmão", "Estômago", "Coração"],
        correta: "Coração"
      },
      {
        pergunta: "Em que ano o Brasil foi descoberto pelos portugueses?",
        opcoes: ["1500", "1822", "1492"],
        correta: "1500"
      },
      {
        pergunta: "Qual desses é um sistema operacional?",
        opcoes: ["Google", "Windows", "Facebook"],
        correta: "Windows"
      },
      {
        pergunta: "Que cor resulta da mistura de azul com amarelo?",
        opcoes: ["Verde", "Laranja", "Roxo"],
        correta: "Verde"
      },
      {
        pergunta: "Se João tem 3 maçãs e dá 1 para Maria, com quantas ele fica?",
        opcoes: ["2", "3", "1"],
        correta: "2"
      }
      
  ];
  
  let indiceAtual = 0;
  let pontuacao = 0;
  
  function startQuiz() {
    document.getElementById("score").textContent = "";
    indiceAtual = 0;
    pontuacao = 0;
    mostrarPergunta();
  }
  
  function mostrarPergunta() {
    const container = document.getElementById("quiz-container");
    container.innerHTML = "";
  
    if (indiceAtual >= perguntas.length) {
      container.innerHTML = "<h2>Fim do quiz!</h2>";
      document.getElementById("score").textContent = `Você acertou ${pontuacao} de ${perguntas.length}`;
      return;
    }
  
    const perguntaAtual = perguntas[indiceAtual];
    const titulo = document.createElement("h3");
    titulo.textContent = perguntaAtual.pergunta;
    container.appendChild(titulo);
  
    perguntaAtual.opcoes.forEach(opcao => {
      const btn = document.createElement("button");
      btn.textContent = opcao;
      btn.onclick = () => verificarResposta(opcao);
      container.appendChild(btn);
    });
  }
  
  function verificarResposta(resposta) {
    const correta = perguntas[indiceAtual].correta;
    if (resposta === correta) pontuacao++;
    indiceAtual++;
    mostrarPergunta();
  }
  