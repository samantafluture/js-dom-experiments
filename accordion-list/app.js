// 1 forma -> fazer com css (classe .active)

// zera a altura de todos os elementos, começando fechado
// document.querySelectorAll('.accordion-content').forEach((item) => {
//     item.style.height = 0;
// });

// const buttons = document.querySelectorAll('.accordion-button');
// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         const accordionContent = button.nextElementSibling;
//         accordionContent.classList.toggle('active');
//     });
// });

// 2 forma -> fazer estilização com js

// zera a altura de todos os elementos, começando fechado
document.querySelectorAll('.accordion-content').forEach((item) => {
    item.style.height = 0;
});

// abre ao clicar
const buttons = document.querySelectorAll('.accordion-button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        button.classList.toggle('active');
        if (button.classList.contains('active')) {
            accordionContent.style.height =
                accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.height = 0;
        }
    });
});
