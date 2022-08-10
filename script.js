const myButton = document.querySelector('#myButton');

myButton.addEventListener('click',myFunc);

function myFunc() {
    // e.preventDefault()

const myInput = document.querySelector('#myInput');
const myUl = document.querySelector('#myUl');
const myLI = document.createElement("li");


myLI.textContent = myInput.value
myUl.appendChild(myLI)


}



