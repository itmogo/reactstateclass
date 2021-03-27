import logo from './logo.svg';
import './App.css';
import {Component,  useState} from 'react';
import { render } from '@testing-library/react';

 class App extends Component {
   constructor(){
   super();
   this.state= {age:90};
 }

 handleClickup =()=>{ 
   let newAge = this.state.age + 1;
   this.setState({age:newAge})
 } 

 handleClickdown =()=>{ 
  let newAge = this.state.age - 1;
  this.setState({age:newAge})

}
 render(){
   return(
   <div>
     <h1>Age is {this.state.age}</h1>
          <button onClick={this.handleClickup}>Click Up!!!</button>
          <button onClick={this.handleClickdown}>Click Down!!!</button>
   </div>
   )
 };
  
 }

export default App;
