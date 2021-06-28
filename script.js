// TODO: select list of players
const players = document.querySelector('#players');
const playersList = players.querySelectorAll('li');
console.log(playersList);

// TODO: add Raul Gonzales to players
players.insertAdjacentHTML("beforeend", "<li>Raul Gonzales</li>")

// TODO: create a list of Random Numbers
const randomNumber = max => Math.ceil(Math.random()*max);

const randomNumbers = numberOfElements => {
    const randNumbers = [];
    for (let i = 0; i < numberOfElements; i++) {
        randNumbers.push(randomNumber(100));
    }
    return randNumbers;
}
// FUNCTION writeList display a list of elements in the DOM
const writeList = (listElement, listArray) => {
    // delete prevoius numbers list
    listElement.innerHTML = "";
    // insert new numbers in list
    listArray.forEach(element => {
        listElement.insertAdjacentHTML('beforeend', `<li>${element}</li>`);
    })
}

const numbers = randomNumbers(20);
const numbersList = document.querySelector('.random-numbers ol')

// displaying list of random numbers
writeList(numbersList, numbers);

// ACTIONS
const buttons = document.querySelectorAll('.actions .btn');
// when you click sort, i want to see the numbers sorted
const sortBtn = buttons[0];
sortBtn.addEventListener('click', event => {
    console.log(event.currentTarget);
    // sort numbers
    numbers.sort((a, b) => a - b);
    writeList(numbersList, numbers);
});

// when i click even, I want to see only the even numbers
const evenBtn = buttons[1];
evenBtn.addEventListener('click', event => {
    console.log(event.currentTarget);
    const evenNumbers = numbers.filter(number => number%2 === 0);
    writeList(numbersList, evenNumbers);
})

// when I click odd, I want to see only the odd numbers
const oddBtn = buttons[2];
oddBtn.addEventListener('click', event => {
    console.log(event.currentTarget);
    const oddNumber = numbers.filter(number => number%2 !== 0);
    writeList(numbersList, oddNumber);
})

buttons.forEach(btn => {
    btn.addEventListener('click', event => {
        console.log(event.currentTarget);
        buttons.forEach(btn => btn.classList.remove('btn-active'));
        event.currentTarget.classList.add('btn-active');
    });
})