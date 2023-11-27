const numbers = ['1948', '15000', '14800', '75', '63543','31227' ];
let currentIndex = 0;

function displayNextElement() {
    let outputElement = document.getElementById('output');

    if (currentIndex < elements.length -1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    outputElement.innerHTML = elements[currentIndex];
}