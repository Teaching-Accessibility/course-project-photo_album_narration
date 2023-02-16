function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


function loadFile(event){
    var image = document.getElementById('output');
    image.src=URL.createObjectURL(event.target.files[0]);
}
