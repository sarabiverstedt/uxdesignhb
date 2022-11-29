import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopSection from "./Components/TopSection/TopSection"
import BottomSection from "./Components/BottomSection/BottomSection"
import Menu from './Components/Menu/Menu';
import { Link, Route, Routes } from 'react-router-dom';
import Homepage from "./Components/Homepage/Homepage"
import Tips from "./Components/Tips/Tips"
import QandA from "./Components/QandA/QandA"

function App() {

 


  return (
    <div className="App">

      <Link to="/fragor"><button className='roundButtons'>Frågor</button></Link>
      <Link to="/tips"><button className='roundButtons' >tips</button></Link>
      <Link to="/"><button className='roundButtons' >Homepage</button></Link>
      
      



          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/tips" element={ <Tips/> }/>
            <Route path="/fragor" element= {<QandA/>}/>
            <Route path="/smaltande-glaciarer" element=""/>
            <Route path="/stigande-havsnivaer" element=""/>
            <Route path="/co2-utslapp" element=""/>
            <Route path="/global-uppvarming" element=""/>

          </Routes>

          




        <Menu/>
      <TopSection/>
      <BottomSection/>

      


    </div>
  );
}

export default App;
