import Header from "./components/Header.js"
import Cards from "./components/Cards.js"
import Divider from '@mui/material/Divider';
import Footer from "./components/Footer.js"
import "./App.css"




const App = () => {
  return (
    <div className="body">
      <Header />
      <div className="contenedor-tarjetas">
      <Cards />
      </div>
      <Divider />
      <Footer />

    </div>
  );
};

export default App;
