const panels = document.querySelectorAll(".panel");

panels.forEach(function (panel) {
  panel.addEventListener("click", function () {
    panel.classList.add("active");
  });
});
