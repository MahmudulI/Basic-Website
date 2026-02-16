import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card/Card";
import FormDesign from "./Components/Form-Design/FormDesign";
import OurDesign from "./Components/OurDesign/OurDesign";
import Joblist from "./Components/JobList/Joblist";
import FullProject from "./Components/FullProject/FullProject";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Card></Card> */}
      {/* <FormDesign></FormDesign> */}
      {/* <OurDesign></OurDesign> */}
      {/* <Joblist></Joblist> */}
      <FullProject></FullProject>
    </div>
  );
}

export default App;
