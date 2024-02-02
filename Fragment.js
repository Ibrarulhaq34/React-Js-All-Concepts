import './App.css';
import React from 'react'
import Cols from './Cols'
function App() {
  return (
//Three Ways to group multiple children elements without adding an extra node to the DOM
//Only one tag
//<React.Fragment></React.Fragment>
//<></>
    <>
      <h1>React Fragment</h1>
     <table>
       <tbody>
         <tr>
          <Cols />
          <Cols />
          <Cols />
          <Cols />
          <Cols />
          <Cols />
          <Cols />
          <Cols />
          <Cols />
          <Cols />

         </tr>
       </tbody>
     </table>
      </>
      
  );
}

function Cols() {
    return (
        <>
            <td>Azher</td>
            <td>Ali</td>
        </>
    )
}

export default App;
