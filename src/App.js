import Header from "../src/Header";
import Home from "../src/Home";
import About from "../src/About";
import Skills from "../src/Skills";
import Project1 from "../src/Project1"
import Contact from "../src/Contact";
// import PageNot from "./components/PageNot"
import { BrowserRouter, Route, Routes, Link, Navigate} from "react-router-dom";

function App() {
  return (
    <div>

{/* Just for media query checking */}
{/* <Contact/> */}




      <BrowserRouter>
        <Header />  
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/skills" element={<Skills />}></Route>
            <Route exact path="/project1" element={<Project1/>}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/*" element={<Navigate to="/"/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  
  );
}



export default App;
