import React,{useState, useCallback, useEffect} from 'react';
import './App.css';
import { csv } from 'd3';
import { message } from './message';


const width = 960;
const height = 500;
const csvUrl =
  'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv';

// const message = data => {
//     let message = '';
//     message = message + Math.round(d3.csvFormat(data).length / 1024) + ' kB\n';
//     message = message + data.length + ' rows\n';
//     message = message + data.columns.length + ' columns';
//     return message;
//   };
  



const App = () => {
  const [data, setData] = useState(null);
  //如果按照下面这个写法，会导致无限循环，因为每次渲染都会重新执行这个函数
  // csv(csvUrl).then(data => {
  //   setData(data);
  // });

  // 因此，我们需要使用useEffect来避免这个问题
  // useEffect的作用是在渲染完成后执行一些操作
  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  return <pre>{data ? message(data) : 'Loading...'}</pre>;

};

//最后总是导出一个组件
export default App;
