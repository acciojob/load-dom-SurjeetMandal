document.addEventListener("DOMContentLoaded", function() {
  
  if (document.body.hasChildNodes()) {
    
    var para = document.createElement("p");
    para.textContent = "DOM load success";
    document.body.appendChild(para);
  } else {
    console.error("Body is not empty");
  }
});

