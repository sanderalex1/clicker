const cookie = document.getElementById("cookie");
const cursorUpgrade = document.querySelector(".upgrade");
let clickerCostElem = document.getElementById("clicker-cost");
let clickerCost = parseFloat(clickerCostElem.textContent);
let clickerLvl = document.querySelector(".clicker-lvl");
let clickerIncrease = document.querySelector(".clicker-increase");
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML);
const alienUpgrade = document.querySelectorAll(".upgrade")[1];
let alienCostElem = document.getElementById("alien-cost");
let alienCost = parseFloat(alienCostElem.textContent);
let alienLvl = document.querySelector(".alien-lvl");
let alienIncrease = document.querySelector(".alien-increase");
let parsedAlienIncrease = parseFloat(alienIncrease.innerHTML);
const farmUpgrade = document.querySelectorAll(".upgrade")[2];
const factoryUpgrade = document.querySelectorAll(".upgrade")[3];
const bankUpgrade = document.querySelectorAll(".upgrade")[4];
let cookieCounter = document.getElementById("cookies-counter");

let cookieMultiplier = document.getElementById("multiplier");
let parsedCookieMultiplier = parseFloat(cookieMultiplier.textContent);
let count = 0;
let cps = 0;

cookie.onclick = () => {
  count++;
  cookieCounter.textContent = count.toFixed(1);

  cookie.style.transform = "scale(0.9)";
  setTimeout(() => {
    cookie.style.transform = "scale(1)";
  }, 100);
};

setInterval(() => {
  if (cps > 0) {
    cookieMultiplier.innerHTML = (parsedCookieMultiplier + cps).toFixed(1);
    count += cps;
    cookieCounter.textContent = count.toFixed(1);
  }
}, 1000);

cursorUpgrade.onclick = () => {
  if (count >= clickerCost) {
    count -= clickerCost;
    cookieCounter.textContent = Math.round(count);

    clickerLvl.innerHTML++;
    parsedClickerIncrease = parseFloat(
      (parsedClickerIncrease = 0.1).toFixed(2)
    );
    clickerIncrease.innerHTML = parsedClickerIncrease;
    cps += parsedClickerIncrease;

    clickerCost *= 1.18;
    clickerCostElem.textContent = Math.round(clickerCost);
  }
};

alienUpgrade.onclick = () => {
  if (count >= alienCost) {
    count -= alienCost;
    cookieCounter.textContent = Math.round(count);

    alienLvl.innerHTML++;
    parsedAlienIncrease = parseFloat((parsedAlienIncrease = 5).toFixed(2));
    alienIncrease.innerHTML = parsedAlienIncrease;
    cps += parsedAlienIncrease;

    alienCost *= 1.2;
    alienCostElem.textContent = Math.round(alienCost);
  }
};
