selectedBox = (id) => {
    const element = document.getElementById(id);
    element.classList.toggle("selected");
}

function thing() {
    const bingoBoard = document.getElementById('bingo-board');

    for (let i = 0; i < 25; i++) {
        const stuff = document.createElement('li');
        stuff.setAttribute('id', `box${i}`);

        if (i === 12) {
            stuff.innerHTML =`<p>Freeee!!!</p>`; 

        } else {
            stuff.innerHTML =`<p>box${i}</p>`;
        }

        stuff.setAttribute('onclick', `selectedBox(\`box${i}\`)`);

        bingoBoard.appendChild(stuff);
    }
}

// TODO: display message upon achieving BINGO
// calcuateWin = () => {
//     const horizontalWins = [
//         [0, 1, 2, 3, 4]
//     ]
// }