import './App.css'
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import TechnologyList from './Components/TechnologyList';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Banner></Banner>
      <TechnologyList></TechnologyList>
      <Footer></Footer>
    </div>
  );
}

export default App;
