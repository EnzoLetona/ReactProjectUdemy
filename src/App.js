import './App.css';
import React, {useState} from 'react';
import Cardinfo2 from './Cardinfo2/Cardinfo2';

function Cardinfo(props) { //component
  return (
    <div className="card">
      <h1 >Hello, {props.name}</h1>
      <p onClick={props.click}> tengo: {props.age} años </p>
    </div>
    );
}


function App() { //app
  const [cardinfoState, setCardinfoState]= useState({
    cardinfo2: [
      { name: "Enzo" , age: 22},
      { name: "jejes" , age: 20},
      { name: "lala" , age: 12},
      { name: "Rob" , age: 44}
    ],
    valor : "otra cosa"
  }); 


  const switchNameHandler1 = (nombre) => {
      console.log("se apreto")
      setCardinfoState({
        cardinfo2: [
          { name: nombre , age: 22},
          { name: nombre , age: 20},
          { name: nombre , age: 12},
          { name: nombre , age: 44}
        ],
        valor : cardinfoState.valor
    });
  };

  const switchAgeNameHnadler1  = () => {
    setCardinfoState({
      cardinfo2: [
        { name: "Enzo" , age: 99},
        { name: "jejes" , age: 99},
        { name: "lala" , age: 99},
        { name: "Rob" , age: 44}
      ],
      valor : cardinfoState.valor
    });

  }

  const liveModifyNameHandler = (event) => {
    setCardinfoState({
      cardinfo2: [
        { name: event.target.value , age: 100},
        { name: cardinfoState.cardinfo2[1].name , age: 99},
        { name: cardinfoState.cardinfo2[2].name , age: 99},
        { name: cardinfoState.cardinfo2[3].name , age: 44}
      ],
      valor : cardinfoState.valor
    });
  }

  console.log(cardinfoState);
  return (
    <div className="App">
        <button onClick={switchAgeNameHnadler1}>Cambiar edad</button>
        <Cardinfo name={cardinfoState.cardinfo2[0].name} age={cardinfoState.cardinfo2[0].age}/>
        <Cardinfo name={cardinfoState.cardinfo2[1].name} age={cardinfoState.cardinfo2[1].age}/>

        <Cardinfo2 
          name={cardinfoState.cardinfo2[2].name} 
          age= {cardinfoState.cardinfo2[2].age} 
          click= {() => switchNameHandler1('Nombre ca')}
          changed = {liveModifyNameHandler}>
          CHILDREN
        </Cardinfo2>

        <Cardinfo name={cardinfoState.cardinfo2[3].name} age={cardinfoState.cardinfo2[3].age} click={switchAgeNameHnadler1}/>
    </div>
  );
}

//class App extends Component {
//  state = {
//    cardinfo2: [        <button onClick={() => switchHandler('PPROBANDO')}>Cambiar Nombre</button>

//      { name: "Enzo" , age: 22},
//      { name: "jejes" , age: 20},       

//      { name: "lala" , age: 12}
//    ]
//  }
//
//  switchHandler = () => {
//    console.log("se apreto")
//    this.setState({
//      cardinfo2: [
//        { name: "EnzoLP" , age: 22},
//        { name: "TATATA" , age: 20},
//        { name: "lala" , age: 12}
//      ]
//    })
//  }
//  render(){
//    return (
//      <div className="App">
//        <button onClick={this.switchHandler}>Cambiar Nombre</button>
//        <Cardinfo name={this.state.cardinfo2[0].name} age={this.state.cardinfo2[0].age}/>
//        <Cardinfo name={this.state.cardinfo2[1].name} age={this.state.cardinfo2[1].age}/>
//        <Cardinfo2 name="lala" age= "12">CHILDREN</Cardinfo2>
//      </div>
//    );
//  }
//}

export default App;



//class App extends Component {
//  render(){
//    return (
//      
//    );
//  }
//}