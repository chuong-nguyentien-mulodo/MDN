var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    /*
    if(mySrc === 'image/Mozilla_Firefox_(2004-2005).png') {
      myImage.setAttribute ('src','image/hp_firefox_dock_inverse.png');
    } else {
      myImage.setAttribute ('src','image/Mozilla_Firefox_(2004-2005).png');
    }
    */
    var x = Math.floor(Math.random() * 4);
    switch (x) {
      case 0:
        myImage.setAttribute ('src','image/Mozilla_Firefox_(2004-2005).png');
        break;
      case 1:
        myImage.setAttribute ('src','image/hp_firefox_dock_inverse.png');
        break;
      case 2:
        myImage.setAttribute ('src','image/firefox_by_abaddon999_faust999-d64dwyt.png');
        break;
      case 3:
        myImage.setAttribute ('src','image/5a4edd18.png');
        break;
      default:
        myImage.setAttribute ('src','image/5a4edd18.png');
        break;
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }  
}
myButton.onclick = function() {
  setUserName();
}
