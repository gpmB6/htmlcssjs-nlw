const perguntas = [
    {
        pergunta: "Qual é o planeta mais próximo do Sol?",
        respostas: [
            "Mercúrio",
            "Vênus",
            "Terra"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a maior lua de Júpiter?",
        respostas: [
            "Europa",
            "Ganimedes",
            "Calisto"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome da galáxia que abriga o Sistema Solar?",
        respostas: [
            "Andrômeda",
            "Via Láctea",
            "Triângulo"
        ],
        correta: 1
    },
    {
        pergunta: "Quantas luas tem Marte?",
        respostas: [
            "2",
            "4",
            "Moons? I thought Mars was the only one."
        ],
        correta: 1
    },
    {
        pergunta: "O que é um cometa?",
        respostas: [
            "Um planeta anão",
            "Um corpo celeste formado por gelo, poeira e rochas",
            "Uma estrela cadente"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a estrela mais próxima da Terra?",
        respostas: [
            "Alfa Centauri",
            "Sirius",
            "Proxima Centauri"
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma nebulosa?",
        respostas: [
            "Uma estrela muito brilhante",
            "Uma nuvem interestelar de gás e poeira",
            "Um buraco negro"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome da sonda espacial que visitou Plutão em 2015?",
        respostas: [
            "Voyager 1",
            "New Horizons",
            "Cassini"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a constelação que contém a estrela Polaris?",
        respostas: [
            "Ursa Maior",
            "Orion",
            "Cisne"
        ],
        correta: 2
    },
    {
        pergunta: "O que é um buraco negro?",
        respostas: [
            "Um portal para outra dimensão",
            "Um ponto no espaço onde a gravidade é tão forte que nada pode escapar",
            "Uma estrela em formação"
        ],
        correta: 1
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + 'de ' + totalDePerguntas

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta //true or false

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        // coloca as respostas na tela
        quizItem.querySelector('dl').appendChild(dt)
    }

    // remove o Resposta A da lista, mantendo só as 3 esperadas
    quizItem.querySelector('dl dt').remove()

    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
}