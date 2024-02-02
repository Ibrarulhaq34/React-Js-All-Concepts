import logo from './logo.svg';
import './App.css';
import Student from './Student'
import React from 'react'
class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      name:"Ali"
    }
  }
  render()
  {
    return (
      <div className="App">
       <h1>Props !</h1>
       <Student name={this.state.name} email="ali@test.com"></Student>
       <button onClick={()=>this.setState({name:"ali"})} >Update Name</button>
      </div>
    );
  }
}

export default App;
