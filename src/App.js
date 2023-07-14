import React,{useState, useCallback} from 'react';
import './App.css';


const width = 960;
const height = 500;
const circleRadius = 50;

//当代码运行时，首先鼠标的位置是在屏幕的中心
const initialMousePosition = {x : width/2, y : height/2};



const App = () => {
  //mousePosition是一个状态，它的初始值是initialMousePosition
  //setMousePosition是一个函数，它可以改变mousePosition的值，这个函数是由useState返回的，并且它是一个hook
  //在每次鼠标移动时，handleMouseMove函数会被调用，它会改变mousePosition的值，从而改变circle的位置
  //但是这种形式不是最佳的，因为这个函数会在每次渲染时都注册一次，这样会导致每次渲染都会有一个新的函数被创建
  // const [mousePosition, setMousePosition] = useState(initialMousePosition);
  // const handleMouseMove = event => {
  //   const { clientX, clientY } = event;
  //   setMousePosition({x: clientX, y: clientY});
  // };
  //但是这种形式不是最佳的，因为这个函数会在每次渲染时都注册一次，这样会导致每次渲染都会有一个新的函数被创建
  //因此我们需要使用useCallback来避免这种情况
  //useCallback接受两个参数，第一个参数是一个函数，第二个参数是一个数组，这个数组中的值发生变化时，useCallback才会返回一个新的函数
  const [mousePosition, setMousePosition] = useState(initialMousePosition);
  const handleMouseMove = useCallback(event => {
    const { clientX, clientY } = event;
    setMousePosition({x: clientX, y: clientY});
  },[setMousePosition]);
  return (
  <svg width={width} height={height} onMouseMove={handleMouseMove} >
    <circle 
      cx = {mousePosition.x}
      cy = {mousePosition.y}
      r = {circleRadius}
    />
  </svg>
)};

//最后总是导出一个组件
export default App;
