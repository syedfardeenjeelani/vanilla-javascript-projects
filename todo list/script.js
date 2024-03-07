const addBtn = document.querySelector(".addBtn");
const clear = document.querySelector(".clear");
let input = document.getElementById("myInput");
const list1 = document.getElementById("li1");

addBtn.addEventListener("click", function () {
  list1.innerHTML += "<br>" + input.value;
});

clear.addEventListener("click", function () {
  list1.innerHTML = "";
});
