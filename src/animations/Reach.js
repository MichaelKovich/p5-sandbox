export default function reach(p) {
  let numSegments = 8,
    x = [],
    y = [],
    angle = [],
    segLength = 26,
    targetX,
    targetY,
    ballX = 50,
    ballY = 50,
    ballXDirection = 1,
    ballYDirection = -1;

  for (let i = 0; i < numSegments; i++) {
    x[i] = 0;
    y[i] = 0;
    angle[i] = 0;
  }

  p.setup = function () {
    p.createCanvas(710, 400);
    p.strokeWeight(20);
    p.stroke(255, 100);
    p.noFill();

    x[x.length - 1] = p.width / 2; // Set base x-coordinate
    y[x.length - 1] = p.height; // Set base y-coordinate
  };

  p.draw = function () {
    p.background(0);

    p.strokeWeight(20);
    ballX += 1.0 * ballXDirection;
    ballY += 0.8 * ballYDirection;
    if (ballX > p.width - 25 || ballX < 25) {
      ballXDirection *= -1;
    }
    if (ballY > p.height - 25 || ballY < 25) {
      ballYDirection *= -1;
    }
    p.ellipse(ballX, ballY, 30, 30);

    p.reachSegment(0, ballX, ballY);
    for (let i = 1; i < numSegments; i++) {
      p.reachSegment(i, targetX, targetY);
    }
    for (let j = x.length - 1; j >= 1; j--) {
      p.positionSegment(j, j - 1);
    }
    for (let k = 0; k < x.length; k++) {
      p.segment(x[k], y[k], angle[k], (k + 1) * 2);
    }
  };

  p.positionSegment = function (a, b) {
    x[b] = x[a] + p.cos(angle[a]) * segLength;
    y[b] = y[a] + p.sin(angle[a]) * segLength;
  };

  p.reachSegment = function (i, xin, yin) {
    const dx = xin - x[i];
    const dy = yin - y[i];
    angle[i] = p.atan2(dy, dx);
    targetX = xin - p.cos(angle[i]) * segLength;
    targetY = yin - p.sin(angle[i]) * segLength;
  };

  p.segment = function (x, y, a, sw) {
    p.strokeWeight(sw);
    p.push();
    p.translate(x, y);
    p.rotate(a);
    p.line(0, 0, segLength, 0);
    p.pop();
  };
}
