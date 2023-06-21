let button = document.getElementById('submit');
button.addEventListener("click", function () {
  let text = document.getElementById('inp');
  console.log(text.value);
  const box = document.getElementById("box");
  let color = '#' + text.value;
  box.style.backgroundColor = color;

})

let radios = document.querySelectorAll('input[type="radio"]');
let button1 = document.querySelector('#button1');

button.addEventListener('click', function () {
  for (let radio of radios) {
    if (radio.checked) {
      document.getElementById('box1').style.backgroundColor = document.getElementsByName('color').values;
    }
  }
});