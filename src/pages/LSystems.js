import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import LSystems from '../animations/LSystems';

export default function ls() {
  return <P5Wrapper sketch={LSystems} />;
}
