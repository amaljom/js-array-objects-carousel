
// ! ARRAY CON TUTTE LE IMMAGINI 
const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];
// *INSERIAMO TUTTE LE IMMAGINI NEL DOM
const imgContainer = document.getElementById('contenitore-immagini');
const listImg = imgContainer.children;
activeIndex=0;
images.forEach((element, index) => {
    if (activeIndex==index) {
        imgContainer.innerHTML += `
        <div class="active">
            <img class="stile-css rounded-3 text-center" src=" ${element.url}" alt="IMMAGINE NON TROVATA">
            <div class="posizione-scritte">
                <h2 class="fw-bolder text-white">${element.title}</h2>
                <p class="fw-bolder text-white">${element.description}</p>
            </div>
        </div>`
    }
    else{
        imgContainer.innerHTML += `
        <div class="d-none">
            <img class="stile-css rounded-3 text-center" src=" ${element.url}" alt="IMMAGINE NON TROVATA">
            <div class="posizione-scritte">
                <h2 class="fw-bolder text-white">${element.title}</h2>
                <p class="fw-bolder text-white">${element.description}</p>
            </div>
        </div>`
    }
});
//* BOTTONI PER ANDAREA AVANTI O INDIETRO
const btnNext= document.getElementById('next-button');
const btnPrev= document.getElementById('previous-button');
//* FUNZIONE PER ANDARE AVANTI
btnNext.addEventListener('click', function(){
    
    listImg[activeIndex].classList.remove('active');
    listImg[activeIndex].classList.add('d-none');
    list[activeIndex].classList.toggle('posizione-active');
    activeIndex++;

    if(activeIndex===images.length){
        activeIndex=0;
    }
    list[activeIndex].classList.toggle('posizione-active');
    listImg[activeIndex].classList.remove('d-none');
    listImg[activeIndex].classList.add('active');  
});
//* FUNZIONE PER ANDARE INDIETRO
btnPrev.addEventListener('click', function(){
    
    listImg[activeIndex].classList.remove('active');
    listImg[activeIndex].classList.add('d-none');
    list[activeIndex].classList.toggle('posizione-active');

    if(activeIndex===0){
        activeIndex=images.length;
    }
    activeIndex--;
    list[activeIndex].classList.toggle('posizione-active');
    listImg[activeIndex].classList.remove('d-none');
    listImg[activeIndex].classList.add('active');  
});
// THUMBNAIL
const thumbnail= document.getElementById('container-thumbnail');
const list= thumbnail.children;

images.forEach((element, index) => {
    if (activeIndex==index) {
        thumbnail.innerHTML += `
        <img class="posizione-active posizione rounded-3" src=" ${element.url}" alt="IMMAGINE NON TROVATA">`
    }
    else{
        thumbnail.innerHTML += `
        <img class="posizione rounded-3" src=" ${element.url}" alt="IMMAGINE NON TROVATA">`
    }
});

const autoNext = document.getElementById('auto-next');
const autoPause = document.getElementById('auto-pause');
const autoPrevious = document.getElementById('auto-previous');

autoNext.addEventListener('click', function(){
    const clock = setInterval(goNext, 1000);
    autoNext.addEventListener('click', function(){
        clearInterval(clock);
    });
    function goNext() {
    
        listImg[activeIndex].classList.remove('active');
        listImg[activeIndex].classList.add('d-none');
        list[activeIndex].classList.toggle('posizione-active');
        activeIndex++;
    
        if(activeIndex===images.length){
            activeIndex=0;
        }
        list[activeIndex].classList.toggle('posizione-active');
        listImg[activeIndex].classList.remove('d-none');
        listImg[activeIndex].classList.add('active');  
    }
    autoPrevious.addEventListener('click', function(){
        clearInterval(clock);
    });
    autoPause.addEventListener('click', function(){
        clearInterval(clock);
    });
});
autoPrevious.addEventListener('click', function(){
    const lock = setInterval(goBack, 1000);
    autoPrevious.addEventListener('click', function(){
        clearInterval(lock);
    });
    function goBack() {
        listImg[activeIndex].classList.remove('active');
        listImg[activeIndex].classList.add('d-none');
        list[activeIndex].classList.toggle('posizione-active');

        if(activeIndex===0){
            activeIndex=images.length;
        }
        activeIndex--;
        list[activeIndex].classList.toggle('posizione-active');
        listImg[activeIndex].classList.remove('d-none');
        listImg[activeIndex].classList.add('active');
    }
    autoNext.addEventListener('click', function(){
        clearInterval(lock);
    });
    autoPause.addEventListener('click', function(){
        clearInterval(lock);
    });
});
