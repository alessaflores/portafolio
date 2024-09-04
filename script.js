//Funcion para que las paginas se puedan dar vuelta de modo que parezca un libro
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => { 
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index; 
            }, 500)
        }
        else{
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index; 
            }, 500)
        }
    }
})

//Otorgarle una funcion al boton contact me que se encuentra en la parte inferior de la pagina de perfil, en pocas palabras ese boton te debe llevar a la pagina contactame!
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index; 
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}

let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0){
        pageNumber = totalPages - 1;
    }
}

//Otorgar una funcion al boton de perfil, en otras palabras que el boton que esta debajo de contactame! te lleve a la primera pagina la cual es la pagina de perfil

const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index; 
            }, 500)

        }, (index + 1) * 200 + 100)
    })
}

//Abrir animacion
const coverRight = document.querySelector('.cover.cover-right');

setTimeout(( )=> {
    coverRight.classList.add('turn');
}, 2100)
setTimeout(( )=> {
    coverRight.style.zIndex = -1;
}, 2800)


pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index; 
        }, 500)

    }, (index + 1) * 200 + 2100)
})