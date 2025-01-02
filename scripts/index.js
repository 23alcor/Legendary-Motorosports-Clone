import { carList } from "./cars.js";

const audioHoverSelect = new Audio('./audio/phone/hover-select.mp3');
const audioSelect = new Audio('./audio/phone/select.mp3')
let filterPick = 'FEATURED';
let carListFiltered = []
let carListCopy = [...carList];

const allButtons = document.querySelectorAll('button');

// FOR BUTTON AUDIOS
allButtons.forEach((button) => {
  button.addEventListener('mouseenter', () => {
    audioHoverSelect.currentTime = 0;
    audioHoverSelect.play().catch((error) => {
      console.warn("Unable to play hover audio due to browser restrictions:", error);
    });
  });
  button.addEventListener('click', () => {
    audioSelect.currentTime = 0;
    audioSelect.play().catch((error) => {
      console.warn("Unable to play hover audio due to browser restrictions:", error);
    });
  });
});



// Buttons Code // Make Class
const buttonFilters = document.querySelectorAll('.js-sort-button');

// CLICKING A SORTING BUTTON
buttonFilters.forEach((button) => {
  button.addEventListener('click', () => {
    // Reset sort by price
    priceButtonImage.classList.remove('selected');
    priceButtonImage.src = './images/icons/dash.webp'

    buttonFilters.forEach((btn) => {
      btn.classList.remove('selected');
    });
    button.classList.add('selected');
    filterPick = button.dataset.id;
    render(filterPick, carList);
  });
});

const priceButton = document.querySelector('.js-sort-by-price-button')
const priceButtonImage = document.querySelector('.js-sort-by-price-button-image')


// FOR CLICKING SORT BY PRICE
priceButton.addEventListener('click', () => {
  if (!priceButtonImage.classList.contains('selected')){
    priceButtonImage.classList.add('selected');
  }
  
  // FOR DESC TO ASC
  if (priceButtonImage.src.includes('price-arrow-down.png')) {
    priceButtonImage.src = './images/icons/price-arrow-up.png';
    carListCopy.sort((a, b) => a.price - b.price);
    render(filterPick, carListCopy);
  } 
  
  // FOR ASC TO DESC
  else {
    priceButtonImage.src = './images/icons/price-arrow-down.png';
    render(filterPick, carList)
    carListCopy.sort((a, b) => b.price - a.price);
    render(filterPick, carListCopy);
  }
});

buttonFilters[0].classList.add('selected');
render('FEATURED', carList)


function render(filterPick, carArray) {
  document.querySelector('.js-car-grid').innerHTML = '';
  let carArrayFiltered = carArray.filter((car) => car.categories.includes(filterPick));
  let html = ''; 
  carArrayFiltered.forEach((car, index) => {
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
        <p class="car-price">$${car.price.toLocaleString()}</p>
      </div>
    </div>
  `;
  document.querySelector('.js-car-grid').innerHTML += html;
  })
  
  

}  



