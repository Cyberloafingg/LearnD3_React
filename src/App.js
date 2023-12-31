import React,{useState, useCallback, useEffect} from 'react';
import './App.css';
import { csv , arc, pie} from 'd3';


const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const csvUrl = 'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv';

const pieArc = arc()
  .innerRadius(0)
  .outerRadius(width);


const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);


  if(!data){
    return <pre>Loading...</pre>
  }

  //为什么pie()的参数是1？
  // 因为这里的数据是一维的，所以只需要一个参数就可以了
  const colorPie = pie().value(1);
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        {/* {data.map( (d,i) => (
          <path 
            fill={d['RGB hex value']} 
            d={pieArc({
              startAngle: i / data.length * 2 * Math.PI,
              endAngle: 2 * Math.PI
            })}/>
        ))} */}
        {colorPie(data).map( (d) => (
          <path 
            fill={d.data['RGB hex value']} 
            d={pieArc(d)}
            stroke='blue'
          />
        ))}
      </g>
    </svg>
  );
};

//最后总是导出一个组件
export default App;
