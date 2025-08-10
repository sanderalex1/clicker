const cookie = document.getElementById("cookie");
const cursorUpgrade = document.querySelector(".upgrade");
const alienUpgrade = document.querySelectorAll(".upgrade")[1];
const farmUpgrade = document.querySelectorAll(".upgrade")[2];
const factoryUpgrade = document.querySelectorAll(".upgrade")[3];
const bankUpgrade = document.querySelectorAll(".upgrade")[4];
let cookieCounter = document.getElementById("cookies-counter");
let clickerCostElem = document.getElementById("clicker-cost");
let clickerCost = parseFloat(clickerCostElem.textContent);
let clickerLvl = document.querySelector(".clicker-lvl");
let clickerIncrease = document.querySelector(".clicker-increase");
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML);
let count = 0;
let cps = 1;

cookie.onclick = () => {
  count++;
  cookieCounter.textContent = Math.round(count);

  cookie.style.transform = "scale(0.9)";
  setTimeout(() => {
    cookie.style.transform = "scale(1)";
  }, 100);
};

cursorUpgrade.onclick = () => {
  if (count >= clickerCost) {
    count -= clickerCost;
    cookieCounter.textContent = Math.round(count);

    clickerLvl.innerHTML++;
    parsedClickerIncrease = parseFloat(
      (parsedClickerIncrease * 1.03).toFixed(2)
    );
    clickerIncrease.innerHTML = parsedClickerIncrease;
    cps += parsedClickerIncrease;

    clickerCost *= 1.18;
    clickerCostElem.textContent = Math.round(clickerCost);
  }
};
