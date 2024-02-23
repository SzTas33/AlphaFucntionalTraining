// NAVBAR behavior

const toggleBtn =document.querySelector('.toggle_btn')
const toggleBtnIcon= document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick=function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    toggleBtnIcon.classList= isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}
// ------------------------------------------------------------

// SCHEDULE behavior

function togglePopup(element){
  switch (element) {
    case 'personal-training':
      document.getElementById("popup-text").innerText = 'Personal training leiras';
      document.getElementById('pop-up-title').innerHTML = 'About personal training'
      break;

    case 'cross-training':
      document.getElementById("popup-text").innerText = 'CROSS training leiras';
      document.getElementById('pop-up-title').innerHTML = 'About CROSS training';
      break;

    case 'pt-open-gym' :
      document.getElementById("popup-text").innerText = 'Personal training / OPEN GYM TEXT';
      document.getElementById('pop-up-title').innerHTML = 'OPEN GYM';

      break;

    case 'mobility' :
      document.getElementById("popup-text").innerText = 'Mobility streching text';
      document.getElementById('pop-up-title').innerHTML = 'Mobility streching';
      break;
    
    case 'calisthenics' :
      document.getElementById("popup-text").innerText = 'Calisthenics edzes leiras';
      document.getElementById('pop-up-title').innerHTML = 'Calisthenics workout';
      break;

  }

  if (element === 'personal-training'){
  } 
  
  if (element === 'cross-training'){

  }

  document.getElementById("popup-1").classList.toggle("active");

}

let monday = document.getElementById('tb-monday');
let tuesday = document.getElementById('tb-tuesday');
let friday = document.getElementById('tb-friday');
let saturday = document.getElementById('tb-saturday');

let arrayOfElements = [monday, tuesday, friday, saturday]

function toggleDisplaySchedule(day) {
  arrayOfElements.forEach(element => {
    element.classList.remove('tb-active');
  });
  document.getElementById(day).classList.toggle('tb-active');  
}

// Mobile-view

let mondayMobile = document.getElementById('mb-monday');
let tuesdayMobile = document.getElementById('mb-tuesday');
let fridayMobile = document.getElementById('mb-friday');
let saturdayMobile = document.getElementById('mb-saturday');

let arrayOfElementsMobile = [mondayMobile, tuesdayMobile, fridayMobile, saturdayMobile]

function toggleDisplayScheduleMobile(day) {
  arrayOfElementsMobile.forEach(element => {
    element.classList.remove('mb-active');
  });
  document.getElementById(day).classList.toggle('mb-active');  
}

function closeSchedule(element){
  document.getElementById(element).classList.toggle('tb-active');
}

function closeScheduleMobile(element){
  document.getElementById(element).classList.toggle('mb-active');
}

// -------------------------------------



// NAVBAR -> SCROLL -> SMOOTHNESS

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// -----------------------------------------


// Pricing button behavior

function toggleShowPrices(element){
  document.getElementById(element).classList.toggle('active');
}