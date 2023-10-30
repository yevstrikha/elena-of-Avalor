const mainNumbers = document.querySelector('.numbers .container');
let testSum = [];
let mySum = [];


function mathWindow(){
    let numberItem = document.querySelector('.numbers');
    numberItem.style.display = 'block';
    numberItem.classList.add('active_now')
    document.querySelector('.main_blocks').style.display = 'none';
    mainNumbers.innerHTML = '';

    testSum = []
    mySum = []
    createTask()
}

const fourNumbers = document.querySelector('.task_four');
fourNumbers.addEventListener('click', mathWindow);


function createTask() {
    for (let i = 0; i <= 5; i++) {
        let randomNumber = `${Math.floor(Math.random() * 5)} + ${Math.floor(Math.random() * 5)} `
        let everyDiv = document.createElement('div')
        let elem = document.createElement('div');
        let myInput = document.createElement("input");
        let someNumbers = randomNumber.split('+');
        let testRes = parseInt(someNumbers[0]) + parseInt(someNumbers[1]);
        testSum.push(testRes);

        myInput.classList.add('sumRes')
        elem.innerHTML = `${randomNumber} = `;
        elem.setAttribute('class', 'additions')
        everyDiv.setAttribute('class', 'test')

        everyDiv.appendChild(elem);
        everyDiv.appendChild(myInput);
        mainNumbers.appendChild(everyDiv);

    }




    controlBtn.addEventListener('click', function checkMath() {
        const resultsOfTests = document.querySelectorAll(' .test input');
        for (let i = 0; i <= 5; i++) {
            mySum.push(parseInt(resultsOfTests[i].value))
            if (mySum[i] === testSum[i]) {
                resultsOfTests[i].classList.add('correct_number');
            } else if (resultsOfTests[i].value === '') {
                resultsOfTests[i].value = 'X';
            } else if(mySum[i] !== testSum[i]){
                resultsOfTests[i].classList.add('wrong_number');
            }

        }

    });
    moreBtn.addEventListener('click', ()=>{
        const PopUp = document.querySelector('.pop_up');
        PopUp.style.display = 'block';
        mainNumbers.classList.add('blur');
    })

}

const mathButtonsContainer = document.createElement('div')
mathButtonsContainer.classList.add('math_Buttons')
const controlBtn = document.createElement('button');
controlBtn.textContent = 'CHECK';

const moreBtn = document.createElement('button');
moreBtn.textContent = 'More';


mathButtonsContainer.appendChild(controlBtn);
mathButtonsContainer.appendChild(moreBtn);
document.querySelector('.numbers').appendChild(mathButtonsContainer)
