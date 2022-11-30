import "./City.css";
import Plane from "../../Images/Plane.png";
import Moon from "../../Images/Moon.png";
import Clouds from "../../Images/Clouds.png";
import Skyline from "../../Images/Skyline.png";
import Ferriswheel from "../../Images/Ferriswheel.png";
import Tivoli from "../../Images/Tivoli.png";
import Reflection from "../../Images/Reflection.png";

const City = () => {
    return ( 

        <>
        <div className="citySection">

<div className="container">
        <p className="largeText">Ser vi till historien har klimatet alltid förändrats.</p>
        
        </div>       
<div id="stars"></div>
<div id="stars2"></div>
<div id="stars3"></div>
  
        <div className="container story">

        <p className="largeText">Vår jord har varit både varmare och kallare beroende på det varierande avståndet till solen, våra kontinenters rörelser och den kemiska sammansättningen i atmosfären.</p>
        <p className="largeText">Tidigare klimatförändringar har ofta tagit många tusen år, men nu ökar medeltemperaturen och klimatförändringarna snabbt.</p>
          <p className="largeText">Till skillnad från tidigare klimatförändringar beror den vi ser idag på människan. </p>
          <img className="plane" src={Plane}/>
        </div>
  
        <img className="clouds" src={Clouds}/>
        <img className="moon" src={Moon}/>
        <img className="clouds" src={Clouds}/>
        <img className="clouds" src={Clouds}/>
        <div className="cityWrapper">

        <img className="skyline" src={Skyline}/>
        <img className="ferriswheel" src={Ferriswheel}/>
        <img className="tivoli" src={Tivoli}/>
        </div>
        </div>

        <div className="waterSection">
        <img className="reflection" src={Reflection}/>
        </div>

        </>
     );
}
 
export default City;