//when items in navbar clicked
let sections= document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');

window.onscroll= () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// Home Section slider

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// Calculate BMI

// const calculateForm = document.getElementById('calculate-form'),
//     calculateCm = document.getElementById('calculate-cm'),
//     calculateKg = document.getElementById('calculate-kg'),
//     calculateMessage = document.getElementById('calculate-message')

// const calculateBmi = (e) =>{
//         e.preventDefault()

//     if(calculateCm.value === '' || calculateKg.value === ''){
//         calculateMessage.classList.remove('color-white')
//         calculateMessage.classList.add('color-red')

//         calculateMessage.textContent = 'Fill the Height and Weight first.'

//         setTimeout(() =>{
//             calculateMessage.textContent = ''
//         },3000)
//     } else{
//         const cm = calculateCm.value / 100,
//             kg = calculateKg.value,
//             bmi = Math.round(kg / (cm * cm))

//         if(bmi < 18.5){
//             calculateMessage.classList.add('color-white')
//             calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny`
//         } else if(bmi < 25){
//             calculateMessage.classList.add('color-white')
//             calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy`
//         } else{
//             calculateMessage.classList.add('color-white')
//             calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight`
//         }

//         calculateCm.value = ''
//         calculateKg.value = ''

//         setTimeout(() =>{
//             calculateMessage.textContent = ''
//         }, 4000)
//     }
// }

// calculateForm.addEventListener('submit', calculateBmi)



