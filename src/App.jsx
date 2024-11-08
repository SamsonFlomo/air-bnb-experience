import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Container from 'react-bootstrap/Container';
import NavBar from "./components/navBar.jsx";
import Hero from "./components/hero.jsx";
import Card from "./components/card.jsx";
import data from './components/data';


function App() {
  const cardElements = data.map((item, index) => (
    <Card 
        key={index} 
        {...item}
      />
  ));

  return (
    <Container id="App">
      <NavBar />
      <Hero />
      <div className="card-container">{cardElements}</div> 
    </Container>
  )
}

export default App

