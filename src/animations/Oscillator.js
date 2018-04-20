import p5 from 'p5';
import 'p5/lib/addons/p5.sound';

export default function oscillator(p) {
  let osc,
    fft;

  p.setup = function () {
    p.createCanvas(720, 256);

    osc = new p5.TriOsc(); // set frequency and type
    osc.amp(0.5);

    fft = new p5.FFT();
    osc.start();
  };

  p.draw = function () {
    p.background(255);

    const waveform = fft.waveform(); // analyze the waveform
    p.beginShape();
    p.strokeWeight(5);
    for (let i = 0; i < waveform.length; i++) {
      const x = p.map(i, 0, waveform.length, 0, p.width);
      const y = p.map(waveform[i], -1, 1, p.height, 0);
      p.vertex(x, y);
    }
    p.endShape();

    // change oscillator frequency based on mouseX
    const freq = p.map(p.mouseX, 0, p.width, 40, 880);
    osc.freq(freq);

    const amp = p.map(p.mouseY, 0, p.height, 1, 0.01);
    osc.amp(amp);
  };
}
