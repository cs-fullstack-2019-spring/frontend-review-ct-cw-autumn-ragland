//assign all cells to gameSpaces array
var gameSpaces = document.querySelectorAll("td");

//reset button
var resetButton = document.getElementsByTagName("button");
resetButton[0].onclick = function () {
    for (var i=0;i<gameSpaces.length;i++){
        gameSpaces[i].innerHTML = ""
    }
};

//check for CAT
function cat() {
    var iscat=true;

    for (var i=0;i<gameSpaces.length;i++){
        console.log(gameSpaces[i].innerHTML);
        if (gameSpaces[i].innerHTML === "") {
            iscat=false;
        }

    }
    if(iscat === true) {
        alert("CAT")
    }
}

//set a variable to differentiate players
var currentPlayer = 1;

//handler function for each cell (refer to event listener)
function clickedSquare(e) {
    console.log("Clicked Square");
    if (currentPlayer === 1 && e.target.innerHTML === "") {
        e.target.innerHTML = "X";
        currentPlayer = 2;
    }
    else if (currentPlayer === 2 && e.target.innerHTML === "") {
        e.target.innerHTML = "O";
        currentPlayer = 1;
    }
    //call function to check for winner
    checkWinner();
    cat();

}

// Add a click event listener for each cell
for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].addEventListener('click', clickedSquare);
}

//function to check if player one or player two won
function checkWinner() {
    console.log('Checking for winner');
    if((gameSpaces[0].innerText=== gameSpaces[1].innerText &&gameSpaces[1].innerText === gameSpaces[2].innerText && gameSpaces[2].innerText==="X")
        ||(gameSpaces[3].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText==="X")
        ||(gameSpaces[6].innerText=== gameSpaces[7].innerText &&gameSpaces[7].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        ||(gameSpaces[0].innerText=== gameSpaces[3].innerText &&gameSpaces[3].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="X")
        ||(gameSpaces[1].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText==="X")
        ||(gameSpaces[2].innerText=== gameSpaces[5].innerText &&gameSpaces[5].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        ||(gameSpaces[0].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        ||(gameSpaces[2].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="X"))
    {
        alert("X wins");
        return false;
    }
    else if((gameSpaces[0].innerText=== gameSpaces[1].innerText &&gameSpaces[1].innerText === gameSpaces[2].innerText && gameSpaces[2].innerText==="O")
        ||(gameSpaces[3].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText==="O")
        ||(gameSpaces[6].innerText=== gameSpaces[7].innerText &&gameSpaces[7].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        ||(gameSpaces[0].innerText=== gameSpaces[3].innerText &&gameSpaces[3].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="O")
        ||(gameSpaces[1].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText==="O")
        ||(gameSpaces[2].innerText=== gameSpaces[5].innerText &&gameSpaces[5].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        ||(gameSpaces[0].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        ||(gameSpaces[2].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="O"))
    {
        alert("O wins");
        return false;
    }
}





