import './App.css'
import Trabalho from './components/Trabalho';

const App = () => {
  //Vinicius Barros
  let num1 = 12;
  let num2 = 12;
  
  return(
   <>
    {/* FORMULÁRIO DE LOGIN */}
    {/* <PrimeiroComponente /> */}
    {/* EXERCÍCIO */}
    {/*  <SegundoComponente />  */}
    {/* TRABALHO */}
    <div className="App">
      <Trabalho num1={num1} num2={num2} />
    </div>
   </>
  );
}

export default App;