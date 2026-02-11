import { OrdersData,productsData } from "../data/data";
import { useState } from "react";
import OrderModal from "./OrderModal";


function OrdersPage() {

    const [selectedOrder, setSelectedOrder] = useState(null);


  const [orders, setOrders] = useState(OrdersData);

  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const calculatedTotal = (items) => {
    return items.reduce((sum , item) => sum + (item.price * item.qty) ,0)
  }

  const getProductName =(productId) => {
    const product = productsData.find((p) => p.id === productId);
    return product ? product.name : "unknown";
  };

  return (
    <div>
      <div className="page-header">
        <h2>Orders Page</h2>
        
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Total</th>
            <th>Date</th>
            <th>Status</th>
            <th>Invoice</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <div>
                    <strong>{item.customerName}</strong>
                    <br />
                    <small style={{color :"#666"}}>{item.email}</small>
                </div>
              </td>
              <td>{item.items.length}Items</td>
              <td>${calculatedTotal(item.items).toFixed(2)}</td>


              <td>{item.date}</td>
              <td>
                <span className={
                    item.status === "completed" ? "badge active":
                    item.status === "pending" ? "badge pending":
                     "badge inactive"
                     }>
                    {item.status}


                </span>
              </td>

              <td>
                <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
                    <i
                    className="orderX"
                    style={{cursor: "pointer", color: "#666"}}
                    ></i>
                    <span
  className="btn-view"
  onClick={() => setSelectedOrder(item)}
>
  View
</span>

    



                </div>
              </td>  
                    
             
            </tr>
          ))}
        </tbody>
      </table>
     {selectedOrder && (
  <OrderModal
    order={selectedOrder}
    closeModal={() => setSelectedOrder(null)}
  />
)}



    </div>
    
  );
  
}


export default OrdersPage;
