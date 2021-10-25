// axios

axios
    .get('https://api.github.com/users/samantafluture')
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

// desestruturação

document.documentElement.addEventListener('mousemove', MouseMove);

// recebendo o mesmo nome das propriedades

// forma 1 -> direto nos parâmetros
function MouseMove({ clientX, clientY }) {

    // forma 2 -> no lugar do nome
    // const { clientX, clientY } = event; 

    // forma 3 -> tradicional, sem desestruturação
    // const clientX = event.clientX;
    // const clientY = event.clientY;

    console.log(clientX, clientY);
}

// outro exemplo de desestruturação

const carros = ['fiat', 'bmw', 'audi'];
const [ marca1, marca2, marca3 ] = carros;

console.log(marca2); // bwm