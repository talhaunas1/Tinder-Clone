import './App.css';
import TinderCards from './component/card/TinderCards.js';
import SwipeButtons from './component/footer/SwipeButtons';
import Header from './component/header/Header.js';


function App() {
  return (
    <div className="App">

    <Header/>


    {/* card */}
    <TinderCards/> 

    {/* swipebutton */}

    <SwipeButtons/>
    </div>
  );
}

export default App;
