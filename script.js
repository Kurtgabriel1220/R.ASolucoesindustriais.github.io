/* botao de contato */

const botao = document.querySelector('.btnContato');
const secaoContato = document.querySelector('#contactFormContainer');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        botao.classList.toggle('oculto', entry.isIntersecting);
    })
})

observer.observe(secaoContato);

