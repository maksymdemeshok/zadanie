import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { getData } from "../ajax/getData";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const url = "https://newdemostock.gopos.pl/ajax/219/product_categories";

  useEffect(() => {
    getData(url, setCategories);
    categories ? setIsLoaded(true) : console.log("Failed load data");
  }, []);

  return (
    <>
      <Container>
        <h1>Categories</h1>

        <Table striped bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {isLoaded &&
              categories.map((category: any) => {
               return (
                <tr key={category.uid}>
                <td >{category.id}</td>
                <td>{category.name}</td>
              </tr>
               )
              })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
