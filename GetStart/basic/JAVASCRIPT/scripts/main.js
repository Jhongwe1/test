const myHeading1 = document.querySelector('h1');
myHeading1.textContent = 'Hello world!';

document.querySelector('h4').onclick = function() {
    alert('Ouch! Stop poking me!');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'imgs/img.jpg') {
      myImage.setAttribute('src','imgs/img2.jpg');
    } else {
      myImage.setAttribute('src','imgs/img.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name.');
 //   localStorage.setItem('name', myName);
    myHeading.textContent = 'coding is fun , ' + myName;
    if(!myName) {
        setUserName();
      }
  }
/*  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'coding is fun , ' + storedName;
  }
  */
  myButton.onclick = function() {
    setUserName();
  }
  setUserName();
  