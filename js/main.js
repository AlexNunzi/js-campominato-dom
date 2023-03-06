const startGameDom = document.querySelector('#startGame');
const gridContainerDom = document.querySelector('#gridContainer');
const difficultSelectorDom = document.querySelector('#difficultSelector');

console.log("Il valore di difficoltà selezionato è: " + difficultSelectorDom.value);




startGameDom.addEventListener('click', function(){
    console.log(gridContainerDom.innerHTML);
    gridContainerDom.innerHTML = '';
    console.log(gridContainerDom.innerHTML);

    let boxDimension = '';
    let boxNumber = 0;

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

