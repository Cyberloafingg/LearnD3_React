import React from 'react';
import './App.css';

import { Face } from './Face';
import { range } from 'd3';


const width = 160;
const height = 160;
const strokeWidth = 10;
const eyeOffsetX = 30;
const eyeOffsetY = 30;
const eyeRadius = 10;
const mouthWidth = 8;
const mouthRadius = 40;


//这种设计模式将FaceContainer和Face组件分离开来，在App中可以使用这些组件
const array = range(6 * 3);

const App = () => array.map(() => (
  <Face
      width = {width}
      height = {height}
      centerX = {width / 2}
      centerY = {height / 2}
      strokeWidth = {strokeWidth}
      eyeOffsetX = {eyeOffsetX}
      eyeOffsetY = {eyeOffsetY}
      eyeRadius = {eyeRadius + Math.random() * 5}
      mouthRadius = {mouthRadius + Math.random() * 5}
      mouthWidth = {mouthWidth + Math.random() * 7}
    />
));

//最后总是导出一个组件
export default App;
