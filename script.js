function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  var y = document.getElementById("burg");
    if(x.style.display === "block"){
        y.innerHTML = "close";
    } else{
        y.innerHTML = "menu";
    }

  }




    

