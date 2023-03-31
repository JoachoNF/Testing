import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter} from 'react-router-dom';
//import Counter from './components/Counter';
function App() {
    return (
    <BrowserRouter>
    <Header/>
    <Main/>
    <Footer/>
    </BrowserRouter>
  );
}

/*
Tener cuidado con Finally porque puede ejecutarse antes que el then del mismo fetch
-
El useEffect se ejecuta luego del renderizado y depnde de su ejecución, el cambio de la dependencia de modo:
useEffect(()=>{
  funcion ejecutable;
}[dependencia])
Cada vez que cambie la dependencia se ejecutara el useEffect. { [] solo una vez ; vacio siempre }

*/ 
export default App;
