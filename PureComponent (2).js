import './App.css';
import React from 'react'
import Counter from './Counter'
class  App extends React.Component {
//pure functions are used in classes..Check If value is same then not rerender
  constructor()
  {
    super();
    this.state={
      count:1
    }
  }
 render()
 {
  return (
    <div className="App">
     <Counter count={this.state.count} />
      <button 
      onClick={()=>{this.setState({count:this.state.count+1})}}
      >Update Count</button>
    </div>
  );
 }
}

export default App;
