const links = document.querySelectorAll('.link-group__link');
const sections = document.querySelectorAll('.section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})

// let form = document.querySelector('.contact-form');
// form.onsubmit = function() {
//   alert('Форма отправлена!');
// };

// let input = document.querySelector('input');
// console.log(input.value);