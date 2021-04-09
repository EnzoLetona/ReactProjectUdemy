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
      { id : "A1", name: "Enzo" , age: 22},
      { id : "A2", name: "jejes" , age: 20},
      { id : "A3", name: "lala" , age: 12},
      { id : "A4", name: "Rob" , age: 44}
    ],
    valor : "otra cosa",
    show : false
  }); 


  const switchNameHandler1 = (nombre) => {
      console.log("se apreto")
      setCardinfoState({
        cardinfo2: [
          { id : "A1", name: nombre , age: 22},
          { id : "A2", name: nombre , age: 20},
          { id : "A3", name: nombre , age: 12},
          { id : "A4", name: nombre , age: 44}
        ],
        valor : cardinfoState.valor,
        show : cardinfoState.show
    });
  };

  const switchAgeNameHnadler1  = () => {
    setCardinfoState({
      cardinfo2: [
        { id : "A1", name: "Enzo" , age: 99},
        { id : "A2", name: "jejes" , age: 99},
        { id : "A3", name: "lala" , age: 99},
        { id : "A4", name: "Rob" , age: 44}
      ],
      valor : cardinfoState.valor,
      show : cardinfoState.show
    });

  }

  
  const showCards = () => {
    const doesShow = cardinfoState.show;
    {console.log(cardinfoState.cardinfo2)}
    setCardinfoState({
      cardinfo2 : cardinfoState.cardinfo2,
      valor : cardinfoState.valor,
      show : !doesShow
    });
    {console.log(cardinfoState.cardinfo2)}
  }

  const removeCard = (cardIndex) => {
    const cards = [...cardinfoState.cardinfo2];
    cards.splice(cardIndex, 1);
    setCardinfoState({
      cardinfo2 : cards,
      valor : cardinfoState.valor,
      show : cardinfoState.show
    })
    
  }

   const liveModifyNameHandler = (event, id ) => {
    const cardIndex = cardinfoState.cardinfo2.findIndex(c => {
      return c.id === id;
    })
    
    const card = {...cardinfoState.cardinfo2[cardIndex]};
    card.name = event.target.value;
    const cards = [... cardinfoState.cardinfo2];

    cards[cardIndex] = card;
    setCardinfoState({
      cardinfo2: cards,
      valor : cardinfoState.valor,
      show : cardinfoState.show
    });
  }


  let vClases = [];

  if(cardinfoState.cardinfo2.length <= 2 ){
    vClases.push('red');
  }
  if(cardinfoState.cardinfo2.length <= 1 ){
    vClases.push('bold');
  }


  let cards = null;

  if(cardinfoState.show) {
    cards = (
      <div>
        <p className={vClases.join(" ")}>Texto clase Dinamica</p> 
          {cardinfoState.cardinfo2.map((card,index) => {
            return (
              <Cardinfo2
                key = {card.id}
                name= {card.name}
                age = {card.age}
                click = {() => removeCard(index)}
                changed = {(event) => liveModifyNameHandler(event, card.id)}
              />
            )
          })}
        <button  onClick={switchAgeNameHnadler1}>Cambiar edad</button>

        </div> 
    );
  }

  return (
    <div className="App">

      <button onClick={showCards}>Mostrar Cards</button>
      {cards}
      
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



//{
//  cardinfoState.show ? 
//  <div>
//    <button onClick={switchAgeNameHnadler1}>Cambiar edad</button>
//    <Cardinfo name={cardinfoState.cardinfo2[0].name} age={cardinfoState.cardinfo2[0].age}/>
//    <Cardinfo name={cardinfoState.cardinfo2[1].name} age={cardinfoState.cardinfo2[1].age}/>
//    <Cardinfo2 
//      name={cardinfoState.cardinfo2[2].name} 
//      age= {cardinfoState.cardinfo2[2].age} 
//      click= {() => switchNameHandler1('Nombre ca')}
//      changed = {liveModifyNameHandler}>
//      CHILDREN
//    </Cardinfo2>
//    <Cardinfo name={cardinfoState.cardinfo2[3].name} age={cardinfoState.cardinfo2[3].age} click={switchAgeNameHnadler1}/>
//  </div> : null
//}



// VERSION PENULTIMA
//let cards = null;
//if(cardinfoState.show) {
//  cards = (
//    <div>
//        <button onClick={switchAgeNameHnadler1}>Cambiar edad</button>
//        <Cardinfo name={cardinfoState.cardinfo2[0].name} age={cardinfoState.cardinfo2[0].age}/>
//        <Cardinfo name={cardinfoState.cardinfo2[1].name} age={cardinfoState.cardinfo2[1].age}/>
//        <Cardinfo2 
//          name={cardinfoState.cardinfo2[2].name} 
//          age= {cardinfoState.cardinfo2[2].age} 
//          click= {() => switchNameHandler1('Nombre ca')}
//          changed = {liveModifyNameHandler}>
//          CHILDREN
//        </Cardinfo2>
//        <Cardinfo name={cardinfoState.cardinfo2[3].name} age={cardinfoState.cardinfo2[3].age} click={switchAgeNameHnadler1}/>
//      </div> 
//  );
//}