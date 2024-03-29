import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../MyFiles/table.css';
import {
    FormGroup,
  FormControl,
  Input,
  InputLabel,
    Typography,
  styled,
    Button,
  } from "@mui/material";
import PassengerForm from "./PassengerForm";
import { Navigate } from "react-router-dom";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
export default function BookingPage() {
  const customer = JSON.parse(sessionStorage.getItem("customer"));
  console.log(customer.cust_Id);
  const navigate = useNavigate();
  const itineraries = JSON.parse(sessionStorage.getItem("itineraries"));
  const [ arr , setArr] = useState({});
  const [arrayOfPass, setArrayOfPass] = useState([]);

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  

  

  const getUpdatedPass = (arr) => {
    setArrayOfPass(prevArray => [...prevArray, arr]);
  }

  console.log(itineraries[0].itinerary.catMaster_Id);
  console.log("Array of Pass of Booking page" , arrayOfPass);

  const onPost = () => {

    const bookiee = {
      booking_id : 0,
      booking_Date  : getCurrentDate(),
      no_of_Passenger : arrayOfPass.length,
      tour_Amount : 0,
      taxes : 0,
      total_Amount : 0,
      catMaster_Id : itineraries[0].itinerary.catMaster_Id ,
      cust_Id : customer.cust_Id,
      departure_id : itineraries[0].date.departure_id
    }

    const BookingData  = {
      booking : bookiee,
      passenger : arrayOfPass
    }
    console.log("BookingData");
    console.log(BookingData);

    setArr(bookiee);
    setArr(arrayOfPass);
    sessionStorage.setItem("bookingData", JSON.stringify(BookingData));
    fetch("https:/localhost:7261/api/Booking", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(BookingData),
    })
      .then((res) => res.json()).
      then((res)=> console.log(res)).then((res)=> sessionStorage.setItem("ReturnData", JSON.stringify(res)))
      .then(console.log("DOne na bosssssssss"));
      navigate('/Invoice');

    
  }



  return (
    <Container>
      <Typography variant="h4" >Book Your Tour  {itineraries[0].cat_Name}</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input name="Cust_Name" defaultValue={customer.cust_Name} />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input name="Email" defaultValue={customer.email} />
      </FormControl>
      <FormControl>
        <InputLabel>Password</InputLabel>
        <Input name="Password" defaultValue={customer.password} />
      </FormControl>
      <FormControl>
        <InputLabel>Country_Code</InputLabel>
        <Input name="Country_Code" defaultValue={customer.country_Code} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone_Number</InputLabel>
        <Input name="Phone_Number" defaultValue={customer.phone_Number} />
      </FormControl>
      <FormControl>
        <InputLabel>Address</InputLabel>
        <Input name="Address" defaultValue={customer.address} />
      </FormControl>
      <FormControl>
        <InputLabel>Proof_Id</InputLabel>
        <Input name="Proof_Id" defaultValue={customer.proof_Id} />
      </FormControl>
      <FormControl>
        <InputLabel>Gender</InputLabel>
        <Input name="Gender" defaultValue={customer.gender} />
      </FormControl>
      <FormControl>
        <InputLabel>Age</InputLabel>
        <Input name="Age" defaultValue={customer.age} />
      </FormControl>

      <Button  href="PassengerForm">Add Passenger</Button>
      <PassengerForm  updatePass={getUpdatedPass} />
      <FormControl>
        <Button variant="contained" onClick={onPost}>Done</Button>
      </FormControl>
      <br />
      <br />
      <table
        class="container-xxl col-md-6 mb-2 bordered-table "
        id="results-table"
      ></table>
    </Container>
  );
}