let turn = "X"
let gameActive = false;
function changeTurn() {
    if (turn === "X") return turn = "O";
    else return turn = "X";
}

function checkWin() {

    let win = [
        [1, 2, 3],
        [1, 4, 7],
        [1, 5, 9],
        [2, 5, 8],
        [7, 5, 3],
        [3, 6, 9],
        [4, 5, 6],
        [7, 8, 9]
    ]
    let whoWon = '';
    win.forEach(condition => {
        let symbols = [];
        for (let i = 0; i < 3; i++) {
            let x = document.getElementById(condition[i].toString()).innerHTML;
            symbols.push(x);
        }
        if (symbols[0] == symbols[1] && symbols[1] == symbols[2]) {
            if (symbols[0] == 'X') {
                whoWon = 'X';
                return;
            }
            if (symbols[0] == 'O') {
                whoWon = 'O';
                return;
            }
        }
    })
    return whoWon;
}

function resetgame() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).innerHTML = '';
    }
}

function handleClick(cell, cellObject) {
    gameActive = true;
    if (cellObject.innerText === '') {
        cellObject.innerHTML = turn;
        turn = changeTurn();

        let winner = checkWin();
        if (winner != '') {
            setTimeout(() => {
                document.getElementById("win").innerHTML = `The winner is ${winner}`;
                $('.popUpBox').css("display", "block");
                $('.btn1').click(function () {
                    $('.popUpBox').css("display", "none");
                    const foo = document.querySelector('#gridContainer')
                    foo.addEventListener('click', (event) => {
                        event.preventDefault();
                    });
                });
                $('.btn2').click(function () {
                    $('.popUpBox').css("display", "none");
                    resetgame();
                });
            }, 20);
            gameActive = false;
            turn = winner;
        }
    }

};

for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener('click', function (event) {
        handleClick(i, this);
    });
}
