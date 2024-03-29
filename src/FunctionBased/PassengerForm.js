import React, { useState } from 'react';
import '../MyFiles/table.css';

function PassengerForm(props) {
  const itineraries = JSON.parse(sessionStorage.getItem("itineraries"));
  const [pax_Name, setpax_Name] = useState('');
  const [pax_Birthdate, setpax_Birthdate] = useState('');
  const [px_Type, setpx_Type] = useState('singlePersonCost');
  const[amount, setAmount] = useState();
  const [pax_id, setPax_id] = useState(0);
  const[booking_Id, setBooking_Id] = useState(1);
  

  console.log("itinieririres : ",itineraries);

  const handleSubmit = (event) => {

    event.preventDefault();
    const passengerData = {
      pax_id,
      pax_Name,
      pax_Birthdate,
      px_Type,
      amount,
      booking_Id 
    };
    // console.log(passengerData);
   // setPassengerDataArray([...passengerDataArray, passengerData]);
    props.updatePass(passengerData);
    // console.log("passengerdata");
    // console.log(passengerData);
    setpax_Name('');
    setpax_Birthdate('');
    setpx_Type('singlePersonCost');
  };

  return (
    <div  style={{
                background: "#ddd",
                color: "grey",
                display: "flex",
                flexDirection: "row",
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
    <form onSubmit={handleSubmit}>
      <label>
        pax_Name:
        <input type="text" value={pax_Name} onChange={(event) => setpax_Name(event.target.value)} />
      </label>
      <br/>
      <br/>
      <label>
        pax_Birthdate:
        <input type="date" value={pax_Birthdate} onChange={(event) => setpax_Birthdate(event.target.value)} />
      </label>
      <br/>
      <br/>
      <div>
        <label>Passenger Type</label>
        <br/><br/>
        <label>
          <input type="radio" pax_Name="px_Type" value="singlePersonCost" checked={px_Type === 'singlePersonCost'} onChange={() => {setpx_Type('singlePersonCost'); setAmount(itineraries[0].single_Person_Cost)}} />
          Single person cost : {itineraries[0].single_Person_Cost}
        </label>
      </div>
      <div>
        <label>
          <input type="radio" pax_Name="px_Type" value="extraPersonCost" checked={px_Type === 'extraPersonCost'} onChange={() =>{ setpx_Type('extraPersonCost'); setAmount(itineraries[0].extra_Person_Cost)}} />
          Extra person cost : {itineraries[0].extra_Person_Cost}
        </label>
      </div>
      <div>
        <label>
          <input type="radio" pax_Name="px_Type" value="childWithBed" checked={px_Type === 'childWithBed'} onChange={() => {setpx_Type('childWithBed'); setAmount(itineraries[0].child_with_Bed)}} />
          Child with bed  : {itineraries[0].child_with_Bed}
        </label>
      </div>
      <div>
        <label>
          <input type="radio" pax_Name="px_Type" value="childWithoutBed" checked={px_Type === 'childWithoutBed'} onChange={() => {setpx_Type('childWithoutBed'); setAmount(itineraries[0].child_without_Bed)}} />
          Child without bed : {itineraries[0].child_without_Bed}
        </label>
      </div>
      <button type="submit">Add Another Passenger</button>
     
      
    </form>
    </div>
  );
}

export default PassengerForm;
