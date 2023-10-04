# portfolio



const values = ['Developer','yoga']
let i = 0;
let j =0

const changeValues = () =>{
  // for(let i=0;i<values[index].length;i++){
    
      
        let var1= document.getElementById('to-change').innerHTML += values[i][(j++)%values[i].length];
  
    setTimeout(changeValues, 800);
      
    
    
     
       
    
    
 
}

changeValues()
