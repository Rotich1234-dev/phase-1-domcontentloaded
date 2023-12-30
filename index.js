// Your code goes here
// set up
document.addEventListener("DOMContentLoaded", function(){
    console.log("The DOM has loaded");
});


document.addEventListener('DOMContentLoaded', function () {
    // Target the paragraph element with id="text" ie <p id = "text"
    const textOfParagraph = document.getElementById('text');
  
    // Replacing the text content with "This is really cool!"
    if (textOfParagraph) {
        textOfParagraph.textContent = "This is really cool!";
    }
  });
  