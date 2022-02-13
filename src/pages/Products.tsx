import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getData } from "../ajax/getData";
import { Card, Button } from "react-bootstrap";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const url = "https://newdemostock.gopos.pl/ajax/219/products";

  useEffect(() => {
    getData(url, setProducts);

    products ? setIsLoaded(true) : console.log("Failed load data");
  }, []);

  return (
    <>
      <Container>
        <h1>Products</h1>
        <div className="d-flex flex-wrap justify-content-evenly mt-4">
          {isLoaded &&
            products.map((product:any) => {
              return (
                <Card key={product.id+product.uid} style={{ width: "18rem", margin: "10px" }}>
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      ProductID: {product.id}
                    </Card.Text>
                    <Card.Text>
                      Category: {product.category}
                    </Card.Text>
                    <Button variant="primary">Buy</Button>
                  </Card.Body>
                </Card>
              );
            })}
        </div>
      </Container>
    </>
  );
};
