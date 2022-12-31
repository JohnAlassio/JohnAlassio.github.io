let html = document.querySelector('html');
html.lang = navigator.language || 'en';

// Menu

const btnMenu = document.querySelector('#menu-btn');
const menu = document.querySelector('.menu');

btnMenu.addEventListener('click', (e) =>{
    btnMenu.firstElementChild.classList.toggle('none');
    btnMenu.lastElementChild.classList.toggle('none');

    menu.classList.toggle('is-active');
});

document.addEventListener('click', (e) =>{
    if(!e.target.matches(".menu a")) return false;

    btnMenu.firstElementChild.classList.remove('none');
    btnMenu.lastElementChild.classList.add('none');

    menu.classList.remove('is-active');
    
});



// Projects

const projectsContainer = document.querySelector('.projects-container');
const project = document.querySelector('.project');

projects.forEach(project => {
    const {id, title, description, list, image} = project;
    
    const projectContain = `
    
    <a href="#trabajo-${id}" class="portfolio-card" onclick="onProjectClick(${id});">
    <img src=${image} alt="Trabajo ${id}">
    <aside class="portfolio-card-info">
        <div>
            <h2>Proyecto n°${id}</h2><br>
            <h3>${title}</h3>
            <p>${description}</p>
            <ul class="portfolio-skills-list">
                <li>${list}</li>
            </ul>
        </div>
    </aside>
    </a>
    `
    projectsContainer.innerHTML += projectContain;
});


// Modal

const modalContainer = document.querySelector('.modal-container');
const modalClose = document.querySelector('.modal-close');

function onProjectClick(id) {
    const modalContain = 
        <article class="modal" id="trabajo-${id}">
        {/* <div class="modal-content">
        <a class="modal-close" href="#cerrar">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z"/></svg>
        </a>
        <article class="portfolio-modal">
        <img src=${projects[id].imageModal} alt="Trabajo ${id}"> <div class="portfolio-info">
            <h3>${projects[id].title}</h3>
            <p>${projects[id].description}</p>
            <>
            <aside class="portfolio-details">
                    <small><b>CLIENTE</b></small>
                    <SMall>${projects[id].title}</SMall>
                    <small><b>FECHA</b></small>
                    <small>${projects[id].date}</small>
                    <small><b>PROYECTO</b></small>
                    <small>${projects[id].projectType}</small>
                    <small><b>ENLACE</b></small>
                    <small><a href=${projects[id].url} target="_blank" rel="noopener">${projects[id].url}</a></small>
                </aside>
            </div>
        </article>
    </div>
    </article> */}
    
    modalContainer.innerHTML = modalContain;
}





//Contact form

// const form = document.querySelector('.contact-form');
// const loader = document.querySelector('.contact-form-loader');
// const response = document.querySelector('.contact-form-response');

// const submitForm = async (e) => {
//     e.preventDefault();

//     const res = await fetch("https://formsubmit.co/el/fudoca", {
//         method: 'POST',
//         body: new FormData(e.target),
//     });

//     const data = await res.json();

//     if (res.status !== 200) {
//         console.log(`Hubo un error ${res.status} ${data.message}`);
//     } else {
//         location.hash = "#gracias";
//         form.reset();
//         loader.classList.add("none");
//         setTimeout(() => {
//            location.hash = "#close";
//         }, 3000);
//     }
// };

// form.addEventListener('submit', submitForm);




// Contact form

// const form = document.querySelector('.contact-form');
// const loader = document.querySelector('.contact-form-loader');
// const response = document.querySelector('.contact-form-response');

// form.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     loader.classList.remove("none");
//     fetch("https://formsubmit.co/el/fudoca", {
//         method: "POST",
//         body: new FormData(e.target),
//     })
//     .then((res) => (res.ok ? res.json() : Promise.reject(res)))
//     .then((json) => {
//         console.log(json);
//         location.hash = "#gracias";
//         form.reset();
//     })
//     .catch((err) => {
//         console.log(err);
//         let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente."
//         response.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`;
//     })
//     .finally(() => {
//         loader.classList.add("none");
//         setTimeout(() => {
//             location.hash = "#close";
//         }, 3000);
//     });
// });