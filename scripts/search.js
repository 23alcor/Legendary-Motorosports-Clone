

// Make the home button work
const homeButton = document.querySelector('.js-home-button');
homeButton.addEventListener('click', () => {
  window.location = 'index.html';
  console.log('hello');
});

const backButton = document.querySelector('.js-back-button');
backButton.addEventListener('click', () => {
  window.location = 'index.html';
  console.log('hello');
});



// Make an array of visited sites

const url = window.location.href;
let urlList;

document.addEventListener('DOMContentLoaded', () => {
  const url = window.location.href;
  urlList = JSON.parse(sessionStorage.getItem('history')) || [];
  sessionStorage.setItem('history', JSON.stringify(urlList));
  if (!urlList.includes(url)){
    urlList.push(url);
    sessionStorage.setItem('history', JSON.stringify(urlList));
  }
});      

// Make history button drop down

const historyButton = document.querySelector('.js-time-button');
const urlContainer = document.querySelector('.url-container');
historyButton.addEventListener('click', () => {
  urlContainer.innerHTML = '';

  urlList.forEach((item) => {
    urlContainer.innerHTML += `
      <div class='url-item'>${item}</div>
    `;
  })
historyButton.addEventListener('mouseleave', () => {
  urlContainer.innerHTML = '';
});




});