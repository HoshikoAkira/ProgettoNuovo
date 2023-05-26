import logo from './logo.svg';
import './App.css';
import {Routes,Route,BrowserRouter} from "react-router-dom";


import Home from "./template/Home.js"; 
import SignIn from "./template/SignIn.js";
import SignUp from "./template/SignUp.js";

import TabPanel from "./Tabs/tabs"


function App() {
  return (
<>

<BrowserRouter>
<Routes>

  <Route exact path="/" element={<Home/>}/>
   <Route exact path="/sign-in" element={<SignIn/>}/>
    <Route exact path="/sign-up" element={<SignUp/>}/>

    <Route exact path="/sondaggi" element={<TabPanel/>} />


 </Routes>
</BrowserRouter>
    
    </>
  );
}

export default App;
