import logo from './logo.svg';
import './App.css';
import Anu from './components/Anu';
import Helo1 from './components/Helo1';
import { useState } from 'react';

function App() {
  const [counter,setcount]=useState(0);
  
  //var Count=0;
  // //calling an api
  // async function fn(){
  //   const pr=await fetch("http://fakestoreapi.com/products/1");
  //   const response=await pr.json();
  //   //console.log(response);
  //   setcount(response);
  // }
  // fn()
// const incr=()=>{
//     setcount(count+1);
// };
// const decr=()=>{
//   setcount(count-1);
// };
const increment=()=>{
  setcount(counter+1);
}
  const arr=[3,2,50,6,1]
  const obj={
    key1:'value',
    key2:'value1'
  }
  return (
    
    <div className="App">
     
      <header className="App-header">
      {/* <Anu value={arr}/>
     <Anu value="100" value1={arr} value3={obj} response={count}/>
     <Anu value='10'/>
     <Helo1 color="green" /> */}
     {/* <button onClick={incr}>INCrement</button>
      <button onClick={decr}>DECrement</button>
      count={count}  */}
      
       <button style={counter%2===0?{backgroundColor:'green'}:{backgroundColor:'red'}}onClick={increment}>INCrement</button>
     
       {counter}
      </header>
    </div>
  );
}

export default App;
