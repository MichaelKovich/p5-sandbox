import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Oscillator from '../animations/Oscillator';

export default function os() {
  return <P5Wrapper sketch={Oscillator} />;
}
