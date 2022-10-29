let loadText = document.querySelector(".main .loading-text");
let bg = document.querySelector(".main .bg img");

let load = 0;
let int = setInterval(blurrying, 30);

function blurrying() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerHTML = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 1, 100, 30, 0)}px)`
}

let scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
};