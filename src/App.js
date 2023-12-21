import "./App.css";

import cmpyImage from './Assets/download.jpeg';
import logoimg from './Assets/logo.png';
import Sidebarleft from "./Components/SidebarLeft/Sidebarleft";
import Sidebarright from "./Components/SidebarRight/Sidebarright";
import Main from "./Components/MainContent/Main";


function App() {
  return (
    <>
          {/* header */}
    <header className="header">
    <div className="logo">
      <div><img src={logoimg} alt="" /></div>
    </div>
    <div className="head-right-section">
      <div className="img_div"> <img className="logocmpy" src={cmpyImage} alt="" /> XYZ Enterprises Pvt. Ltd</div>
      <div className="arrow_div"><i class="fa-solid fa-chevron-down"></i></div>
    </div>
    </header>

    <div className="body">
      <Sidebarleft/>
      <Main/>
      <Sidebarright/>
    </div>

    </>
  );
}

export default App;
