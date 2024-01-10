var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");

site1El.children[0].textContent = "Site 1";
site1El.children[1].setAttribute("href", "https://google.com");
site1El.children[1].children[0].setAttribute("src", "assets/images/image_1.jpg");
site1El.children[1].children[0].setAttribute("alt", "man working");
site1El.children[1].children[0].setAttribute("style", "padding:10px;");

site2El.children[0].textContent = "Site 2";
site2El.children[1].setAttribute("href", "https://twitter.com");
site2El.children[1].children[0].setAttribute("src", "assets/images/image_2.jpg");
site2El.children[1].children[0].setAttribute("alt", "group brainstorm");
site2El.children[1].children[0].setAttribute("style", "padding:10px;");

site3El.children[0].textContent = "Site 3";
site3El.children[1].setAttribute("href", "https://instagram.com");
site3El.children[1].children[0].setAttribute("src", "assets/images/image_3.jpg");
site3El.children[1].children[0].setAttribute("alt", "women working");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

// Write Your Code Below

// document.querySelectorAll('h4').forEach(function (h4) {
//     h4.style.color = 'blue';
//     h4.style.fontSize = '30px';
//     h4.style.fontWeight = 'bold';
//   });

var h4tags = document.querySelectorAll("h4");
for (var i = 0; i < h4tags.length; i++) {
    h4tags[i].setAttribute("style", "color:blue; font-size: 30px");
   }
  
// var h1Element = document.querySelector('h1');
// h1Element.style.paddingLeft = '100px';
// h1Element.style.margin = '0';

var h1tags = document.querySelector("h1");
h1tags.setAttribute("style", "padding-left: 100px; margin: 0; color: red;");



