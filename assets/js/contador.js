var currenteNumberWrapper = document.querySelector('#currentNumber')
var currentNumber = 0

function decrement() {
    if (currentNumber > 0) {
        currentNumber--
        currenteNumberWrapper.innerHTML = currentNumber
    } else {
        currenteNumberWrapper.innerHTML = 'X'
    }
}

function increment() {
    if (currentNumber < 15) {
        currentNumber ++
        currenteNumberWrapper.innerHTML = currentNumber
    } else {
        currenteNumberWrapper.innerHTML = 'X'
    }
}