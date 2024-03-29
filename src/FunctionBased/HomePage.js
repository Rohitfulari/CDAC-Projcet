import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavigationBar from "./Navbar";
import "../MyFiles/continer.css";
import Carousel from "react-bootstrap/Carousel";

function HomePage() {
  const [Categary, setCategary] = useState([]);
  const [data, setdata] = useState("");

  let arrayCost1 = 0;
  sessionStorage.setItem("arrayCost1", arrayCost1);


  useEffect(() => {
    fetch("https:/localhost:7261/api/Category_Master")
      .then((res) => res.json())
      .then((result) => {
        setCategary(result);
      });
  }, []);

  //const info=Categary.filter((cat)=>cat.SubCat_Id.includes(data));

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Images/kerla6.jpg"
            style={{ width: "100%", height: "500px" }}
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
            src="/Images/kashmir2.jpg"
            style={{ width: "100%", height: "500px" }}
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
            style={{ width: "100%", height: "500px" }}
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
      <br />
      <hr />

      <h1 color="red" align="center">
        {" "}
        Discover all you want !!!!{" "}
      </h1>

      <hr />
      <br />
      <br />
      <div className={"card-container"}>
        {Categary.map((cat) => (
          <Card style={{ margin: "2%" }} className={"card"}>
            <Card.Img variant="top" src={cat.cat_Image} style={{ width: '100%', height: '180px' }}/>
            <Card.Body>
              <Card.Title>{cat.cat_Name}</Card.Title>
              <Card.Text>
                {/* {cat.cat_Id}
                {cat.flag} */}
              </Card.Text>
              {cat.flag == true ? (
                <Button variant="primary" href={"/Itineraries/"}>
                  View Details
                </Button>
              ) : (
                <Button variant="primary" href={"/Search/" + cat.catMaster_Id}>
                  Explore
                </Button>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
