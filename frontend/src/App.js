import './App.css';
import { useEffect } from 'react';

const fechHellwordAPI = async () =>{
  const response = await fetch("http://localhost:8081/api");
  const data = await response.json();
  console.log(data);
}

function App() {

  useEffect(() =>{
  fechHellwordAPI()
},[])

  return (
    <div className="App">
    </div>
  );
}

export default App;
