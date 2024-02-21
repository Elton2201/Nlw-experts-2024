const perguntas = [
    {
  pergunta: "Qual é a finalidade do comando 'console.log()' em JavaScript?",
      respostas: [
        "Exibir uma mensagem de erro",
        "Imprimir dados no console",
        "Criar uma variável"
      ],
      correta: 1
    }, 
    {
      pergunta: "Qual é a função do operador '===' em comparações em JavaScript?",
      respostas: [
        "Comparação de valores sem considerar o tipo",
        "Atribuição de valores",
        "Comparação estrita de valores e tipos"
      ],
      correta: 2
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let myVar;",
        "const myVar = 10;",
        "ambas as opções acima estão corretas"
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um bloco de código reutilizável",
        "Uma variável global"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Nenhuma, são sinônimos",
        "let é usado para valores constantes, const para variáveis",
        "let permite reatribuição, const cria variáveis imutáveis"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um método de criptografia",
        "Um modelo de objeto para manipular documentos HTML",
        "Uma linguagem de programação"
      ],
      correta: 1
    },
    {
      pergunta: "Como se realiza uma iteração sobre os elementos de um array em JavaScript?",
      respostas: [
        "Usando a estrutura 'if-else'",
        "Com a declaração 'switch'",
        "Utilizando loops como 'for' ou 'forEach'"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Um método de formatação de texto",
        "Uma linguagem de estilização",
        "Um formato de dados leve e intercambiável"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
      respostas: [
        "São iguais, usados de forma intercambiável",
        "'null' representa a ausência de valor, 'undefined' é atribuído explicitamente",
        "Ambos representam valores vazios"
      ],
      correta: 1
    },
    {
      pergunta: "Como se adiciona um evento a um elemento HTML usando JavaScript?",
      respostas: [
        "Apenas com CSS",
        "Usando o atributo 'event'",
        "Através do método 'addEventListener'"
      ],
      correta: 2
    },
  ];



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
        pergunta: "Qual é o valor de π (pi)?",
        respostas: [
            "3.14",
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

console.log(perguntasMatematica);
# Nlw-experts-2024
Um evento no qual eu tive o meu primeiro contato com o Javascript e algumas propriedades a mais do css e html

                Anotação
 # HTML


hiperText Markup languague

tag
atributos


Usa DL (descrição da lista) e Dt (descrição de um termo) e depois coloca um Input

Input é para eu poder responder perguntas, tira o text e poêm radio

Span é para ficar em linha

Template é tipo esconde por enquanto dps aparece
   
   //faz com que eu possa escolher apenas 1 alternativa por pergunata.
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))   
quizItem.querySelector('dl').appendChild(dt)
}

´´´ js

const: é uma variavel;
vc atribui valor a ela.


const mensagem = "bom te ver aqui! "
aqui vc cria uma variaveldo tipo mensagem e atribiu o valor do texto que esta dentro das ""

alert(mensagem + (10 * 100) + " abraços") 
cria um alerta na tela usando texto.
Os parenteses não são necessarios apenas para deixar bonito o codigo.
e dentro das "" vai o texto.

//  const quiz = document.querySelector() é queryselector pega o texto de dentro da tag que está em branco.

´´´

   estruturas de dados

 ## [] Array ou vetores

 ## objetos é quando eu atribiu as chaves com propriedade e valor


 esse codigo é para poder procurar os dados que estão dentro das '' 
const celular = {
  cor: 'preto',
  modelo: 'samsung',
  peso: 200,
}

alert (celular.modelo)

através do " (nome do produto) + . = eu acho cor/modelo ou peso "  


CSS: Cascading style sheet
folha de estilo em cascata


