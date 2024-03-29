import React from 'react';
import { Button } from 'react-bootstrap';

export default function Invoice() {
  const bookingData = JSON.parse(sessionStorage.getItem('bookingData'));
  console.log(bookingData.booking.booking_Date);

  const callok = () =>
  {
    alert("Payment Done ,, Tour Booked");
  }


  return (
    <div  style={{
      background: "#ddd",
      color: "grey",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      padding: "1rem",
      borderRadius: "4px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      marginTop: "6vh",
  //    marginLeft: "auto",
   //   marginRight: "auto",
      marginBottom : "6vh"
    }}>
      <h1>Invoice</h1>
      <h2>Booking Data</h2>
       <p>Booking ID: {bookingData.booking.booking_id}</p> 
     <p>Booking Date: {bookingData.booking.booking_Date}</p>
      <p>Tour Amount: {bookingData.booking.tour_Amount}</p>
      <p>Taxes: {bookingData.booking.taxes}</p>
      <p>Total Amount: {bookingData.booking.total_Amount}</p>
      <h3>Passengers</h3>
       <ul>
        {bookingData.passenger.map((passenger, index) => (
          <li key={index}>
            <p>Passenger {index + 1}</p>
            <ul>
              <li>Name: {passenger.pax_Name}</li>
              <li>Age: {passenger.pax_Birthdate}</li>
            </ul>
          </li>
        ))}
      </ul> 
      <Button onClick={callok}>Proceed TO Pay</Button>
      <a href="/HomePage" target="_self">Back TO Home Page</a>

    </div>
  );
}
