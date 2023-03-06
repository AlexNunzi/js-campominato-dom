const startGameDom = document.querySelector('#startGame');
const gridContainerDom = document.querySelector('#gridContainer');
const difficultSelectorDom = document.querySelector('#difficultSelector');
let boxNumber = 0;

console.log("Il valore di difficoltà selezionato è: " + difficultSelectorDom.value);




startGameDom.addEventListener('click', function(){
    console.log(gridContainerDom.innerHTML);
    gridContainerDom.innerHTML = '';
    console.log(gridContainerDom.innerHTML);

    let boxDimension = '';

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

    for(i=1 ; i <= boxNumber ; i++){
        const box = createNewBoxNumbered(i);
        box.classList.add(boxDimension);
        box.addEventListener('click', function(){
            console.log(box.textContent);
            this.classList.add('selected');
        });
        gridContainerDom.append(box);
    }
});






function createNewBoxNumbered(number){
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.innerHTML = number;
    return newBox;
}

