const startGameDom = document.querySelector('#startGame');
const gridContainerDom = document.querySelector('#gridContainer');
const difficultSelectorDom = document.querySelector('#difficultSelector');
const instructionDom = document.querySelector ('#instruction');


console.log("Il valore di difficoltà selezionato è: " + difficultSelectorDom.value);




startGameDom.addEventListener('click', function(){
    gridContainerDom.innerHTML = '';

    instructionDom.classList.add('d-none');

    let boxDimension = '';
    let boxNumber = 0;
    let bombsArray = [];
    const numberOfBombs = 16;

    switch(difficultSelectorDom.value){
        case '1':
            boxNumber = 100;
            boxDimension = 'easy';
            console.log('easy');
            break;
        case '2':
            boxNumber = 81;
            boxDimension = 'normal';
            console.log('normal');
            break;
        case '3':
            boxNumber = 49;
            boxDimension = 'hard';
            console.log('hard');
            break;
    }

    createGameField(boxNumber, boxDimension);
    bombsArray = createArrayOfNumber(numberOfBombs, 1, boxNumber);
    console.log("L'array di bombe risultante dopo la generazione è: " + bombsArray);
});






function createNewBoxNumbered(number){
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.innerHTML = `<div>${number}</div>`;
    newBox.addEventListener('click', function(){
        console.log(number);
        this.classList.add('selected');
    });
    return newBox;
}

function createGameField(number, dimension){
    for(i=1 ; i <= number ; i++){
        const box = createNewBoxNumbered(i);
        box.classList.add(dimension);
        gridContainerDom.append(box);
    }
}

function randomNumber(min, max){
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
}

function createUniqueRandomNumber(arrayOfNumber, min, max){
    let alreadyExist = true;
    let newNumber;
    while(alreadyExist){
        newNumber = randomNumber(min, max);
        if(!arrayOfNumber.includes(newNumber)){
            alreadyExist = false;
        }
    }
    return newNumber;
}

function createArrayOfNumber(arrayDimension, min, max){
    stockingArray = [];
    let newNumber;
    while(stockingArray.length < arrayDimension){
        newNumber = createUniqueRandomNumber(stockingArray, min, max);
        console.log("Il nuovo numero generato è: " + newNumber);
        stockingArray.push(newNumber);
    }
    console.log("L'array di numeri generato da createArrayOfNumber è: " + stockingArray);
    return stockingArray;
}
