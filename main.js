
let inputs = document.getElementsByClassName('formulario-input');
for (let i = 0; i < inputs.length; i++) {
  
  inputs[i].addEventListener('keyup', function () {
    
    if (this.value.length >=1) {
      this.nextElementSibling.classList.add('fijar')
    } else {
      this.nextElementsSibling.classList.remove('fijar')
    }
  })
}

//disable button
let form = document.querySelector("#form")
let btn = document.querySelector("#btn")

function disableButton() {
  let desabilitar = false;
  
  if(form.email.value  === "") {
    desabilitar = true;
    
  }
  if(form.password.value  === "") {
    desabilitar = true;

  }
  
  if(desabilitar === true) {
    btn.disabled = true;
    this.classList.remove('form-btn')
  } else{
    btn.disabled = false;
    this.classList.add('form-btn')
    
    
   }
  
}

form.addEventListener('keyup', disableButton) 

 //password visibility
let state = false; 
function toggle () {
  if(state) {
    document.getElementById("password").setAttribute("type", "password");
    document.getElementById('show').style.color = '#7a797e'
    state = false;
    
  }
  else {
    document.getElementById("password").setAttribute("type", "text");
    document.getElementById('show').style.color = '#33b18e'
    state = true;

  }
}

