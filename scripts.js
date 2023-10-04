
const values = ['a Developer','a Photographer','a Yogist']
let index = 0

const change = () => {
  document.getElementById('to-change').innerHTML = values[index];
  index = ++index % values.length;
 
  setTimeout(change, 1300);
}

change()

// function myFunction(x){
//  let var1 = document.getElementById('mydiv').style.display = 'block';
//  x.classList.toggle("change" );


// }

function myFunction(x) {
  var element = document.getElementById("mydiv");
  element.classList.toggle("header-style");
  x.classList.toggle("change");
}

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}









