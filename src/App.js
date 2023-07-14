import React from 'react';
import './App.css';
import { BackgroundCircle } from './BackgroundCircle';
import { Eyes } from './Eyes';
import { Mouth } from './Mouth';



const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 40;
const mouthWidth = 20;
const mouthRadius = 140;



//这是一个react组件，我们可以在里面写任何的js代码，并且在下面使用
// const BackgroundCircle = (props) => (
//   <circle
//     r={props.radius}
//     fill="yellow"
//     stroke="black"
//     strokeWidth={props.strokeWidth}
//   />
// );

// react fragment
// 怎么用react fragment：及就是用一个空标签包裹起来
// 由于这里的Eyes组件是一个函数，所以我们可以直接在里面写js代码，并且返回只能有一个根元素，所以我们用一个空标签包裹起来
// const Eyes = ({eyeOffsetX, eyeOffsetY, eyeRadius}) => (
//   <>
//   <circle
//     cx={-eyeOffsetX}
//     cy={-eyeOffsetY}
//     r={eyeRadius}
//   />
//   <circle
//     cx={eyeOffsetX}
//     cy={-eyeOffsetY}
//     r={eyeRadius}
//   />
//   </>
// );

// const Mouth = ({mouthRadius, mouthWidth}) => {
//   const mouthArc = arc()
//     .innerRadius(mouthRadius)
//     .outerRadius(mouthRadius + mouthWidth)
//     .startAngle(Math.PI / 2)
//     .endAngle(Math.PI * 3 / 2);
//   return <path d = {mouthArc()}/>
// };

const App = () => (
  <svg width={width} height={height}>
    <g transform={`translate(${centerX},${centerY})`}>
      <BackgroundCircle 
        radius = {centerY - strokeWidth / 2} 
        strokeWidth = {strokeWidth}
      />
      <Eyes
        eyeOffsetX = {eyeOffsetX}
        eyeOffsetY = {eyeOffsetY}
        eyeRadius = {eyeRadius}
      />
      <Mouth
        mouthRadius = {mouthRadius}
        mouthWidth = {mouthWidth}
      />
    </g>
  </svg>
);
//最后总是导出一个组件
export default App;
