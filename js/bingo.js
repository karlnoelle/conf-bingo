const trackState = [12];
let hasWon = false;

// enable selection toggling of boxes
selectedBox = (id) => {
    const newId = +id.replace("box", '');

    if (newId !== 12 && !hasWon) {
        const element = document.getElementById(id);
        element.classList.toggle("selected");
        if (element.classList.contains('selected')) {
            trackState.push(newId);
        } else if (trackState.includes(newId)) {
            trackState.splice(trackState.indexOf(newId), 1)
        }

        calcuateWin();
    }
}

// Generate the bingo board HTML
makeBingoBoard = () => {
    const bingoBoard = document.getElementById('bingo-board');

    // Make 25 <li> elements inside #bingo-board
    for (let i = 0; i < 25; i++) {
        const listItem = document.createElement('li');
        listItem.setAttribute('id', `box${i}`);

        // Middle square is always free
        if (i === 12 && !hasWon) {
            listItem.innerHTML =`<p>Freeee!!!</p>`;
            listItem.classList.add("selected");

        } else {
            listItem.innerHTML = bingoValue();
        }

        listItem.setAttribute('onclick', `selectedBox(\`box${i}\`)`);

        bingoBoard.appendChild(listItem);
    }
}

// TODO: display message upon achieving BINGO
calcuateWin = () => {
    let state = 0;
    const horizontalWins = [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
    ]
    const verticalWins = [
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 12, 17, 23],
        [4, 9, 14, 19, 24]
    ]
    const diagonalWins = [
        [0, 6, 12, 18, 24],
        [4, 8, 12, 16, 20]
    ]

    const toCheck = [].concat(horizontalWins).concat(verticalWins).concat(diagonalWins);

    for (const win of toCheck) {
        // If the state has found a complete run
        // set hasWon and break out of the array.
        if (state === 5) {
            hasWon = true;
            break;
        }

        // Didn't find a winner; reinitialize state
        state = 0;

        for(const blah of win) {
            if(!trackState.includes(blah)) {
                break;
            };

            // Each time we find a value in the
            // array, count up the state once.
            state += 1;
        };
    }

    if (hasWon) {
        document.getElementById('winner').classList.add('display');
    } else {
        document.getElementById('winner').classList.remove('display');

    }
};

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
    'Value chain multiplier',
    'Meeting stakeholder needs',
    'Journey map',
    'User needs',
    'User-driven results',
    'Make it real',
    'Disruptive',
    'Synergy',
    'Leading change together',
    'Listen to me',
    'Inspire me',
    'Let\'s talk about what\'s possible',
    'Be human',
    'Think about tomorrow',
];

const bingoValue = () => {
    // calculate random index position
    const calculatedIndex = Math.floor(Math.random() * bingoValues.length);

    const randomWord = bingoValues.splice(calculatedIndex, 1)[0];

    return randomWord;
};
