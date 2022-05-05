import Navbar from '../src/components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './container/Header';
import Footer from './components/Footer';
import Cart from './container/Cart';
import { CartProvider } from "react-use-cart";
import Home from './container/Home'




function App() {
  return (
    <div style={{width:"100%"}} className="App">
      <CartProvider>
      <Navbar/>
      <Header/>
      <Home/>
      <Cart/>
      <Footer/>
      </CartProvider>
     
</div>

  );
}

export default App;
