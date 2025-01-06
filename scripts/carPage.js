import { carList } from "./cars.js";

const carFocus = JSON.parse(sessionStorage.getItem('carFocus'));

//const carFocus = carList[0];

const audioHoverSelect = new Audio('./audio/phone/hover-select.mp3');
const audioSelect = new Audio('./audio/phone/select.mp3')




renderSite(carFocus);


function renderBars(rating) {
  if (rating > 5 || rating < 0) {
    console.log("Needs a number between 0 and 5")
    return 
  }
  const roundRating = Math.floor(rating);
  const roundDecimal = (rating * 10 - Math.floor(rating) * 10) * 10;
  return [roundRating, roundDecimal]
}

function renderStats(carFocus, statName) {
  const statSheet = document.querySelector('.js-body-stats-sheet');
  const stats = carFocus.stats;

  statSheet.innerHTML += `
    <div class="stat">
      <div class="stat-name">${statName.charAt().toUpperCase() + statName.slice(1)}</div>
      <div class="stat-bar js-stat-bar-${statName}">

      </div>
    </div>
  `;

  const statBars = document.querySelector(`.js-stat-bar-${statName}`);
  let statBar = renderBars(carFocus.stats[statName]);
  for (let i = 0; i < statBar[0]; i++){
    statBars.innerHTML += `<div class='bar'></div>`
  }   
  if (statBar[0] !== 5) {
  statBars.innerHTML += `<div class='bar unselected'>
    <div id='progressdiv-${statName}' class='progressing js-progressing'></div>
  </div>`
  for (let i = 0; i < 4 - statBar[0]; i++){
    statBars.innerHTML += `<div class='bar unselected'></div>`
  }
  const progressingBar = document.getElementById(`progressdiv-${statName}`);
  progressingBar.style.width = `${statBar[1]}%`;
  }
}

function renderSite(carFocus) {
  const mainContainer = document.querySelector('.js-main-container')

  mainContainer.innerHTML = `
    <div class="main-container-header">
        <div class="header-name">
          <div class="header-name-logo">
            <img class="logo" src="${carFocus.logo}" alt="">
          </div>
          <div class="header-name-text">
            <p>${carFocus.name}</p>
          </div>
        </div>
        <div class="header-price">$${(carFocus.price).toLocaleString()}</div>
      </div>
      <div class="main-container-body">
        <div class="body-main">
          <div class="body-para">
            ${carFocus.desc}
          </div>
          <div class="body-colors">
            <div class="colors-title">SELECT FROM AVAILABLE COLORS TO ORDER</div>
            <div class="colors js-colors">
              <div data-id='red' class="color red"></div>
              <div data-id='pink' class="color pink"></div>
              <div data-id='yellow' class="color yellow"></div>
              <div data-id='gold' class="color gold"></div>
              <div data-id='green' class="color green"></div>
              <div data-id='blue' class="color blue"></div>
              <div data-id='black' class="color black"></div>
              <div data-id='white' class="color white"></div>
            </div>
          </div>
          <div class="body-stats">
              <div class="body-stats-title">
                <p>Vehicle Stats</p>
              </div>
            <div class="body-stats-sheet js-body-stats-sheet">
              
            </div>
            <button class="body-order-button unready js-order-button">ORDER</button>
          </div>
        </div>
        <div class="body-pictures">
          <div class="pictures">
            <div class="picture1">
              <img class="image1" src="${carFocus.image}" alt="">
            </div>
            <div class="picture23">
              <div class="picture2">
                <img class="image2" src="${carFocus.image1}" alt="">
              </div>
              <div class="picture3">
                <img class="image3" src="${carFocus.image2}" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-grid">
        <button class="sort-by-price-button js-sort-by-price-button">
          <p class="sort-by-price-button-text" >Sort by Price</p>
          <img class="sort-by-price-button-image js-sort-by-price-button-image" src="images/icons/dash.webp" alt="" draggable = false>
        </button>
        <div class="sort-grid">
          <button class="sort-button js-sort-button" data-id="FEATURED">FEATURED</button>
          <button class="sort-button js-sort-button" data-id="DOOR2">2 DOOR</button>
          <button class="sort-button js-sort-button" data-id="DOOR4">4 DOOR</button>
          <button class="sort-button js-sort-button" data-id="MOTORCYCLES">MOTORCYCLES</button>
          <button class="sort-button js-sort-button" data-id="SPECIAL">SPECIAL</button>
        </div>
        <div class="car-grid js-car-grid">
        </div>
      </div>
  `;
  renderStats(carFocus, 'speed');
  renderStats(carFocus, 'acceleration');
  renderStats(carFocus, 'braking');
  renderStats(carFocus, 'traction');

  const orderButton = document.querySelector('.body-order-button');
  const colors = document.querySelectorAll('.color');
  console.log(colors);
  colors.forEach((color) => {
    color.addEventListener('click', () => {
      audioSelect.currentTime = 0;
      audioSelect.play().catch((error) => {
        console.warn("Unable to play hover audio due to browser restrictions:", error);
      });
      orderButton.classList.remove('unready');
      colors.forEach((clr) => {
        clr.classList.remove('selected');
      });
      color.classList.add('selected');
      console.log('rednerd');
    });
    color.addEventListener('mouseenter', () => {
      audioHoverSelect.currentTime = 0;
      audioHoverSelect.play().catch((error) => {
        console.warn("Unable to play hover audio due to browser restrictions:", error);
      });
    });
  });

  const allButtons = document.querySelectorAll('button');

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

  const orderCarButton = document.querySelector('.js-order-button');
  orderCarButton.addEventListener('click', () => {
    if (!orderCarButton.classList.contains('unready')) {
      mainContainer.innerHTML = `
        <div class="order-header">
          <div class="header-name">
            <div class="header-name-logo">
              <img class="logo" src="${carFocus.logo}" alt="">
            </div>
            <div class="header-name-text">
              <p>${carFocus.name}</p>
            </div>
          </div>
        </div>
        <div class="order-screen">
          <div class="body-pictures">
            <div class="pictures">
              <div class="picture1">
                <img class="image1" src="${carFocus.image}" alt="">
                <div class="color order-color js-order-color"></div>
              </div>
              <div class="picture23">
                <div class="picture2">
                  <img class="image2" src="${carFocus.image1}" alt="">
                </div>
                <div class="picture3">
                  <img class="image3" src="${carFocus.image2}" alt="">
                </div>
                </div>
              </div>
            </div>
          <div class="order-text js-order-text">Order Processing...</div>
        </div>
      `;

      let colorSelected;
      const orderColor = document.querySelector('.js-order-color');
      colors.forEach((clrrt) => {
        if (clrrt.classList.contains('selected')) {
          colorSelected = clrrt.dataset.id;
        }
      });
      orderColor.classList.add(colorSelected);

      setTimeout(() => {
        const orderText = document.querySelector('.js-order-text');
        orderText.innerHTML = `
          <p style="font-size: 24px; margin-top: 0px;">NOT SOLD</p>
          <p style="font-size: 20px; margin-bottom: -5px;">Purchase Failed</p>
          <p>Insufficient funds.</p>
        `;
      }, 2500)
    }
    
  });
  
} 