import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./main/Home/Home";
import NotFound from "./main/Home/NotFound";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
