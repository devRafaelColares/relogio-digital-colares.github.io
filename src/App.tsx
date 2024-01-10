import './App.css'; 
import Icone from './components/Icone';
import Relogio from './components/Relogio';

function App() {
  return (
    <>
      <div className="opcoes">
        <div id="icones">
          <div className="icone">
            <Icone classe="fa-bell" />
          </div>
          <div className="icone">
            <Icone classe="fa-clock" />
          </div>
          <div className="icone">
            <Icone classe="fa-stopwatch" />
          </div>
          <div className="icone">
            <Icone classe="fa-hourglass" />
          </div>
          <div className="icone">
            <Icone classe="fa-cogs" />
          </div>
        </div>
      </div>
      <Relogio />
    </>
  );
}

export default App;
