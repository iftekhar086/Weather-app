import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/AppHeader/Header';
import Footer from './Components/Appfooter/Footer';
import Home from './Pages/Home';

const App = () => {
  return (
<div className='App'>
<Header/>
<main>
<Home/>
</main>
<Footer/>
</div>
  )
}

export default App;
