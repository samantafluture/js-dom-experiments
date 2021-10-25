const button = document.querySelector('button');
const modal = document.getElementById('my-modal');
const close = document.querySelector('.close');

button.addEventListener('click', () => {
    modal.classList.add('modal-active');
});

close.addEventListener('click', () => {
    modal.classList.remove('modal-active');
});
