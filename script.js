const progress = document.querySelector(".progress");

const percent1 = Math.round((38 * 75) / 100);

for (let index = 0; index < 38; index++) {
  const className = index < percent1 ? "line" : "";
  progress.innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
}
