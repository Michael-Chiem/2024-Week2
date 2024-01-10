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
// Select all the <h4> elements and set the desired styles
document.querySelectorAll('.sites h4').forEach(h4 => Object.assign(h4.style, { color: 'blue', fontSize: '30px', fontWeight: 'bold' }));

// Select the <h1> element and set padding and margin
Object.assign(document.querySelector('h1').style, { paddingLeft: '10px', margin: '0' });
