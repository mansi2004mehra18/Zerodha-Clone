import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios, { all } from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("https://z3-uv3w.onrender.com/allOrders").then((res) => {
      console.log(res.data);
      setAllOrders(res.data);
    });
  }, []); //[] this is used so that it runs only one time.

  return (
    
    <div className="orders">
     
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Oty.</th>     
            <th>LTP</th>
            <th>Cur. val</th>
           </tr>
       


            {allOrders.map((stock, index) => {
              const curValue = stock.price * stock.qty;
             

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
              
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                
                </tr>
              );
            })}
         
        </table>
      </div>



      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>

  );
};

export default Orders;
