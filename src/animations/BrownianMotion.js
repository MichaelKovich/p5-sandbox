export default function brownianMotion(p) {
  const num = 2000;
  const range = 6;

  const ax = [];
  const ay = [];

  p.setup = function () {
    p.createCanvas(710, 400);
    for (let i = 0; i < num; i++) {
      ax[i] = p.width / 2;
      ay[i] = p.height / 2;
    }
    p.frameRate(30);
  };

  p.draw = function () {
    p.background(51);

    // Shift all elements 1 place to the left
    for (let i = 1; i < num; i++) {
      ax[i - 1] = ax[i];
      ay[i - 1] = ay[i];
    }

    // Put a new value at the end of the array
    ax[num - 1] += p.random(-range, range);
    ay[num - 1] += p.random(-range, range);

    // Constrain all points to the screen
    ax[num - 1] = p.constrain(ax[num - 1], 0, p.width);
    ay[num - 1] = p.constrain(ay[num - 1], 0, p.height);

    // Draw a line connecting the points
    for (let j = 1; j < num; j++) {
      const val = j / num * 204.0 + 51;
      p.stroke(val);
      p.line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
    }
  };
}
