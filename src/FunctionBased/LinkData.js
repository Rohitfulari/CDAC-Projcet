import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import Carousel from 'react-bootstrap/Carousel';

 export function LinkData() {
  const [link, setLink] = useState(null);
  const [data, setData] = useState([]);
  const links = [
    { name: 'Booking Header Table', url: 'Booking_Header_Table'},
    { name: 'Category Master', url: 'Category_MasterAdmin' },
    { name: 'Cost Master', url: 'Cost_Master' },
    { name: 'Date Master', url: 'Date_Master' },
    { name: 'Itinerary Master', url: 'Itinerary_MasterAdmin' },
    { name: 'Passenger Table', url: 'Passenger_Table' },
    { name: 'Login', url: 'Login'},
    { name: 'Search', url: 'Search'},
  ];
  useEffect(() => {
    if (link) {
      fetchData(link.url);
    }
  },[link]);
  

  const handleClick = (link) => {
    setLink(link);
    
  };
  const fetchData = async (url) => {
    const response = await fetch('https://localhost:7261/api/'+url);
    const result = await response.json();
    setData(result);
  };;

  const renderTableHeader = () => {
    if (data.length > 0) {
      let header = Object.keys(data[0]);
      return header.map((key, index) => {
        if (data.some(item => item[key]))
        {return <th key={index}>{key.toUpperCase()}</th>};
        return " ";
      });
    }
  };

  const renderTableData = () => {
    if (data.length > 0) {
      return data.map((item, index) => {
        let columns = Object.keys(item);
        
        return (
          <tr key={index}>
            {columns.map((column, index) => {
              let cellData = item[column];
              // Check if the cell data is a date-time string
              if (typeof cellData === 'string' && Date.parse(cellData)) {
                // Create a new Date object from the string
                let dateObj = new Date(cellData);
                // Format the date portion of the object
                cellData = dateObj.toLocaleDateString();
              }
              
              return <td key={index}>{cellData}</td>
            })}
            <td style={{ display: "flex", justifyContent: "space-evenly"}}>
             <Button variant="primary" href={'/updateSelected/'+link.url+"/"+(item[Object.keys(item)[0]])}>Update</Button>
            <Button variant="primary" href={'/deleteSelected/'+link.url+"/"+(item[Object.keys(item)[0]])}>Delete</Button>
            <Button variant="primary" href={'/displaySelected/'+link.url+"/"+(item[Object.keys(item)[0]])}>Display</Button>
            
            </td>
            
          </tr>
        )
      });
    }
   
  };
  return (
    <div>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <button onClick={() => handleClick(link)}>{link.name}</button>
          </li>
        ))}
      </ul>
      
        <br/>
        <br/>
        <Table responsive>
                <tbody>
                  <tr>
                  {renderTableHeader()}
                  <th>Actions</th>
                  </tr>
                  {renderTableData()}
                  
                </tbody>
            </Table>
      
    </div>
  );
}

export default LinkData;