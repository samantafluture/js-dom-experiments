// 1 -> seletores

// id -> seleção individual
const titulo = document.getElementById('titulo');

// classes -> traz um HTML collection de todas as tags que tem determina classe
const subtitle = document.getElementsByClassName('subtitle');

// querySelector -> seletor similar ao de css
const menu = document.querySelector('.menu');
console.log(menu);

// querySelectorAll -> devolve NodeList -> pode usar forEach()
const menuItens = document.querySelectorAll('.menu-item');
console.log(menuItens);

// resultado -> Item 1, Item 2, Item 3
menuItens.forEach((item) => {
    console.log(item.textContent);
})

// 2 -> propriedades

// className -> volta string com as classes da tag
// classList -> lista as classes desta tag como um 'array'

// resultado -> adiciona classe 'menu' nos itens
menuItens.forEach((item) => {
    item.classList.add('menu');
})

// 2.a. -> classList

// add -> adiciona classe -> classList.add('btn', 'list')
// remove -> remove classe -> classList.remove('btn')
// toggle -> se existe, remove; se não existe, adiciona -> classList.toggle('active')
// contains -> verifica se contém a classe -> classList.contains('active') -> true or false 
// replace -> troca uma classe por outra -> classList.replace('active', 'hidden')

// 3 -> atributos (do html)

const img = document.querySelector('img');
console.log(img.getAttribute('alt')); // retorna o que tem dentro do alt
img.setAttribute('alt', 'imagem de logo'); // seta novo valor para o atributo alt
img.setAttribute('data-source', 'imagem'); // criou um novo atributo e seu valor ao lado
img.removeAttribute('data-source'); // remove o atributo criado

// 4 -> criar elementos

let link = document.createElement('a');
link.setAttribute('href', 'http://google.com');

let conteudo = document.createTextNode('Acessar o Google');

// inserir conteudo dentro do link
link.appendChild(conteudo);

let container = document.querySelector('#app');

// inserir o link dentro do container criado no html
container.appendChild(link);

// 5 -> proporções de elementos e janela

let box = document.querySelector('.box');

console.log(box.clientHeight); // altura do elemento -> 100px
console.log(box.clientWidth); // largura do elemento -> 100px

console.log(box.offsetTop); // distância para o topo da página
console.log(box.offsetLeft); // distância para à esquerda da página

console.log(window.innerWidth); // tamanho da janela inteira (tem outer também)

console.log(window.pageYOffset); // scroll horizontal (tem X também)

const media = window.matchMedia('(max-width: 540px)');
console.log(media.media);

if (media.matches == true) {
    console.log("tela mobile");
} else {
    console.log("tela desktop");
}

// 6 -> eventos

let h1 = document.querySelector('h1');

h1.addEventListener('click', callback);
window.addEventListener('resize', resizeElement);
window.addEventListener('keydown', keydownFunc);

function callback(event) {
    console.log("click");
    this.classList.toggle('red');
}

function resizeElement(event) {
    console.log("resize");
    h1.classList.add('red');
}

function keydownFunc(event) {
    if(event.key == 'a') {
        h1.classList.toggle('green');
    } else {
     console.log(event.key);
    }
}

// event.target (o filho elemento clicado)
// event.currentTarget (o elemento que vc está escutando)
// event.type (o tipo de evento)
// event.path (todas as infos do evento)

// referência de todos os eventos:
// https://developer.mozilla.org/pt-BR/docs/Web/Events

