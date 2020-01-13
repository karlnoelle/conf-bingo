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
            // stuff.innerHTML =`<p>box${i}</p>`;
            stuff.innerHTML = [bingoValue];
        }

        stuff.setAttribute('onclick', `selectedBox(\`box${i}\`)`);

        bingoBoard.appendChild(stuff);
    }
}

const bingoValues = [
    'Diversity',
    'Intersection of business, design and code',
    'Reference to a "hot, new" prototyping tool',
    'Mobile first',
    'Accessibility',
    'Wireframes',
    'High-fidelity',
    'Cross-functional',
    'Putting the customer at the heart of everything we do',
    'Brand values',
    'Analytics or measuring success',
    'Card-sorting',
    'Empathy',
    'On-boarding',
    'Bottom-line impact',
    'Agile, fragile, agile-ish',
    'Meeting stakeholder needs',
    'Journey map',
    'User needs',
    'User-driven results',
    'Make it real',
    'Disruptive',
    'Synergy',
    'Leading change together'
];

const bingoValue = bingoValues[Math.floor(Math.random()*bingoValues.length)];

bingoValues.foreach (var i = bingoValues.length-1; i <= 24; i--) {
    bingoValues.slice(bingoValues[Math.floor(Math.random() * bingoValues.length - 1)]);
};

// TODO: display message upon achieving BINGO
// calcuateWin = () => {
//     const horizontalWins = [
//         [0, 1, 2, 3, 4]
//     ]
// }