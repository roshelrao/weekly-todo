import './App.css';
import { Card } from "./components/Card"
import {useEffect} from "react"

function App() {

  useEffect(() => {
    console.log("Started")
  },[])

  return (
    <div className="App">
      <h1 style={{textAlign: 'left'}}>Weekly ToDo List</h1>
      <div className='todo-cards'>
      <Card day="Monday" color="#9ADCFF"/>
      <Card day="Tuesday" color="#FFB2A6"/>
      <Card day="Wednesday" color="#FFF89A"/>
      <Card day="Thursday" color="#B983FF"/>
      <Card day="Friday" color="#FFC898"/>
      <Card day="Saturday" color="#BCCC9A"/>
      <Card day="Sunday" color="#316B83"/>
      </div>
    </div>
  );
}

export default App;
