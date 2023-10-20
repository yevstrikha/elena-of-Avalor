const mainNumbers = document.querySelector('.numbers .container');
let testSum = []
let mySum = []


const fourNumbers = document.querySelector('.task_four');
fourNumbers.addEventListener('click', () => {
    document.querySelector('.numbers').style.display = 'block';
    document.querySelector('.main_blocks').style.display = 'none';
    // mainNumbers.innerHTML = ''
    createTask()
})


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

    const controlBtn = document.createElement('button');
    controlBtn.textContent = 'CHECK';


    controlBtn.addEventListener('click', function checkMath() {
        const resultsOfTests = document.querySelectorAll(' .test input');
        for (let i = 0; i <= 5; i++) {
            mySum.push(parseInt(resultsOfTests[i].value))
            if (mySum[i] === testSum[i]) {
                resultsOfTests[i].classList.add('correct_number');
                console.log(resultsOfTests[i].value)
            } else if (resultsOfTests[i].value === '') {
                resultsOfTests[i].value = 'X'
            } else {
                resultsOfTests[i].classList.add('wrong_number');
            }
        }
        const PopUp = document.querySelector('.pop_up');
        PopUp.style.display = 'block';
        mainNumbers.classList.add('blur')

    })
    mainNumbers.appendChild(controlBtn)
}

createTask()



