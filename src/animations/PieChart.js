export default function pieChart(p) {
  const angles = [30, 10, 45, 35, 60, 38, 75, 67];

  p.setup = function () {
    p.createCanvas(720, 400);
    p.noStroke();
    p.noLoop(); // Run once and stop
  };

  p.draw = function () {
    p.background(100);
    p.pieChart(300, angles);
  };

  p.pieChart = function (diameter, data) {
    let lastAngle = 0;
    for (let i = 0; i < data.length; i++) {
      const gray = p.map(i, 0, data.length, 0, 255);
      p.fill(gray);
      p.arc(
        p.width / 2,
        p.height / 2,
        diameter,
        diameter,
        lastAngle,
        lastAngle + p.radians(angles[i]),
      );
      lastAngle += p.radians(angles[i]);
    }
  };
}
