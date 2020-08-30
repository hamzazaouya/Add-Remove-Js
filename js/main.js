var elementOne = document.getElementById('demo1');

var elementTwo = document.getElementById('demo2');

var elementThree = document.getElementById('demo3');

function addContent() {
    
    elementTwo.style.visibility = 'visible';
    
}

function removeContent() {
    
    elementTwo.style.visibility = 'hidden';
    
}

function addStyle() {
    
    elementOne.classList.add('styling');
    
}

function removeStyle() {
    
    elementOne.classList.remove('styling');
    
}

function addAll() {
    
    elementTwo.style.visibility = 'visible';
    elementOne.classList.add('styling');
    
}

function removeAll() {
    
    elementTwo.style.visibility = 'hidden';
    elementOne.classList.remove('styling');
    
}

function photoOne() {
    
    elementThree.src = 'img/1.jpg';
    
}

function photoTwo() {
    
    elementThree.src = 'img/2.jpg';
    
}

function photoThree() {
    
    elementThree.src = 'img/3.jpg';
    
}

function photoFour() {
    
    elementThree.src = 'img/4.jpg';
    
}
