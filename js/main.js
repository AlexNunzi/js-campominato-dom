const startGameDom = document.querySelector('#startGame');
const gridContainerDom = document.querySelector('#gridContainer');
const difficultSelectorDom = document.querySelector('#difficultSelector');
const instructionDom = document.querySelector ('#instruction');
const scoreDom = document.querySelector ('#score');
const scoreNumberDom = document.querySelector ('#scoreNumber');
const winDom = document.querySelector ('#win');
const loseDom = document.querySelector ('#lose');
const finalScoreDom = document.querySelector ('.finalScore');



console.log("Il valore di difficoltà selezionato è: " + difficultSelectorDom.value);




startGameDom.addEventListener('click', function(){
    gridContainerDom.innerHTML = '';

    instructionDom.classList.add('d-none');
    scoreDom.classList.remove('d-none');
    winDom.classList.add('d-none');
    loseDom.classList.add('d-none');
    finalScoreDom.classList.add('d-none');
    scoreNumberDom.innerHTML = 0;

    let boxDimension = '';
    let boxNumber = 0;
    let bombsArray = [];
    const numberOfBombs = 16;
    let gameField = [];

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

    bombsArray = createArrayOfNumber(numberOfBombs, 1, boxNumber);
    console.log("L'array di bombe risultante dopo la generazione è: " + bombsArray);
    gameField = createGameField(boxNumber, boxDimension, bombsArray, numberOfBombs);
    refreshGameField(gameField, gridContainerDom);
});






function createNewBoxNumbered(progressiveNumber, numberedBombs, boxNumber, numberOfBombs){
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.innerHTML = `<div>${progressiveNumber}</div>`;
    if(numberedBombs.includes(progressiveNumber)){
        newBox.classList.add('bomb');
    }
    newBox.addEventListener('click', function bombcheck(){
        if(numberedBombs.includes(progressiveNumber)){
            this.classList.add('exploded');
            gridContainerDom.classList.add('gameOver');
            loseDom.classList.remove('d-none');
            finalScoreDom.classList.remove('d-none');
            scoreDom.classList.add('d-none');
            clearEventListenerByClass('.box', gridContainerDom);
        } else {
            this.classList.add('selected');
            scoreNumberDom.innerHTML++;
            if(scoreNumberDom.innerHTML == (boxNumber - numberOfBombs)){
                winDom.classList.remove('d-none');
                finalScoreDom.classList.remove('d-none');
                clearEventListenerByClass('.box', gridContainerDom);
                scoreDom.classList.add('d-none');
            }
        }
        this.removeEventListener('click', bombcheck);
        finalScoreDom.innerHTML = scoreNumberDom.innerHTML;
    });
    return newBox;
}

function createGameField(number, dimension, numberedBombs, numberOfBombs){
    let boxContainer = [];
    for(i=1 ; i <= number ; i++){
        const box = createNewBoxNumbered(i, numberedBombs, number, numberOfBombs);
        box.classList.add(dimension);
        boxContainer.push(box);
    }
    console.log(boxContainer);
    return boxContainer;
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

function clearEventListenerByClass(className, domContainer){
    let elements = document.querySelectorAll(className);
    domContainer.innerHTML = '';
    for(i=0; i < elements.length; i++){
        domContainer.append(elements[i].cloneNode(true));
    }
}

function refreshGameField(elementsArray, domContainer){
    domContainer.innerHTML = '';
    for(i=0; i < elementsArray.length; i++){
    domContainer.append(elementsArray[i]);
    }
}