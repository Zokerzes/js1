let button = document.getElementById('submit');
button.addEventListener("click", function () {
  let text = document.getElementById('inp');
  console.log(text.value);
  const box = document.getElementById("box");
  let color = '#' + text.value;
  box.style.backgroundColor = color;

})
let radios = document.querySelectorAll('input[type="radio"]');
const button1 = document.getElementById('submit1');
button1.addEventListener('click', function (e) {
  e.preventDefault();
  for (let radio of radios) {
    if (radio.checked) {
      console.log(radio.value);
      document.querySelector('#box1').style.backgroundColor = radio.value;
    }
  }
})
const button3 = document.getElementById('submit3');
button3.addEventListener('click', function (e) {
  e.preventDefault();
  let text = prompt("input text in format: 112233");
  console.log(text);
  document.querySelector('#box3').style.backgroundColor = "#" + text;
})






