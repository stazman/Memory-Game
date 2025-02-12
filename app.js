


// Clicking on Enter button
// New images displayed of hidden cards = creating board
// then game startes - shuffling board
    //define functions
    // fit screen in css or late
    let lightScore = 0

    let darkScore = 0

    let shuffledCardArray = []

    let cardArray = [
        {name: "Yoda", id:"Yoda1", lightSide: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ApB54YlPe5lmJ41Zo415suCA9sWim_aTHA&usqp=CAU", },
        {name: "Yoda", id:"Yoda2", lightside: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ApB54YlPe5lmJ41Zo415suCA9sWim_aTHA&usqp=CAU", },
        {name: "Grogu", id:"Grogu1", lightside: true,  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JPwGc930J9FkQ2fxykEUWlUkCwtotSbmHg&usqp=CAU", },
        {name: "Grogu", id:"Grogu2", lightside: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JPwGc930J9FkQ2fxykEUWlUkCwtotSbmHg&usqp=CAU", },
        {name: "Darth Vader", id:"DarthVader1", darkside: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZuxLoZiu9cyoCq5fwPK3W5pIqhFlAQeEcyA&usqp=CAU", },
        {name: "Darth Vader", id:"DarthVader2", darkside: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZuxLoZiu9cyoCq5fwPK3W5pIqhFlAQeEcyA&usqp=CAU", },
        {name: "Darth Maul", id:"DarthMaul1", darkside: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wcFyVnejaqJWWu1940Nte5ifeKMiPbrlbA&usqp=CAU", },
        {name: "Darth Maul", id:"DarthMaul2", darkside: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wcFyVnejaqJWWu1940Nte5ifeKMiPbrlbA&usqp=CAU", },
        {name: "Jabba the Hutt", id:"JabbatheHutt1", darkside: true, img:"https://tinyurl.com/3m7kj4n7", },
        {name: "Jabba the Hutt", id:"JabbatheHutt2", darkside: true, img:"https://tinyurl.com/3m7kj4n7", },
        {name: "Hans Solo", id:"HansSolo1", lightSide: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYM7DA6gL2xgCP8lkybHNNImEMirwuX4zqyQ&usqp=CAU", },
        {name: "Hans Solo", id:"HansSolo2", lightSide: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYM7DA6gL2xgCP8lkybHNNImEMirwuX4zqyQ&usqp=CAU", },
        {name: "Kylo Ren", id:"KyloRen1", darkside: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6b1PyzX_LhHkeMykPjW2kBUQFGukAcT_3ew&usqp=CAU", },
        {name: "Kylo Ren", id:"KyloRen2", darkside: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6b1PyzX_LhHkeMykPjW2kBUQFGukAcT_3ew&usqp=CAU", },
        {name: "The Mandalorian", id:"TheMandalorian1", lightSide: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKnm5e6G5H021X9UBvvaDR5-wWIbyAJ6m5A&usqp=CAU", },
        {name: "The Mandalorian", id:"TheMandalorian2", lightSide: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKnm5e6G5H021X9UBvvaDR5-wWIbyAJ6m5A&usqp=CAU", },
        {name: "Barriss Offee", id:"BarrissOffee1", darkside: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6AfhevbacAZ9exIjIuZvyseziI6NE6T9eg&usqp=CAU", },
        {name: "Barriss Offee", id:"BarrissOffee2", darkside: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6AfhevbacAZ9exIjIuZvyseziI6NE6T9eg&usqp=CAU", },
        {name: "Ashoka Tano", id:"AshokaTano1", lightSide: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmkuqrN4Dz80Qs5bbL4M5999OUNtXLIQRMA&usqp=CAU", },
        {name: "Ashoka Tano", id:"AshokaTano2", lightSide: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmkuqrN4Dz80Qs5bbL4M5999OUNtXLIQRMA&usqp=CAU", },

    ];


    const boardContainer = document.getElementById("Board-container")


    //event listener for play button
const playButton = document.querySelector("#PLAY")
playButton.addEventListener('click', createBoard)

// document.getElementById('cards').appendChild(img)

function createBoard() {
    shuffleCards(cardArray);
    // remove existing divs with class of each card, so it doesn't create board twice once click enter, add light side and dark side
   //  document.querySelector('.each-card').remove()
	for (let x = 0; x < cardArray.length; x++) {
		// insert Hexagon background
		let img = document.createElement("img");
		img.src = "assets/pattern_hexagon-4_1_5_0-0_110_1__ffffff_868998.png";
	        img.style.width = "100px"
        img.style.height = "100px"

        // insert character background
        let img2 = document.createElement('img')
        img2.src = cardArray[x].img
        img2.style.width="100px"
        img2.style.height="100px"

	    let card = document.createElement("div");
        // card.setAttribute("id", cardArray[x].id);
				card.setAttribute("data-name", cardArray[x].name);
				card.setAttribute("class", "each-card");
        card.append(img)
        card.append(img2)
        card.addEventListener('click', flipCard)
        boardContainer.append(card);

	}
}


    function shuffleCards(cardArray) {
        let currentIndex = cardArray.length,
          randomIndex,
          temporaryValue;

        while(currentIndex !==0) {
           randomIndex = Math.floor(Math.random() * currentIndex);
           currentIndex -= 1,
           temporaryValue = cardArray[currentIndex];
           cardArray[currentIndex] = cardArray[randomIndex];
           cardArray[randomIndex] = temporaryValue;
        }
                   }


function flipCard () {
    console.log(this);
    if (this === firstCard) return;

    this.classList.add("flipped");

    if (!firstCard) {
        firstCard = this;
        return;
    }
    secondCard = this;
    console.log(firstCard,secondCard);
    if (secondCard.getAttribute('data-name') === firstCard.getAttribute('data-name')) {
        disableCards ();

     addWeightedValue(firstCard)

    } else {
        unflipCards ();
    }
    
    checkWon()
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();

}
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetBoard();
    }, 1000);
}

function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

function restart() {
    resetBoard();
    shuffleCards();
    score = 0;
    document.querySelector(".score").textContent = score;
    boardContainer.innerHTML = "";
    generateCards();
}
// following code above from https://youtu.be/xWdkt6KSirw


function checkWon() {
    if(weight===0){
        if (lightScore > darkScore){
            alert("You are a Jedi!")
        } else {
            alert("You are a Sith!")
        }
    }

    // if (cardsWon == cardArray.length / 2) {
// alert("You won")
// setTimeout(()=> popup.style.display = "flex" ,300);
// }
}

let firstCard, secondCard;
let weight = 10;

function addWeightedValue(card) {
    if (card.lightSide) {
        lightScore += (1 * weight);
    } else {
        darkScore += (1* weight);
    }
    weight--;
}


//to check if won, you can give each of the cards a flipped boolean value

//maybe can set an async condition

//you can call checkWon after every movie to result in result; checkWon needs to be different than what have; may need to be async
