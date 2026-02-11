import StatCard from "./StatCard";
import ProductPage from "./ProductPage";
import OrdersPage from "./OrdersPage";
import Api from "./Api";
import { OrdersData, productsData } from "../data/data";
import OrderStatus from "./OrderStatus";
import UserPage from "./UserPage";


function MainContent ({activePage, products, setProducts}){ 

    const totalProduct = productsData.length;
    const totalOrders = OrdersData.length;

    const revenue = OrdersData.reduce((total , order) => {
    const orderTotal = order.items.reduce((sum , item) => sum + (item.price * item.qty) ,0);
    return total + orderTotal;
    }, 0);

    





    if(activePage === "products") {
        return(
            <main className="main"> 
            <ProductPage products={products} setProducts={setProducts}/>
            </main>
        );
    }

    if(activePage === "orders") {
        return(
            <main className="main"> 
            <OrdersPage />{" "}
            </main>
        );
    }

   

     if(activePage === "appsearch") {
        return(
            <main className="main"> 
            <Api />{" "}
            </main>
        );
    }

   if(activePage === "users") {
  return (
    <main className="main">
      <UserPage />
    </main>
  );
}

   
    return(
        <div className="main-content">
            <h2>Admin Dashbored</h2>
            <div className="card-grid">
                
                
            
                <StatCard title="total products" value={totalProduct}/>
                <StatCard title="total orders" value={totalOrders}/>
                <StatCard title="total Revenue" value={`$${revenue.toFixed(2)}`}/>
                
            </div>

            <OrderStatus orders={OrdersData}/>
        </div>
    )
}

export default MainContent;