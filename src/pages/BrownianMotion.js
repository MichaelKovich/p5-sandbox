import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import BrownianMotion from '../animations/BrownianMotion';

export default function bm() {
  return <P5Wrapper sketch={BrownianMotion} />;
}
