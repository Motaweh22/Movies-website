

     alert("welcome to my website");
   

document.querySelector('.color').addEventListener('click',function change(e) {
    if(e.target.className == "silver"){
      document.querySelector('section').style.background = "silver";
    }
  
    if(e.target.className == "h7f99a5"){
      document.querySelector('section').style.background = "#7f99a5";
    }
  
    if(e.target.className == "h6d7160"){
      document.querySelector('section').style.background = "#6d7160";
    }
  })


 
  