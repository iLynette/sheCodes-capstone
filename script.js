const speakers = [{
  id: 'speaker1',
  image: './images/speaker1.png',
  name: 'Lynn Jones',
  position: 'CO Founder and CEO sheCodes',
  description: 'Lynn is the co founder of she codes.',
},
{
  id: 'speaker2',
  image: './images/speaker2.png',
  name: 'Angie Finn',
  position: 'CO Founder and CEO sheCodes',
  description: 'Angie is the co founder of she codes.',
},
{
  id: 'speaker3',
  image: './images/speaker3.png',
  name: 'Macy Jones',
  position: 'CO Founder and CEO sheCodes',
  description: 'Macy is the co founder of she codes.',
},
{
  id: 'speaker4',
  image: './images/speaker4.png',
  name: 'Rose Jones',
  position: 'CO Founder and CEO sheCodes',
  description: 'Rose is the co founder of she codes.',
},
{
  id: 'speaker5',
  image: './images/speaker5.png',
  name: 'Jess Jones',
  position: 'CO Founder and CEO sheCodes',
  description: 'Jess is the co founder of she codes.',
},
{
  id: 'speaker6',
  image: './images/speaker6.png',
  name: 'Kaylie Jones',
  position: 'CO Founder and CEO sheCodes',
  description: 'Kaylie is the co founder of she codes. ',
},
];

const speakerSection = document.getElementById('speakers');

function info() {
  speakers.forEach((speaker) => {
    speakerSection.innerHTML += `
        <div class="start">
            <div class="first">
                <img src="${speaker.image}" alt="${speaker.name}" class="speakerImg">
            </div>
            <div class="speakerDescription">
            <h3>${speaker.name}</h3>
            <h4>${speaker.position}</h4>
            <hr class="speakerLine">
            <p class="description">
                <i><a href="#">${speaker.description}</a></i>
            </p>
            </div>
        </div>`;
  });
}

window.onload = info();

const menu = document.querySelector('#menu');
const mobileNav = document.querySelector('.mobileNav');
const menuList = document.querySelectorAll('#nav li a');

function toggleMenu() {
  if (mobileNav.style.display !== 'block') {
    mobileNav.style.display = 'block';
    menu.src = './images/x.png';
  } else {
    mobileNav.style.display = 'none';
    menu.src = './images/menu.png';
  }
}
menu.addEventListener('click', toggleMenu);

function hideMenu() {
  mobileNav.style.display = 'none';
  menu.src = './images/menu.png';
}

menuList.forEach((event) => {
  event.addEventListener('click', hideMenu);
});
