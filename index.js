const perguntas = [
    {
      pergunta: "Qual é a função da tag <a> no HTML?",
      respostas: [
        "Criar listas",
        "Adicionar imagens",
        "Criar links",
        "Criar tabelas"
      ],
      correta: 2
    },
    {
      pergunta: "Qual das opções abaixo é usada para adicionar uma imagem no HTML?",
      respostas: [
        "<img src='imagem.jpg'>",
        "<image src='imagem.jpg'>",
        "<picture href='imagem.jpg'>",
        "<img href='imagem.jpg'>"
      ],
      correta: 0
    },
    {
      pergunta: "Onde colocamos os estilos CSS internos em um documento HTML?",
      respostas: [
        "Dentro da tag <script>",
        "Dentro da tag <style> no <body>",
        "Dentro da tag <style> no <head>",
        "Dentro da tag <css>"
      ],
      correta: 2
    },
    {
      pergunta: "Qual a forma correta de selecionar uma classe chamada 'destaque' no CSS?",
      respostas: [
        "#destaque {}",
        ".destaque {}",
        "destaque {}",
        "*destaque {}"
      ],
      correta: 1
    },
    {
      pergunta: "O que significa a propriedade 'color' no CSS?",
      respostas: [
        "Define a cor de fundo",
        "Define a cor da borda",
        "Define a cor do texto",
        "Define a cor da margem"
      ],
      correta: 2
    },
    {
      pergunta: "Qual destas formas não é válida para definir cores no CSS?",
      respostas: [
        "color: red;",
        "color: #ff0000;",
        "color: rgb(255, 0, 0);",
        "color: 255, 0, 0;"
      ],
      correta: 3
    },
    {
      pergunta: "Qual propriedade controla o espaço interno de um elemento, entre o conteúdo e a borda?",
      respostas: [
        "margin",
        "padding",
        "border",
        "width"
      ],
      correta: 1
    },
    {
      pergunta: "O que a propriedade 'display: flex' faz com um container?",
      respostas: [
        "Aplica borda flexível",
        "Organiza elementos em camadas",
        "Transforma o container em um flex container para organizar os filhos em linha ou coluna",
        "Alinha elementos no centro da página"
      ],
      correta: 2
    },
    {
      pergunta: "O que a propriedade 'flex: 1' faz com um item dentro de um container 'display: flex'?",
      respostas: [
        "Deixa o item fixo e centralizado",
        "Permite que o item cresça para ocupar o espaço restante disponível",
        "Oculta o item",
        "Aplica uma margem automática"
      ],
      correta: 1
    },
    {
      pergunta: "Dado o código abaixo, o que será exibido?\n\n<div style='display: flex;'>\n  <div style='flex: 1; background-color: red;'>A</div>\n  <div style='flex: 2; background-color: blue;'>B</div>\n</div>",
      respostas: [
        "Os dois blocos terão o mesmo tamanho",
        "O bloco 'B' será duas vezes maior que o 'A'",
        "O bloco 'A' será duas vezes maior que o 'B'",
        "Apenas o bloco 'A' será exibido"
      ],
      correta: 1
    }
  ];
  
  console.log(perguntas);
  
  // Aqui ele defini aonde eu quero pegar
  const quiz = document.querySelector('#quiz');
  const template = document.querySelector('template');
  
  const corretas = new Set();
  const totalDePerguntas = perguntas.length;
  const MostrarTotal = document.querySelector('#acertos span');
  MostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
  
  // Loop ou repetição para exibir as perguntas
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    // Através do h3 eu encontro os títulos
    quizItem.querySelector('h3').textContent = item.pergunta;
  
    // Aqui é para poder copiar o texto das respostas
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true);
      dt.querySelector('span').textContent = resposta;
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
      dt.querySelector('input').value = item.respostas.indexOf(resposta);
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta;
  
        corretas.delete(item);
        if (estaCorreta) {
          corretas.add(item);
        }
  
        MostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
      };
  
      // Adiciona a resposta ao item
      quizItem.querySelector('dl').appendChild(dt);
    }
  
    // Para remover o item não necessário
    quizItem.querySelector('dl dt').remove();
  
    // Coloca a pergunta na tela
    quiz.appendChild(quizItem);
  }
  