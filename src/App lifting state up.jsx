import { useState, Component } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  
  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  const decrementCounter = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <Count counter={counter} />
      <PlusButton setCounter={setCounter} incrementCounter = {incrementCounter}/>
      <MinusButton setCounter={setCounter} decrementCounter = {decrementCounter} />
    </>
  );
}

function PlusButton({setCounter, incrementCounter}) {
  return (
  <button 
  onClick= {incrementCounter}
    >
      +
      </button>
  )
}

function MinusButton({setCounter ,decrementCounter}) {
  return(
    <button 
    onClick= {decrementCounter}
      >
        -
        </button>
    )
}

function Count({ counter }) {
  return <div>counter : {counter}</div>;
}

// class App extends Component{
//   state = { counter: 0 }

//   incrementCounter = () => {
//     this.setState({counter: this.state.counter + 1})
//   }

//   decrementCounter = () => {
//     this.setState({counter: this.state.counter - 1})
//   }

//   render(){
//     return <>
//     <Count counter = {this.state.counter}/>
//     <PlusButton incrementCounter={this.incrementCounter}/>
//     <MinusButton decrementCounter ={this.decrementCounter}/>
//     </>
//   }
// }

// class PlusButton extends Component{
//   render(){
//     return(<button onClick={this.props.incrementCounter}>+</button>)
//   }
// }

// class MinusButton extends Component{
//   render(){
//     return(<button onClick={this.props.decrementCounter}>-</button>)
//   }
// }

// class Count extends Component {
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return <div>counter: {this.props.counter}</div>
//   }
// }

export default App;
