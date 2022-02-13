import React, { useEffect, useState } from "react";
import { getData } from "../ajax/getData";
import { Table, Container } from "react-bootstrap";
import { CategoryEditItem } from "../components/CategoryEditItem";

export const CategoryEdit = () => {
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
        <h1>Edit Categories</h1>

        <Table striped bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Change name</th>
            </tr>
          </thead>
          <tbody>
            {isLoaded &&
              categories.map((category: any) => {
                return (
                 <CategoryEditItem
                    key={category.uid}
                    id={category.id}
                    name={category.name}
                    uid={category.uid}
                  />
                );
              })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
