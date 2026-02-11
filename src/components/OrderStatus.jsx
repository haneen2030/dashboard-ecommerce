import React from "react";
import {OrdersData}  from "../data/data"

function OrderStatus ({orders}) {

    const total = orders.length;
    const completed =orders.filter((order) => order.status === "completed").length; 
    const pending =orders.filter((order) => order.status === "pending").length; 
    const canceled =orders.filter((order) => order.status === "canceled").length; 

    return(
        <div className="order-status"> 
           <h3>Order Status</h3>

           <div className="status-item">
            <span>Completed</span>
            <span>{completed}</span>
            <div className="progress-bar">
            <div className="progress-fill green" style={{width: `${(completed / total) * 100}%`}}></div>
            </div>
            </div>

            <div className="status-item">
            <span>Pending</span>
            <span>{pending}</span>
            <div className="progress-bar">
            <div className="progress-fill yellow" style={{width: `${(pending / total) * 100}%`}}></div>
            </div>
            </div>

            <div className="status-item">
            <span>Canceled</span>
            <span>{canceled}</span>
            <div className="progress-bar">
            <div className="progress-fill red" style={{width: `${(canceled / total) * 100}%`}}></div>
            </div>
            </div>


        
        
         </div>
    )
}

export default OrderStatus