import DashBoredLayouts from "./layouts/DashboardLayout";
import { useState } from "react";
import { BrowserRouter, Router, Route, Navigate, Routes } from "react-router-dom";
import Login from "./pages/Login";




function App() {
  const [IsLoggedIn , setIsLoggedIn]  = useState("false")

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />

        <Route element={<Login setIsLoggedIn={setIsLoggedIn} />} path="/Login"></Route>
        <Route path="/dashbored" element={ IsLoggedIn ? <DashBoredLayouts setIsLoggedIn={setIsLoggedIn}/> : <Navigate to="/Login"/> }   >
        </Route>
        
        



      </Routes>

      

    </BrowserRouter >

  );
}

export default App;