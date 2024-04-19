document.addEventListener("DOMContentLoaded", function() {

  var body = document.querySelector("body");


  if (body.hasChildNodes()) {
    body.innerHTML = "";
  }

  var  DomLoad= document.createTextNode("DOM load success");
  body.appendChild(DomLoad);
});

