import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import PieChart from '../animations/PieChart';

export default function pc() {
  return <P5Wrapper sketch={PieChart} />;
}
