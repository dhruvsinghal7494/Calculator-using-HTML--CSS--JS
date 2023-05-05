let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.value == '='){
      string = Function(string);
      document.querySelector('input').value = string;
    }
      // else if(e.target.value == 'C'){
      //  string = "";
      // }
    else{
       console.log(e.target);
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    }
   
    
    
  })
})