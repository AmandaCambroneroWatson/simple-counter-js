let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");

increaseBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
  changeFontColor();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
  changeFontColor();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
  changeFontColor();
});


function changeFontColor() {
  if (count > 0) {
    countDisplay.style.color = 'green';
  } else if (count < 0) {
    countDisplay.style.color = 'red';
  } else {
    countDisplay.style.color = 'black';
  }
}

