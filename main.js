abrirBiscoito = document.querySelector('#biscoito').addEventListener('click', abrirBiscoito)

telaInicial = document.querySelector('.inicial')
telaFinal = document.querySelector('.final')

frases = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
    'Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.'
]

function sortearFrase() {
    return frases[Math.floor(Math.random() * frases.length)]
}

function mudarTela(){
    telaInicial.classList.toggle('hidden')
    telaFinal.classList.toggle('hidden')
}

function abrirBiscoito(){
    mudarTela()
    frase = document.querySelector('.frase')
    frase.innerHTML = sortearFrase()
}