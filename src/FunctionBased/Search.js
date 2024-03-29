import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../MyFiles/table.css';

function Search (props){

const [Categary, setCategary] = useState([]);
const{code}=useParams();

useEffect( () => {
  fetch("https:/localhost:7261/api/Category_Master/"+code).then(res => res.json())
  .then(result => {
    setCategary(result);
  } 
  );
  }, []);

    
  //const info=Categary.filter((cat)=>cat.subcatId.includes(code));

 return(
    <div className={"card-container"}>
      {/* <h3 style={{}}>Categary Table Data</h3> */}
    
        { Categary.map(cat => ( 
            <Card style={{margin:"2%" }} className={"card"}>
            <Card.Img variant="top" src={cat.cat_Image} style={{ width: '100%', height: '180px' }} />
            <Card.Body>
              <Card.Title>{cat.cat_Name}</Card.Title>
              <Card.Text>
              
              </Card.Text>
             
              {(cat.flag == true) ? (<Button variant="primary" href={'/Itineraries/'+cat.catMaster_Id}>View Details</Button>) : (<Button variant="primary" href={"/Search/"+cat.catMaster_Id}>Explore</Button>) }            </Card.Body>
          </Card>
        ))
        }
      
    </div>

    
  );
}

export default Search;