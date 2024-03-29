import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import HomePage from "./HomePage";

export default function DisplaySelected() {
  const [record, setRecord] = useState({});
  const { url, code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = `https://localhost:7261/api/${url}/${code}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setRecord(data))
      .catch((error) => console.log(error));
  }, [url, code]);

  const renderTableHeader = () => {
    if (record) {
      let header = Object.keys(record);
      return header.map((key, index) => {
        if (record[key]) {
          let columnData = record[key];
  
          // Check if the column has any data
          if (typeof columnData === "string" || typeof columnData === "number") {
            return <th key={index}>{key.toUpperCase()}</th>;
          }
        }
        return "_";
      });
    }
  };
  
  const renderTableData = () => {
    if (record) {
      let columns = Object.keys(record);

      return (
        <tr>
          {columns.map((column, index) => {
            let cellData = record[column];

            // Check if the cell data is a date-time string
            if (typeof cellData === "string" && Date.parse(cellData)) {
              // Create a new Date object from the string
              let dateObj = new Date(cellData);
              // Format the date portion of the object
              cellData = dateObj.toLocaleDateString();
            }

            return <td key={index}>{cellData}</td>;
          })}
        </tr>
      );
    }
  };

  return (
    <div>
      <h3>Selected Record</h3>
      <Table striped hover bordered>
        <thead>
          <tr>{renderTableHeader()}</tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </Table>
      <Button variant="danger" onClick={() => navigate("/")}>
        Back
      </Button>
    </div>
  );
}
