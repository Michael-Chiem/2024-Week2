// Access elements using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');

// Apply white color to the "Welcome to World News" header
headerDiv.firstElementChild.style.color = 'white';

// Change font size of the art-title to 50px
articlesDiv.firstElementChild.lastElementChild.style.fontSize = '50px';


// headerDiv.firstElementChild selects the first child element of headerDiv, which is the <h1> element.
// articlesDiv.firstElementChild.lastElementChild selects the last child element of the first child of articlesDiv, which is the <h3> element with the class art-title.