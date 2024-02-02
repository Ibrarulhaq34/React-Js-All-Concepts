import logo from './logo.svg';
import './App.css';
function App() {
  let data="Azher";
  function apple()
  {
//Does not change the data val bcz local variable.. So, we use states and hooks for this purpose
  data="Ali";
    alert(data);
  }
  return (
    <div className="App">
     <h1>{data}</h1>
     <button onClick={apple}>Click Me</button>
    </div>
  );
}

export default App;
