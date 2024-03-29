import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import Carousel from 'react-bootstrap/Carousel';

function Itineraries(props) {
  const [itineraries, setItineraries] = useState([]);
  
  const myBooleanValue = sessionStorage.getItem("myBooleanValue");

  const{code}=useParams();
  let navigate = useNavigate();
  
    const checkforlogin = () => {
      if (sessionStorage.getItem("myBooleanValue") ) {
      const customer = JSON.parse(sessionStorage.getItem('customer'));
       console.log(customer);
       sessionStorage.setItem('itineraries', JSON.stringify(itineraries));
        console.log("Dondndnvn");
        navigate('/BookingPage');
      }
      else{
        console.log("bfnbndln");  
        alert("You have not logged in Please Login");
      }


    };


  useEffect(() => {
    fetch("https:/localhost:7261/api/Itinerary_Master/"+code)
      .then(response => response.json())
      .then(data => setItineraries(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
    <ul>
      {itineraries.map(item => (
        <div >
          <h2 align="center" >{item.cat_Name}</h2>
          <table width="100%" margin-right="2%">
          <tr>
          <th colSpan={2}>
          <Carousel >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/Images/tajmahal.jpg"
                  style={{ width: '600px', height: '400px' }}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/Images/tajmahal.jpg"
                  style={{ width: '600px', height: '400px' }}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/Images/tajmahal.jpg"
                  style={{ width: '600px', height: '400px' }}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
            </th>
            </tr>
            <tr>
            <td style={{ width: '70%' }}>
            <br/>
              <br/>
              <br/>
              <h2 style={{color: 'red' }}>Details </h2>
              <p><td>
<div>
  {item.itinerary.itr_Dtl.split("...").map((line, index) => (
    <p align="left" key={index}>{line}</p>
  ))}
</div>
</td></p></td>
          <td style={{ verticalAlign: 'top' }}><div key={item.itinerary.Id} align="center" >
            <br/>
            <br/>
            <br/>
            <table >
              <th style={{ verticalAlign: 'top',color: 'red' }} ><h2>Cost details</h2></th>
              <br/>
              <tr><br/><p>Single Person Cost: {item.single_Person_Cost}</p></tr>
              <tr><p>Extra Person Cost: {item.extra_Person_Cost}</p></tr>
              <tr><p>Child with Bed: {item.child_with_Bed}</p></tr>
              <tr><p>Child without Bed: {item.child_without_Bed}</p></tr>
              <tr style={{color: 'red' }} ><h2>Itinerary validation:</h2></tr>
              <br></br>
              <tr><p>Valid From: {moment(item.valid_From).utc().format('YYYY-MM-DD')}</p></tr>
              <tr><p>Valid To: {moment(item.valid_To).utc().format('YYYY-MM-DD')}</p></tr>
              </table>
          </div>
          </td>
          </tr>
          </table>
          <br/><br/>
          <Button   onClick={checkforlogin}>Book</Button>
        </div>
      ))}
    </ul>
</div>
  );
}

export default Itineraries;