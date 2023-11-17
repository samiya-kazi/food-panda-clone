import './App.css';
import AppNavbar from './components/Navbar';

function App() {

  return (
    <>
    <div>
      <AppNavbar />
    </div>
    <h1 className="text-5xl p-20">
      It's the food you love, 
      delivered.
    </h1>
    <button className='text-xl btn btn-primary'>find food</button>
    </>
  )
}

export default App;
