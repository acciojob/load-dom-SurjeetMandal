document.addEventListener("DOMContentLoaded", function() {
  let para = document.createElement('p');
  para.textContent = `DOM load success`;
  document.body.appendChild(para); // Append the paragraph to the body or another element in the DOM
});
