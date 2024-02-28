
const perguntas = [
  {
      pergunta: "Qual é o resultado de 2 + 2 * 3?",
      respostas: [
          "4",
          "8",
          "10"
      ],
      correta: 1
  },
  {
      pergunta: "Quanto é a raiz quadrada de 81?",
      respostas: [
          "9",
          "6",
          "27"
      ],
      correta: 0
  },
  {
      pergunta: "Quanto é 5 elevado à potência de 3?",
      respostas: [
          "15",
          "125",
          "500"
      ],
      correta: 1
  },
  {
      pergunta: "Qual é o valor de π (pi) ?",
      respostas: [
          "infinito",
          "3.1416",
          "3.14159"
      ],
      correta: 2
  },
  {
      pergunta: "Quanto é a soma dos ângulos internos de um triângulo?",
      respostas: [
          "90 graus",
          "180 graus",
          "270 graus"
      ],
      correta: 1
  },
  {
      pergunta: "Qual é o número primo mais baixo?",
      respostas: [
          "1",
          "2",
          "3"
      ],
      correta: 1
  },
  {
      pergunta: "Qual é a fórmula para calcular a área de um círculo?",
      respostas: [
          "πr^2",
          "2πr",
          "πd"
      ],
      correta: 0
  },
  {
      pergunta: "Qual é o resultado de 10 dividido por 0?",
      respostas: [
          "0",
          "10",
          "Indefinido"
      ],
      correta: 2
  },
  {
      pergunta: "Quanto é a tangente de 45 graus?",
      respostas: [
          "0",
          "1",
          "√2"
      ],
      correta: 1
  },
  {
      pergunta: "Quanto é 3 fatorial?",
      respostas: [
          "3",
          "6",
          "9"
      ],
      correta: 1
  }
];

console.log(perguntas);
  
  //Aqui ele defini aonde eu quero pegar
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const MostrarTotal = document.querySelector('#acertos span') 
  MostrarTotal.textContent = corretas.size + 'de ' + totalDePerguntas
  //loop ou repetição isso faz repetir as perguntas.
  for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  //atraves do h3 eu encontro os titulos
  quizItem.querySelector('h3').textContent = item.pergunta
  
  
  // Aqui é para poder copiar o texto
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta) 
  dt.querySelector('input').onchange = (event) => {
     const estaCorreta = event.target.value == item.correta
     
     corretas.delete(item)
     if (estaCorreta) {
    corretas.add(item)  
    }
    
    MostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
  
  //appendChild é sempre no final
  quizItem.querySelector('dl').appendChild(dt)
  }
  
  //para remover
  quizItem.querySelector('dl dt').remove()
  
  //coloca a  pergunta na tela
  quiz.appendChild(quizItem) 
  
  
  
  }
  