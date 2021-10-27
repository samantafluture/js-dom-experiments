# jquery 

# 1. seletores

## seletores básicos

- this -> `$(this)`
- id -> `$('#id')`
- classe -> `$('.classe')`
- tag -> `$('h1')`
- composto -> `$('div.azul, li.verde')`
- atributos -> `$('input[name=telefone]')`
- pseudo-seletores -> `$('tr:odd')`
- descendente -> `$('main h1')`
- descendente direto -> `$('h1>p')`
- o irmão mais próximo -> `$('.paragrafo+p')`
- todos os irmãos -> `$('.paragrafo~p')` 

## seletores de proximidade

- elemento mais próximo anterior -> `.prev('li')` 
- elemento mais próximo posterior -> `.next('li')` 

## filtros jquery

- último elemento da lista -> `$('.cars_list li:last')`
- primeiro elemento da lista -> `$('.cars_list li:first')`
- elementos alternados da lista -> `$('.cars_list li:even')` ou `$('.cars_list li:odd')`
- posição específica da lista (começa no 0) -> `$('.cars_list li:eq(2)')` 

## filtros css3

- últimos elementos de listas -> `$('.cars_list li:last-child')`
- primeiros elementos de listas -> `$('.cars_list li:first-child')`
- alternados -> `$('.cars_list li:nth-child(even)')` ou `$('.cars_list li:nth-child(odd)')`
- posição específica da lista (começa no 1) de listas -> `$('.cars_list li:nth-child(1)')`
- começa a contar de baixo pra cima -> `$('.cars_list li:nth-last-child(1)')`

## filtros de conteúdo

- seleção por conteúdo (ex: tem string "About") -> `$('.menu li a:contains(About)')`
- que não possui conteúdo -> `$('.cars_list li:empty')`
- que possui algum valor -> `$('.cars_list li:parent')`
- que possui dentro dele outro elemento (ex: tem tag span) -> `$('.cars_list li:has(span)')`

## filtros de visibilidade

- que estão escondidos -> `$('.cars_list li:hidden')`
- que estão visíveis -> `$('.cars_list li:visible')`

## filtros de formulários

- botão (:button seleciona não só tag mas inputs type=button) -> `$('#register :button')`
- checkbox (seleciona type=checkbox) -> `$('#register :checkbox')`
- elementos de tipo radio -> `$('[type=radio]')`
- elementos "checked" -> `$('input:checked')`
- elementos desabilitados -> `$('#register :disabled')`
- elementos com focus -> `$('input:focus')`
- botão do tipo submit -> `$('#register :submit')`

## filtro próprio personalizado (1)

- adicionar atributo [data-attribute] `data-x` na tag html (ex: `data-ano="1986"`)
- expr -> expressão do $ -> criação do filtro `carsCentury21`

```javascript
$.expr[':'].carsCentury21 = function(el) {
    return ($(el).data('ano') > 2000);
}
```

- mostrar apenas os carros do séc 21 -> `$('.cars_list li:carsCentury21').show()`

## filtro próprio personalizado (2)

```javascript
$.expr[':'].carsBeforeYear = $.expr.createPseudo(function(year){
    return function(el) {
        return($(el).data('ano') < year>);
    }
})
```

- mostrar carros depois do ano x (ex: 1990) -> `$('.cars_list li:carsBeforeYear(1990)').show()`

---

# 2. manipulação do dom

## básico

- alterar css -> `.css()`
- incluir texto -> `.text()`
- evento de clique -> `.click(function())`
- evento de change -> `.change(function())`
- evento de focus -> `.focus(function())`
- adicionar elemento html -> `.append()`
- animação -> `.animate()`
- mostrar -> `.show()`
- esconder -> `.hidden()`
- muda uma propriedade do html -> `.prop()`
- insere um valor -> `.val()`
- for each -> `.each()`

## classes css

- adicionar uma classe -> `.addClass()`
- remover uma classe -> `.removeClass()`
- toggle class (alternar a classe, se tem, retira, se não tem, adiciona) -> `.toggleClass()`
- verifica se tem uma classe ou não (retorna true or false) -> `.hasClass()`

## atributos html

- selecione e mude atributo da tag (ex: src, alt, href...) -> `.attr('src', 'images/logo.png')`
- remover um atributo -> `.removeAttr()`

## propriedades

- seleciona propriedade (ex: checked, disabled) e retorna true or false -> `.prop()`
- altera propriedade selecionada -> `.prop('checked', false)`
- remove propriedade (apenas criadas por nós com `.prop('num', '1')`) -> `.removeProp('num')`

## valores 

- retorna valor do elemento -> `.val()`
- define valor do elemento -> `.val('algum valor')`

## dados como data-attributes

- retorna data-attribute do elemento (ex: `data-ano` fica `.data('ano')`) -> `.data()`
- alterar o valor do data-attribute selecionado -> `.data('ano', '1995')`
- remover um dado definido pelo jquery (e não pelo html) -> `.removeData()`

## dimensões

- retorna ou define a largura (sem aspas ex: `.width(500)`) -> `.width()`
- largura que leva em conta o padding do elemento -> `.innerWidth()`
- retorna ou define a altura -> `.height()`
- altura que leva em conta o padding do elemento -> `.innerHeight()`

## posições

- retorna a posição x e y baseando-se no documento inteiro -> `.offset()` 
- define a posição do elemento -> `.offset({ top: 5, left: 100 })`
- retorna a posição baseando-se no elemento pai -> `.position()`
- retorna e define a posição da barra de rolagem -> `$(document).scrollTop()` ou `scrollTop(200)`
- retorna e define a posição da barra de rolagem (horizontal) -> `$(document).scrollLeft()`

## adicionando elementos html

### append() -> no fim

- adicionar um elemento ao final de outro (no fim) porém dentro -> `.append()`
    - exemplo: `$('.menu ul').append('<li><a href="#">Contact</a></li>')`
- sintaxe inversa -> `appendTo()`
    - exemplo: `$('<li><a href="#">Contact</a></li>').appendTo('.menu ul')`

### prepend() -> no início

- adicionar elemento antes de outro (no início) porém dentro -> `.prepend()`
    - exemplo: `$('.menu ul').prepend('<li><a href="#">Home</a></li>')`
- sintaxe inversa -> `prependTo()`
    - exemplo: `$('<li><a href="#">Home</a></li>').prependTo('.menu ul')`

### after() -> depois

- adiciona elemento após outro, fora -> `.after()`
    - exemplo: `$('.paragrafo').after('<h2>Subtítulo</h2>')`
- sintaxe inversa -> `.insertAfter()`
    - exemplo: `$('<h2>Subtítulo</h2>').insertAfter('.paragrafo')`

### before() -> antes

- adiciona elemento antes de outro outro, fora -> `.before()`
    - exemplo: `$('.paragrafo').before('<h2>Introdução</h2>')`
- sintaxe inversa -> `.insertBefore()`
    - exemplo: `$('<h2>Introdução</h2>').insertBefore('.paragrafo')`

### wrap() -> em volta

- adiciona elemento em volta de outro elemento -> `wrap()`
    - exemplo para deixar tudo em itálico: `$('.cars_list li').wrap('<i></i>')`
- adiciona elemento em volta do conteúdo em si -> `wrapInner()`
    - exemplo: `$('.cars_list li').wrapInner('<u></u>')`

## removendo elementos html

- remover um elemento -> `.remove()`
    - exemplo: `$('.cars_list li').remove()`
- remove o conteúdo de um elemento (deixa ele vazio) -> `.empty()`
- remove um elemento, mas mantendo seus eventos -> `.detach()`
- retira as tags/elementos em volta do elemento (não aceita parâmetros) -> `.unwrap()`

## clonando elementos html

- clonar elementos (armazenar em uma variável) -> `.clone()`
    - exemplo: `let titleClone = $(.title).clone(true)`
    - true -> herda eventos
    - false -> não herda eventos

## alterando conteúdo dos elementos

- retorna o conteúdo html do elemento -> `.html()`
- definir um novo conteúdo html -> `.html(<a href="#">Home</a>)`
- retora o conteúdo de texto do elemento (pode retornar 1 ou mais elementos) -> `.text()`
    - exemplo: `$(header .menu li).text()` retorna "HomeAboutContact"
- definir um novo conteúdo de texto -> `.text('Olá, mundo')`
- substituir o conteúdo de um elemento -> `.replaceWith('<button>Enviar</button>')`
- sintaxe inversa (primeiro o novo conteúdo, depois onde) -> `.replaceAll()`

---

# 3. eventos

## clique do mouse

- ao apertar o mouse "mousedown" -> `.mousedown(function())`
- ao soltar o dedo do mouse "mouseup" -> `.mouseup(function())`
- clique (mousedown e mouseup ao mesmo tempo) -> `.click(function())`
- clique com botão direito do mouse -> `.contextMenu(function())`
- duplo clique -> `.dblclick(function())`

## cursor do mouse

- quando cursor passa por cima de um elemento "mouseenter" -> `.mouseenter(function())`
- quando cursor deixa um elemento "mouseleave" -> `.mouseleave(function())`
- evento hover (engloba os dois, pode receber 2 funções) -> `.hover(function(), function())`
- quando o cursor se mover dentro do elemento "mousemove" -> `.mousemove(function())`

## teclado

- pressionar uma tecla "keydown" -> `.keydown(function())`
- soltar uma tecla "keyup" -> `.keyup(function())`
- enquanto tecla estiver sendo pressionada "keypress" -> `.keypress(function())`
    - certas teclas não são identificadas
    - leva em conta Caps Lock 

## formulário

- ao clicar no campo, ao receber o foco, "focus" -> `.focus(function())`
    - funciona quando estamos dentro do elemento que queremos 
- ao sair do campo, ao perder o foco, clicar fora, "blur" -> `.blur(function())`
   - funciona quando estamos dentro do elemento que queremos 
- focus que leva em conta as tags filhas do elemento "focusin" -> `.focusin(function())`
   - funciona em todas as tags filhas do elemento em questão
- blur que leva em conta as tags filhas do elemento "focusout" ->  `.focusout(function())`
- mudança de valor no campo -> `.change(function())`
    - usado em input 'select' ou 'radio button' principalmente
- seleciona um valor -> `.select(function())`
- envio do formulário "submit" -> `.submit(function())`
    - `.serializeArray()` mostra o array com todos os valores enviados

## bloqueando comportamento padrão

- `event.preventDefault()` pegando e passando o `event` como parâmetro da função em si

## objeto Event

- `event.type`: tipo do evento
- `event.target`: alvo do evento
- `event.target.localName`: retorna o nome do elemento em si
- `event.currentTarget`: onde o evento foi definido
- `event.pageX` e `event.pageY`: posição onde o evento ocorreu na página
- `event.keyCode` ou `event.which`: tecla pressionada
- `event.key`: nome da tecla pressionada
- `event.preventDefault()`: para o comportamento padrão
- `event.stopPropagation()`: para a propagação

## browser

- capturar tamanho da tela de forma dinâmica -> `$(window).resize(function())`
- capturar movimento da barra de rolagem -> `$(window).scroll(function())`

## método on()

- evento de clique = `.on('click', function())`
- evento de change = `.on('change', function())`
- vantagem: pode definir mais de um evento: `.on('click keydown', function(event))`
    - definir funções para cada um no mesmo bloco
    - exemplo: `if (event.type == 'click') ...` ou `if else (event.type == 'keydown'`
- usar quando for criarmos métodos/eventos personalizados

## delegação de eventos

- elementos adicionados depois (por exemplo dinamicamente) podem não conseguir realizar eventos
- então é boa prática delegar os eventos para uma tag pai

```javascript

// 1. criar nova tr dinamicamente, ao clicar no botão, e adicionar ao tbody da table
$('.btn-add').on('click', function(e){
    const newTr = `<tr><td>Título do livro</td><td>Autor do livro</td></tr>`;
    $('tbody').append(newTr);
})

// 2. delegar evento clique para pai 'tbody' e depois do 'click' avisar que vai ser no 'tr'
$('tbody').on('click', 'tr', function(e){
    $('tbody tr').removeClass('selected');
    $(this).addClass('active');
})
```
## propagação de eventos

- quando acontece evento em um elemento, todos seus elementos 'parents/pais' também ficam sabendo
- `event bubbling` é também outra expressão para `event propagation`
- usar o `e.deletaTarget` junto do `.find()` para encontrar o elemento alvo do evento

```javascript

// refatorar delegação
$('tbody').on('click', 'tr', function(e){
    $(e.deletaTarget).find('tr').removeClass('selected');
    $(this).addClass('active');
})
```

- problema: sobrecarga de eventos -> parar a propagação `event.stopPropagation()`
- usar isso quando não quer que ninguém mais saiba do evento ocorrido

## retirar evento

- desligar um evento de um elemento -> `.of('click', function())`

## executar evento uma vez

- executa o evento apenas uma vez - > `.one('click', function())`

## disparar evento manualmente

- acionar evento -> `.trigger('click')`
    - seleciona o elemento e gera o elemento manualmente que já havia sido feito

## criar evento personalizado

- no método on, pode definir o nome do evento: `.one('initPage', function())`
- depois, pode chamar esse evento com trigger via elemento selecionado: `.trigger('initPage')`

## namespaces de eventos

- na hora de criar o evento: `on(`click.colorRed`, function())`
- na hora de desligar esse mesmo evento: `off(`click.colorRed`)`
- para organizar e não conflitar na hora de on/off

---

# 4. animações

## básico

- esconder um elemento -> `.hide()`
    - esconder com duração -> `.hide('slow')` ou valor em mls `.hide(2000)`
- mostrar um elemento -> `.show()`
    - mostrar com duração -> `.show('slow')` ou valor em mls `.show(2000)`
- alternar / toggle (ocultar ou exibir como interruptor) -> `.toggle()` 
    - toggle com duração -> `.toggle('slow')` ou valor em mls `.toggle(2000)`

## fading 

- trabalha com opacidade

- fade out, sumir -> `.fadeOut('fast')` ou `.fadeOut(2000)`
    - aceita callback: `.fadeOut(2000, function())`
- fade in, aparecer -> `.fadeIn('fast')` ou `.fadeIn(2000)`
    - aceita callback: `.fadeIn(2000, function())`
- fade to, mudar opacidade de um elemento -> `.fadeTo(1000, 0.5)` (duração, opacidade)
- faz as duas animações de fade -> `.fadeToggle(1000)` (alterna)

## sliding

- deslizar com suavidade entre um elemento e outro
- mexe com altura dos elementos

- esconde um elemento, de baixo para cima -> `slideUp(1000)`
- exibir elemento, de cima para baixo -> `slideDown(1000)`
- exibe ou oculta -> `slideToggle(1000)`
- todos aceitam função callback como segundo parâmetro

## desabilitar animações

- `jQuery.fx.off` desliga as animações (default é false)

## animações personalizadas

- definir estilos dentro do `.animate({}, 2000)`
    - espera um objeto como primeiro parâmetro e mls no segundo
    - dentro do objeto, mudar estilos css
    - alterar apenas valores numéricos 
    - usar css em camel case

```javascript
$(h4).on('click', function(){
    $(this).animate({
        fontSize: '50px',
        letterSpacing: '+=10px'
    }, 1000);
})
```

## animações em sequência

- encadear o método `.animate()` em outro `.animate()` para fazer sequência
- método `queue(function())` para colocar uma função entre animações
    - deve colocar também o `$(this).dequeue()` no fim para que a próxima animação rode
- método `clearQueue()` limpa a fila de animações
- colocar um intervalo entre uma animação e outra -> `.delay(1000)`
    - apenas no contexto de animações
    - efeito parecido com `setTimeout()` porém não o substitui

## parando animações

- parar animação -> `.stop()`
    - primeiro parâmetro: por padrão, é false, ou seja, para apenas a animação atual
        - se `.stop(true)`, para todas as animações, limpando a fila
    - segundo parâmetro: `.stop(true, true)` vai pra posição final
- parar animação no final da animação, posição final -> `.finish()`

---

# 5. ajax

## recebendo dados da api

- ajax recebe 3 métodos:
    - url da api
    - success -> função, o que faz com a resposta
    - error -> função, o que fazer com o erro

```javascript
$.ajax({
    url: 'http://api.com',
    success: function(response) { 
        console.log(response);
    },
    error: function(error) { 
        console.error(error);
    }
})
```

## renderizando dados na tela

```javascript
$.ajax({
    url: 'http://api.com',
    success: function(response) { 
        $.each(response, function(index, item){
            let bookTr = `<tr><td>${item.name}</td><td>${item.author}</td></tr>`;
        });
        $('table tbody').append(bookTr);
    },
    error: function(error) { 
        console.error(error);
    }
})
```

## método post

- enviar dados para api

```javascript
$('form').on('submit', function(event){
    event.preventDefault();

    let data = {};
    
    $.each($(this).serializeArray(), function(index, item){
        data[item.name] = item.value;
    });

    $.post('http://api.com', data, function(response){
        console.log(response);
    });
})
```

## método get

- listar novos dados enviados na tela, sem atualizar a tela (ajax)

```javascript
$.get('http://api.com', function(response){
    $('table tbody').html('');
    $.each(response, function(index, item){
        let bookTr = `<tr><td>${item.name}</td><td>${item.author}</td></tr>`;
    });
});
```