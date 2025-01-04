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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis mi ac diam porttitor sodales. Donec eros odio, fringilla eget turpis sit amet, luctus finibus augue. Morbi feugiat tincidunt leo, non interdum mi venenatis cursus. Quisque eu vehicula nisl, sed sollicitudin enim. Vivamus facilisis rutrum posuere. Ut pulvinar convallis est eu fringilla. Curabitur auctor hendrerit nisl, ut consequat risus feugiat quis. Morbi fringilla velit in pharetra pharetra. Etiam eget viverra erat. Pellentesque nec lectus feugiat, rutrum sem quis, lobortis ipsum. Aenean in nunc sed justo accumsan dapibus. Duis ut posuere eros. Vestibulum facilisis velit eros. Fusce aliquet diam ac ipsum accumsan gravida. Maecenas suscipit porta semper. Etiam eu vulputate arcu.
          </div>
          <div class="body-colors">
            <div class="colors-title">SELECT FROM AVAILABLE COLORS TO ORDER</div>
            <div class="colors js-colors">
              <div class="color red js-color"></div>
              <div class="color pink"></div>
              <div class="color yellow"></div>
              <div class="color gold"></div>
              <div class="color green"></div>
              <div class="color blue"></div>
              <div class="color black"></div>
              <div class="color white"></div>
            </div>
          </div>
          <div class="body-stats">
              <div class="body-stats-title">
                <p>Vehicle Stats</p>
              </div>
            <div class="body-stats-sheet js-body-stats-sheet">
              
            </div>
            <button class="body-order-button unready">ORDER</button>
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
  
} 