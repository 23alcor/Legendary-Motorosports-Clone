import { carList } from "./cars.js";

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

buttonFilters[0].classList.add('selected');
render('FEATURED')


function render(filterPick) {
  document.querySelector('.js-car-grid').innerHTML = '';
  carListFiltered = carList.filter((car) => car.categories.includes(filterPick));
  let html = ''; 
  carListFiltered.forEach((car) => {
  html = `
    <div class="car-item">
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



