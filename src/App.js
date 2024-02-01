import './App.css';
import Mensaje from './Mensaje';


const Descripcion = () => {
  return <p>Esta es la app del curso de FullStackOpen</p>
}
function App() {


  return (
    <div className="App">
      <Mensaje color="red" message="Estamos trabajando" />
      <Mensaje color="blue" message="En un curso" />
      <Mensaje color="green" message="De React" />
      <Descripcion />
    </div>
  );
}

export default App;

