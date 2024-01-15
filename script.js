function writeTitle() {
    function activeWorld(element) {
        const arrText = element.innerHTML.split('');
        element.innerHTML = '';
        return new Promise((resolve) => {
            arrText.forEach((letra, i) => {
                setTimeout(() => {
                    element.innerHTML += letra;
                    if (i === arrText.length - 1) {
                        resolve();
                    }
                }, 450 * i);
            });
        });
    }

    const title = document.querySelector('.logo');
    return activeWorld(title);

}
 setInterval(() => {
        writeTitle();
    }, 5000);

writeTitle(); 

// let change = document.querySelector('.navbar')

// change.addEventListener("DOMContentLoaded", function () {

//     var textElement = document.getElementById("colorChangeText");

//     window.addEventListener("scroll", function () {
//         // Obtém a posição de rolagem vertical da página
//         var scrollPosition = window.scrollY || document.documentElement.scrollTop;

//         // Verifica se a posição de rolagem atingiu um determinado ponto
//         if (scrollPosition > 80) {
//             // Altera a cor do texto quando atinge o ponto desejado
//             textElement.style.color = "red"; // Troque para a cor desejada
//         } else {
//             // Restaura a cor original do texto
//             textElement.style.color = "black"; // Troque para a cor original
//         }
//     });
// });


let menuIcon = document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => { 
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100); 


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
       
    

};

// TIMELINE  
document.addEventListener('DOMContentLoaded', function() {
   
    var steps = document.querySelectorAll('.step');
    var lineProgress = document.getElementById('line-progress');
    var contents = document.querySelectorAll('.section-content');

 
    steps.forEach(function(step, index) {
        step.addEventListener('click', function() {
            
            steps.forEach(function(s, i) {
                if (i <= index) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });

            var width = (index + 1) * 12;
            lineProgress.style.width = width + '%';

            
            contents.forEach(function(content, i) {
                if (i === index) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});


let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .contact form',  { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img ',  { origin:'left' });
ScrollReveal().reveal('.home-content h3, .home-contet p, .about-content ',  { origin:'right' });