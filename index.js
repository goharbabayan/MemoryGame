import { CardComponent } from "./components/Cardcomponent.js";

const ApiKey = "563492ad6f9170000100000157d57ca604814de8b4e961a46994f8c3";
const url = "https://api.pixels.com/v1/serach";
// const getRandomPage = () => Math.round(Math.random() * (10 - 1) + 1);

const settings = document.querySelector(".settings");
const categories = Array.from(document.querySelectorAll(".category"));
const start = document.getElementById("start");
const buttons= document.querySelectorAll(".btn");
let cardCount = +document.getElementById("card-count").textContent;
console.log(cardCount, "cardCount");
console.log(categories, "categories");
 
categories.forEach(category => category.addEventListener("change", findRadioValue));

function findRadioValue() {
    const selected = document.querySelector("input[name='category']:checked").value;
    console.log(selected, "selected");
} 


// "-", "+" button click
buttons.forEach(button => button.addEventListener("click", countChange));

function countChange(e) {
    console.log(cardCount);
    //  debugger;
    if(e.target.id === "minus" && cardCount > 0) {
        cardCount -= 2;
        console.log(cardCount, "newcardCount");
        document.getElementById("card-count").innerText = +cardCount
    } else if(e.target.id === "plus") {
        cardCount += 2;
        document.getElementById("card-count").innerText = +cardCount
        console.log(cardCount, "newcardCount");
    }
}

start.addEventListener("click", renderCards)

function renderCards() {
    const card = document.createElement("div");
    settings.appendChild(card)
    console.log(card);
    // categories.style.display = "none";
    let selected = document.querySelector("input[name='category']:checked").value;
    let cardCount = +document.getElementById("card-count").textContent;
    console.log(selected);
    console.log(cardCount);
    getData()
}
async function getData() {
    try {
        await fetch(`https://api.pexels.com/v1/search?query=${selected}&per_page=${cardCount}`, {
        method: "GET",
        headers : {
            "Authorization" : "563492ad6f9170000100000157d57ca604814de8b4e961a46994f8c3",
        }
        }).then(res => res.json()).then(data => CardComponent.render(data.photos))
    } catch (error) {
        console.log("erroooooor");
    }
    
    
} 
            // card.innerHTML = CardComponent.render()
            
// fetch("https://api.pexels.com/v1/search?query=nature&per_page=5", {
//     method: "GET",
//     headers : {
//         "Authorization" : "563492ad6f9170000100000157d57ca604814de8b4e961a46994f8c3",
//     }
//     }).then(res => res.json()).then(data => console.log(data.page))
    

// fetch("https://api.pexels.com/v1/search?query=nature&per_page=5", {
//     method: "GET",
//     headers : {
//         "Authorization" : "563492ad6f9170000100000157d57ca604814de8b4e961a46994f8c3",
//     }
//     }).then(res => res.json()).then(data => console.log(data.photos))




// getData()

function shuffle(cards) {
    cards.forEach(card => {
      card.style.order = Math.floor(Math.random() * cards.length).toString();
    });
  }