
const values = ['a Developer','a Photographer','a Yogist']
let index = 0

const change = () => {
  document.getElementById('to-change').innerHTML = values[index];
  index = ++index % values.length;
 
  setTimeout(change, 1300);
}

change()





