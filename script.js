document.addEventListener("DOMContentLoaded", function() {

  var body = document.querySelector("body");

  if (body.hasChildNodes()) {

    body.innerHTML = "";
  }

  var textNode = document.creatElement("p");
	textNode.textContent = `DOM load success`
	
  body.appendChild(textNode);
});

