import { carList } from "./cars.js";

const audioHoverSelect = new Audio('./audio/phone/hover-select.mp3');
const audioSelect = new Audio('./audio/phone/select.mp3')

const allButtons = document.querySelectorAll('button');

allButtons.forEach((button) => {
  button.addEventListener('mouseenter', () => {
    audioHoverSelect.currentTime = 0;
    audioHoverSelect.play();
  });
  button.addEventListener('click', () => {
    audioSelect.currentTime = 0;
    audioSelect.play();
  });
});



// Buttons Code // Make Class

let carListFiltered = []
const buttonFilters = document.querySelectorAll('.js-sort-button');

buttonFilters.forEach((button) => {
  button.addEventListener('click', () => {
    buttonFilters.forEach((btn) => {
      btn.classList.remove('selected');
    });
    button.classList.add('selected');
    const filterPick = button.dataset.id;
    render(filterPick);
  });
});

const priceButton = document.querySelector('.js-sort-by-price-button')
const priceButtonImage = document.querySelector('.js-sort-by-price-button-image')


priceButton.addEventListener('click', () => {
  if (!priceButtonImage.classList.contains('selected')){
    priceButtonImage.classList.add('selected');
  }
  if (priceButtonImage.src.includes('price-arrow-down.png')) {
    priceButtonImage.src = './images/icons/price-arrow-up.png';
  } else {
    priceButtonImage.src = './images/icons/price-arrow-down.png';
  }
});

buttonFilters[0].classList.add('selected');
render('FEATURED')


function render(filterPick) {

  // Reset the sort button
  priceButtonImage.classList.remove('selected');
  priceButtonImage.src = './images/icons/dash.webp'


  document.querySelector('.js-car-grid').innerHTML = '';
  carListFiltered = carList.filter((car) => car.categories.includes(filterPick));
  let html = ''; 
  carListFiltered.forEach((car, index) => {
  html = `
    <div class="car-item" style="--fade-delay: ${index * 0.1}s;">
      <div class="car-dlc">
        <p class="car-dlc-text">${car.dlc}</p>
        <div class="car-seat-image-container">
          <p class="car-seat-image-container-seat-number">${car.seats}</p>
          <img class="car-seat-image" src="images/icons/person-icon.png" alt="car-seats">
        </div>
      </div>
      <img class="car-image" src="${car.image}" alt="car-image1">
  
      <div class="car-name-price">
        <p class="car-name">${car.name}</p>
        <p class="car-price">$${car.price}</p>
      </div>
    </div>
  `;
  console.log('hello');   
  document.querySelector('.js-car-grid').innerHTML += html;
  })
  
  

}  



