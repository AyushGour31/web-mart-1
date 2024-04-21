import { games } from "./games.js";
import { applications } from "./applications.js";
import { sliderItem } from "./slider.js";

const game = document.querySelector(".games");
const gameSec = document.querySelector(".games-sec");
const apps = document.querySelector(".apps");
// const btn = document.querySelector(".play-btn")

setTimeout(()=>{
    document.querySelector(".welcome").innerHTML = "";
}, 3000)

games.forEach((ele, i) => {
    const node = document.createElement("div")
    // gameSec.appendChild(node)
    gameSec.append(node)

    node.innerHTML = `
        <div class="item item-${i}">
            <img class="item-img" src="${ele.favicon}" alt="">
            <div class="item-delails">
                <h2 class="name">${ele.name}</h2>
                <div class="tagline">${ele.tagLine}</div>
                <div class="rating">${ele.rating}</div>
                <button class="play-btn" type="button"><a href="${games[i].url}">Play</a></button>
            </div>
        </div>
    `;
});

applications.forEach((ele, i) => {
    const node = document.createElement("div")
    // gameSec.appendChild(node)
    apps.append(node)

    node.innerHTML = `
        <div class="item item-${i}">
            <img class="item-img" src="${ele.favicon}" alt="">
            <div class="item-delails">
                <h2 class="name">${ele.name}</h2>
                <div class="tagline">${ele.tagLine}</div>
                <div class="rating">${ele.rating}</div>
                <button class="play-btn" type="button"><a href="${applications[i].url}">Play</a></button>
            </div>
        </div>
    `;
});

function slider(i) {
  setTimeout(() => {
    if (i == sliderItem.length) i = 0;
    
    game.innerHTML = `
        <div class="item item-${i}">
            <img class="item-img" src="${sliderItem[i].favicon}" alt="">
            <div class="item-delails">
                <h2 class="name">${sliderItem[i].name}</h2>
                <div class="tagline">${sliderItem[i].tagLine}</div>
                <div class="rating">${sliderItem[i].rating}</div>
                <button class="play-btn" type="button"><a href="${sliderItem[i].url}">Play</a></button>
            </div>
        </div>
    `;
    // game.style.transition = "all 1s ease";

    slider(++i);
  }, "3000");
}
slider(0);
