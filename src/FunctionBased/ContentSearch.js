import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import React from "react";

// export default class ContentSearch extends React.Component

export default function ContentSearch() {

  
  var curr = new Date();
  curr.setDate(curr.getDate() + 1);
  var date = curr.toISOString().substring(0, 10);

  const numberOfDaysToAdd = 10;
  var fromdate = curr.setDate(curr.getDate() + numberOfDaysToAdd);
  const defaultValue = new Date(fromdate).toISOString().split("T")[0];

  const handleSubmit = (e) => {
    var newdata = {
      Fromdate: document.getElementById("Fromdate").value,
      Todate: document.getElementById("Todate").value,
      CostStart: document.getElementById("CostStart").value,
      CostUpto: document.getElementById("CostUpto").value,
      FromPeriod: document.getElementById("FromPeriod").value,
      ToPeriod: document.getElementById("ToPeriod").value,
    };

    let data = JSON.stringify(newdata);

    fetch("https:/localhost:7261/api/Search", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data.results));
    e.preventDefault();
    // navigate('/');
    console.log("DOne");
  };

  return (
    <div
      class="container-xxl col-md-6 mb-0"
      style={{ backgroundColor: "pink" }}
    >
      <Form action="a.js" onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="Date">
            <h6>
              Duration:
              <Form.Label> Start date </Form.Label>
              <Form.Control type="date" id="Fromdate" defaultValue={date} />
              <Form.Label> End date</Form.Label>
              <Form.Control
                type="date"
                id="Todate"
                defaultValue={defaultValue}
              />
              {/* <Button type="submit">Submit</Button> */}
              Cost:
              <Form.Label> from </Form.Label>
              <Form.Control type="number" id="CostStart" defaultValue={0} />
              <Form.Label> to</Form.Label>
              <Form.Control type="number" id="CostUpto" defaultValue={10000} />
              Period:
              <Form.Label> From: </Form.Label>
              <Form.Control type="number" id="FromPeriod" defaultValue={0} />
              <Form.Label> To:</Form.Label>
              <Form.Control type="number" id="ToPeriod" defaultValue={20} />
              <Button type="submit">Submit</Button>
            </h6>
          </Form.Group>
        </Row>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>catMasterIid</th>
            <th>catId</th>
            <th>subcatId</th>
            <th>catName</th>
            <th>catImagePath</th>
            <th>Flag</th>
          </tr>
        </thead>
        {/* <tbody>
        { categary.map(cat => (
          <tr key={cat.catMaster_Id}>
            <td>{cat.catMaster_Id}</td>
            <td>{cat.cat_Id}</td>
            <td>{cat.subCat_Id}</td>
            <td>{cat.cat_Name}</td>
            <td>{cat.cat_Image_Path}</td>
            <td>{cat.flag}</td>
            <td style={{ display: "flex", justifyContent: "space-evenly"}}>
            <Button variant="primary" href={'/displayCategary/'+cat.catMaster_Id}>Display</Button>
            <Button variant="warning" href={'/updateCategary/'+cat.catMaster_Id}>Update</Button>
            <Button variant="danger" href={'/deleteCategary/'+cat.catMaster_Id}>Delete</Button>
            </td>
          </tr>
        ))
        }
      </tbody> */}
      </Table>
      {/* <h6>
        <Form action="a.js">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="Date">
              Cost:
              <Form.Label> from </Form.Label>
              <Form.Control type="number" name="CostStart"  defaultValue={0} />
              <Form.Label> to</Form.Label>
              <Form.Control type="number"  defaultValue={10000}/>
                 Period:
                <Form.Label> From: </Form.Label>
                <Form.Control type="number" name="" defaultValue={0} />
                <Form.Label> To:</Form.Label>
                <Form.Control type="number" defaultValue={20}/>
              <Button type="submit">Submit</Button>
            </Form.Group>
          </Row>
        </Form>
      </h6>

      <h5>
        <Form action="a.js">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="Date">
              <h6>
                Period:
                <Form.Label> From: </Form.Label>
                <Form.Control type="number" name="" defaultValue={0} />
                <Form.Label> To:</Form.Label>
                <Form.Control type="number" defaultValue={20}/>
                <Button type="submit">Submit</Button>
              </h6>
            </Form.Group>
          </Row>
        </Form>
      </h5> */}
    </div>
  );
}
