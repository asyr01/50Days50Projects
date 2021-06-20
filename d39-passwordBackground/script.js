const password = document.getElementById('password');
const backgroundEl = document.getElementById('background');
password.addEventListener('input', (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurVal = 20 - length * 2;
  if (blurVal > 0) backgroundEl.style.filter = `blur(${blurVal}px)`;
  console.log(blurVal);
});
