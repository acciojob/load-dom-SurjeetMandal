document.addEventListener("DOMContentLoaded", function() {

  var body = document.querySelector("body");

  if (body.hasChildNodes()) {
    body.innerHTML = "";
  }

  var para = document.creatElement("p");
	para.textContent = `DOM load success`
	
  body.appendChild(para);
});

