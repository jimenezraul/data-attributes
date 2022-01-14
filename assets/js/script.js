var container = document.querySelector(".container");

container.addEventListener("click", function (event) {
  var element = event.target;
  if (element.getAttribute("data-state") === "hidden") {
    element.textContent = element.getAttribute("data-number");
    element.setAttribute("data-state", "visible");
  } else {
    element.textContent = "";
    element.setAttribute("data-state", "hidden");
  }
  console.log(element)
});
