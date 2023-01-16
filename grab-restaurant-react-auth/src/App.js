import { BrowserRouter,Routes,Route} from "react-router-dom"
import Add  from "./pages/Add";
import Update from "./pages/Update";
import Search from "./pages/Search";
import Restaurats from "./pages/Restaurats";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="App">

      <Routes>
      <Route path="/" element={<Restaurats/>}/>
       <Route path="/Add" element={<Add/>}/>
       <Route path="/Update/:restaurantId" element={<Update/>}/>

       <Route path="Search" element={<Search/>}/>
       <Route path="Register" element={<Register/>}/>
      </Routes>
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;
