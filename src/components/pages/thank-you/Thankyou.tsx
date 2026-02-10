"use client";

import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";



const ThankYou = () => {
  const [savedData, setSavedData] = useState<string | null>(null);
 const[price,setPrice]=useState<string | null>(null);
  useEffect(() => {
    const orderId = localStorage.getItem("orderId");
    const price = localStorage.getItem("price");
    setSavedData(orderId? orderId : null);
    setPrice(price? price : null);
  }, []);


  // const searchParams = useSearchParams();
  // const orderId = new URLSearchParams(searchParams.toString()).get("id") ;
  //const orderId = localStorage.getItem("orderId");
  // const router = useRouter();
 const intialOptions = { clientId: "AYd7dDgMjsLuRugJiaQO-owAzOF-6aoGHIO3G12S0HlAqu9onApbC0soFCF444C18gjzn6w-L5h5aHik", currency: "USD"   };  
 //eslint-disable-next-line @typescript-eslint/no-explicit-any
 const createOrder = (data: unknown, actions: any) => {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: price || "0",
                },
                invoice_id: savedData || "0",
            }]
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onApprove=(data: unknown, actions: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return actions.order.capture().then(function(details: any) {
            alert('Transaction completed by ' + details.payer.name.given_name);

        });
    };
 const onError = (err: unknown) => {
        console.error("PayPal error:", err);
    };
  return (
    <div style={styles.container}>
      <div style={styles.abc}>
        <h1 style={styles.title}>🎉 Thank You!</h1>
        <h3 style={styles.message}>
          Your order has been successfully created.
        </h3>
        {savedData && (
          <h3 style={styles.orderInfo}>
            <strong>Order ID:</strong> {savedData} <br />
            <strong>Price :</strong> {price} $
          </h3>
        )}
         <br/>       <PayPalScriptProvider options={intialOptions}>
      <PayPalButtons style={{ layout: "vertical" }} createOrder={createOrder}
       onApprove={onApprove}
        onError={onError} />
    </PayPalScriptProvider>
        {/* <button style={styles.button} onClick={() => router.push("/")}>
          Back to Home
        </button> */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#eff1f4ff",
  },
  title: {
    color: "#16a34a",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1.1rem",
    marginBottom: "1rem",
  },
  orderInfo: {
    marginBottom: "1.5rem",
    color: "#374151",
  },
  button: {
    backgroundColor: "#16a34a",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1rem",
  }, abc: {
    backgroundColor: "#f7f2f2ff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(236, 233, 233, 1)",
    textAlign: "center",
    maxWidth: "400px",
  }  as React.CSSProperties,

};

export default ThankYou;