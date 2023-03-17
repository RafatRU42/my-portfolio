import './App.css';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
     <h1>this is navbar</h1>
      <div className='max-w-screen-xl mx-auto'>
        <Banner/>
      </div>
    </div>
  );
}

export default App;
