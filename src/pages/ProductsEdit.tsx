import React, { useState, useEffect } from "react";
import { getData } from "../ajax/getData";
import { Table } from "react-bootstrap";
import { ProductsEditItem } from "../components/ProductsEditItem";

export const ProductsEdit = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const urlProd = "https://newdemostock.gopos.pl/ajax/219/products";
  const urlCat = "https://newdemostock.gopos.pl/ajax/219/product_categories";
  useEffect(() => {
    getData(urlProd, setProducts);
    getData(urlCat, setCategories)
    products ? setIsLoaded(true) : console.log("Failed load data");
  }, []);

  return (
    <>
    <h1>Edit products</h1>
      {isLoaded && (
        <Table striped bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category name</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
          {products.map((product:any) => 
          {
            return <ProductsEditItem 
            key={product.uid+product.id}
            id={product.id}
            name={product.name}
            uid={product.uid}
            categoryName={product.category}
            type={product.type}
            measure_type={product.measure_type}
            category_id={product.category_id}
            category_uid={product.category_uid}
            categories={categories}
            />
          }
          )}
          </tbody>
        </Table>
      )}
    </>
  );
};
