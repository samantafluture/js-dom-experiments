let listElement = document.querySelector('.list');
let textElement = document.querySelector('input');
let buttonElement = document.querySelector('button');

let arr = [
    'Ver aulas do FrontPUSH',
    'Executar tarefas',
    'Fazer um café'
];

function renderToDo() {
    listElement.innerHTML = '';
    
    arr.forEach((item, index) => {
        var liElement = document.createElement('li');
        var liText = document.createTextNode(item);

        var linkLi = document.createElement('a');
        var textLink = document.createTextNode('Excluir');

        linkLi.setAttribute('href', '#');
        linkLi.setAttribute('onclick', `deleteItem(${index})`);
        linkLi.appendChild(textLink); // texto do link para dentro do link

        liElement.appendChild(liText); // coloca o texto dentro do item <li></li>
        liElement.appendChild(linkLi); 
        listElement.appendChild(liElement); // coloca o item <li></li> dentro da lista .list <ul>
    })
}

renderToDo();

buttonElement.addEventListener('click', addItem);

function addItem() {
    var itemTexto = textElement.value;
    arr.push(itemTexto);
    renderToDo();
}

function deleteItem(pos) {
    arr.splice(pos, 1);
    renderToDo();
}

