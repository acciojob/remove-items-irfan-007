//your JS code here. If required.
let color = document.getElementById("colorSelect");
let btn = document.querySelector("input");
const arr = [];
btn.addEventListener("click", (e) => {
  for (let i of color) arr.push(i.value);
  let index = arr.indexOf(color.value);
  // console.log(index);
  color.remove(index);
});