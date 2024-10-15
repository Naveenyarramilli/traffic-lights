
import './App.css';

function App() {

const redButton = () =>{
 
   document.getElementById('myred').style.backgroundColor = "red";
    document.getElementById('myyellow').style.backgroundColor = "black";
     document.getElementById('mygreen').style.backgroundColor = "black";
}

const yellowButton = () =>{
 
  document.getElementById('myred').style.backgroundColor = "black";
   document.getElementById('myyellow').style.backgroundColor = "yellow";
    document.getElementById('mygreen').style.backgroundColor = "black";
}

const greenButton = () =>{
 
  document.getElementById('myred').style.backgroundColor = "black";
   document.getElementById('myyellow').style.backgroundColor = "black";
    document.getElementById('mygreen').style.backgroundColor = "green";
}



  return (
    <div className="container">
      <h1 style={{'color':'white'}}>Traffic lights</h1>
      <div className='section'>
        <div className='section-1'>
          <button onClick={redButton}>Red</button>
          <button onClick={yellowButton}>Yellow</button>
          <button onClick={greenButton}>Green</button>
        </div>
        <div className='section-2'>
          <p id="myred"></p>
          <p id="myyellow"></p>
          <p id="mygreen"></p>

        </div>
      </div>
      
    </div>
  );
}

export default App;
