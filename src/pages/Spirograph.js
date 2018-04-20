import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Spirograph from '../animations/Spirograph';

export default function sg() {
  return <P5Wrapper sketch={Spirograph} />;
}
