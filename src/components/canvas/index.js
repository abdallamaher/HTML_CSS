function fillCircle(context, x, y, radius, color) {
  context.beginPath();
//   console.log(x, y, radius);
  context.arc(x, y, radius, 0, 2 * Math.PI, false);
  context.fillStyle = color;
  context.fill();
}

function main() {
  const canvas = document.getElementById("game");
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");


  const radius = 70;
  const speed = 250;

  let start;
  let x = width/2;
  let y = height/2;
  let dir_x = speed;
  let dir_y = speed;

  function step(timestamp) {
    if (start === undefined) {
      start = timestamp;
    }
    const delta_time = (timestamp - start) * 0.001;
    start = timestamp;

    if (x + radius >= width || x - radius <= 0) dir_x = -dir_x;
    if (y + radius >= height || y - radius <= 0) dir_y = -dir_y;

    x += dir_x * delta_time;
    y += dir_y * delta_time;

    context.clearRect(0, 0, width, height);
    fillCircle(context, x, y, radius, "red");

    window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}

main();
