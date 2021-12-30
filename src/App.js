import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card"; 
import Leno from "./Assets/Players/Leno.jpg"; 
import Tomi from "./Assets/Players/Tomiyasu.png"; 
import Saka from "./Assets/Players/Saka.jpg"; 





function App() {
  return (
    <div>
      <Navbar />
      <div className="all-cards">
        <Card img={Leno} name="Bernd Leno" position="Goalkeeper" country="Germany" bio="" />
        <Card img={Tomi} name="Tomiyasu" position="Right-Back" country="Japan" bio="" /> 
        <Card img={Saka} name="Bukayo Saka" position="Right-Wing" country="England" bio="" /> 

      </div>
    </div>
  );
}

export default App;
