import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import { useNavigate } from "react-router-dom";
import { productsData } from "../data/data";



function DashBoredLayouts ({setIsLoggedIn}) {
    
    const [showSideBar , setShowSideBar] = useState(true);
    const [activePage , setActivePage] = useState("dashboard");
    const navigate = useNavigate();

    const [prodcuts, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : productsData;});
     
    useEffect(() =>{
        localStorage.setItem("products" ,  JSON.stringify(prodcuts));
    }, [prodcuts]);

    const toggleSideBar = () => {
        setShowSideBar(!showSideBar)
    }

    

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
         navigate("/Login");
    };




    return(
        <div className ="layout">
            {showSideBar && (

            <Sidebar activePage={activePage} onPageChange={setActivePage} onLogout={handleLogout}/>
        )}
        <div className="main-area">
        <Header onToggleSideBar = {toggleSideBar} />
        <MainContent activePage = {activePage} prodcuts={prodcuts} setProducts={setProducts} />
        </div>
        </div>
    )
}


export default DashBoredLayouts;