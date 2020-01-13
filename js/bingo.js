// enable selection toggling of boxes
selectedBox = (id) => {
    const element = document.getElementById(id);
    element.classList.toggle("selected");
}

// Generate the bingo board HTML
makeBingoBoard = () => {
    const bingoBoard = document.getElementById('bingo-board');

    // Make 25 <li> elements inside #bingo-board
    for (let i = 0; i < 25; i++) {
        const listItem = document.createElement('li');
        listItem.setAttribute('id', `box${i}`);

        // Middle square is always free
        if (i === 12) {
            listItem.innerHTML =`<p>Freeee!!!</p>`; 

        } else {
            listItem.innerHTML = bingoValue();
        }

        listItem.setAttribute('onclick', `selectedBox(\`box${i}\`)`);

        bingoBoard.appendChild(listItem);
    }
}

// TODO: display message upon achieving BINGO
// calcuateWin = () => {
//     const horizontalWins = [
//         [0, 1, 2, 3, 4]
//     ]
// }

// Create array of all possible bingo values
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

const bingoValue = () => {
    // calculate random index position
    const calculatedIndex = Math.floor(Math.random() * bingoValues.length);

    const randomWord = bingoValues.splice(calculatedIndex, 1)[0];

    return randomWord;
};
