// open popup
function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
}
function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
}
const openButton = document.querySelector(".header__menu");
const closeButton = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
const addPopup = document.querySelector(".popup_opened");

openButton.addEventListener("click", function () {
  openPopup(popup);
});
closeButton.addEventListener("click", function () {
  closePopup(popup);
});

// scroll
const anchors = document.querySelectorAll(".header__link");

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

//swap foto in gallary

const fotos = [
  "./img/Rectangle1.jpg",
  "./img/Rectangle2.jpg",
  "./img/Rectangle3.jpg",
];
const rArrow = document.querySelector(".description__gallery-swap_right");
const lArrow = document.querySelector(".description__gallery-swap_left");

let i = 1;
rArrow.addEventListener("click", function () {
  document.querySelector(".description__gallery-foto").src = fotos[i];
  if (i === fotos.length - 1) {
    i = 0;
  } else {
    i++;
  }
});

lArrow.addEventListener("click", function () {
  if (i === 0) {
    i = fotos.length - 1;
  } else {
    i--;
  }
  document.querySelector(".description__gallery-foto").src = fotos[i];
});

// chance magazine

const circle = document.querySelector(".description__magazine-circle");
const pickCircle = document.querySelector(".description__magazine-circle_pick");

//look magazine


const title = document.querySelector(".description__magazine-title")
const text = document.querySelector(".description__magazine-text");
const circleFirst = document.getElementById("first");
const circleSecond = document.getElementById("second");
const buttonRead = document.querySelector(".description__magazine-button")

circleFirst.style.background = "#E1FD2C";

circleFirst.addEventListener("click", function () {
  circleSecond.style.background = "#191D2C";
  circleFirst.style.background = "#E1FD2C";
  title.textContent = 'Engadget: ';
  text.textContent = 'VW’s e-BULLI concept shows how your classic van can become an EV.';
  buttonRead.setAttribute('href', 'https://www.engadget.com/2020-03-20-vw-unveils-e-bulli-t1-electric-conversion.html');
});

circleSecond.addEventListener("click", function () {
  circleSecond.style.background = "#E1FD2C";
  circleFirst.style.background = "#191D2C";
  title.textContent = 'Drive.ru: ';
  text.textContent = 'Вэн Volkswagen e-Bulli скрестил классику с современной техникой.';
  buttonRead.setAttribute('href', 'https://www.drive.ru/news/volkswagen/"');
});

// form 

const buttonForm = document.querySelector(".footer__submit");

function Submit(evt) {
  evt.preventDefault();



  buttonForm.textContent = "ГОТОВА !"
}

buttonForm.addEventListener('click', Submit);




