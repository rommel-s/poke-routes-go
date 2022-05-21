import { locationsContainers } from "./locations.js";

let DateTime = luxon.DateTime;

new ClipboardJS(".coord-btn");

const mainContainer = document.getElementById("main-container");

function createElementsDynamically() {
  locationsContainers.forEach((location) => {
    let place = document.createElement("div");
    place.className = "place";

    let flag = document.createElement("img");
    flag.className = "flag";
    flag.setAttribute("src", location.place_flag)

    let mainInformations = document.createElement("section");
    mainInformations.className = "main-information";
    mainInformations.setAttribute("data-timezone", location.place_timezone);

    let locationName = document.createElement("h3");
    locationName.innerText = location.place_name;

    let locationTime = document.createElement("p");
    location.className = "place-local-time";

    let coordinateBtn = document.createElement("button");
    coordinateBtn.innerText = "Copiar Coordenada";
    coordinateBtn.className = "coord-btn";
    coordinateBtn.setAttribute(
      "data-clipboard-text",
      location.place_coordinate
    );

    mainInformations.appendChild(locationName);
    mainInformations.appendChild(locationTime);
    mainInformations.appendChild(coordinateBtn);
    place.appendChild(flag);
    place.appendChild(mainInformations);
    mainContainer.appendChild(place);
  });
}

window.addEventListener("load", () => {
  createElementsDynamically();
  userResponse();
});

function getTimeNow() {
  const localTime = DateTime.now();

  document.getElementById("time").innerHTML = localTime.toFormat("HH:mm:ss");
}

function setAllTimezones() {
  const locations = document.querySelectorAll("div.place section");

  locations.forEach((location) => {

    let setLocalTime = location.querySelector("p");
    let getLocationTimezone = location.getAttribute("data-timezone");

    let timeNow = DateTime.now().setZone(getLocationTimezone);
    // console.log(timeNow.c.hour)
    // if (timeNow.c.hour === 01) {
    //   setLocalTime.className = 'ongoing-event';
    //   locations.className = 'ongoing-event-flag';
    // }
    setLocalTime.innerHTML = timeNow.toFormat("HH:mm");
  });
}

function userResponse() {
  const coordButton = document.querySelectorAll(".coord-btn")

  coordButton.forEach((btn) => {
    btn.addEventListener('click', () => {

      btn.innerHTML = "Copiado!"
      btn.style.backgroundColor = '#075f81';

      setTimeout(() => {

        btn.innerHTML = "Copiar Coordenada";
        btn.style.backgroundColor = '#1197cc';

      }, 5000)
    })
  })
}

setInterval(() => {

  getTimeNow();
  setAllTimezones();

}, 500);

window.addEventListener("scroll", () => {
  const localTimeContainer = document.querySelector("header");

  localTimeContainer.classList.toggle("sticky", window.scrollY > 0);
});
