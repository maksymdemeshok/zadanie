import React, { useEffect, useState, useRef } from "react";
import { Container, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { getData } from "../ajax/getData";
import { postData } from "../ajax/postData";


export const AddNew = () => {


  const [products, setProducts] = useState([]);

  const getProdUrl = "https://newdemostock.gopos.pl/ajax/219/products";

  const [categories, setCategories] = useState([]);
  const getCatUrl = "https://newdemostock.gopos.pl/ajax/219/product_categories";
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getData(getProdUrl, setProducts);
    getData(getCatUrl, setCategories);

    products && categories
      ? setIsLoaded(true)
      : console.log("Failed load data");
  }, []);

  const productNameInputRef = useRef<HTMLInputElement>(null);
  const productCategoryInputRef = useRef<HTMLInputElement>(null);
  const productIdInputRef = useRef<HTMLInputElement>(null);
  const categoryNameInputRef = useRef<HTMLInputElement>(null);

  const onAddProductClick = (event: React.MouseEvent) => {
    let prodBodyObj = {
      name: productNameInputRef.current?.value,
      type: "BASIC",
      measure_type: "sztuka",
      category_id: 0,
      tax_id: 1,
      sku: "string",
      recipe_amount: 0,
      components: [
        {
          id: 0,
          product_id: 0,
          product_name: "string",
          product_cost_money: {
            amount: 0,
            currency: "string",
          },
          product_cost_gross_money: {
            amount: 0,
            currency: "string",
          },
          unit_product_cost_money: {
            amount: 0,
            currency: "string",
          },
          unit_product_cost_gross_money: {
            amount: 0,
            currency: "string",
          },
          amount: 0,
          recipe_amount: 0,
          sub_product_type: "BASIC",
          measure_type: "sztuka",
          sub_product: {
            id: 0,
            uid: "string",
            name: "string",
          },
          category_name: productCategoryInputRef.current?.value,
        },
      ],
      item_name: "string",
    };

    let filteredProductsName = products.filter(
      (product: any) => product.name === productNameInputRef.current?.value
    );

    let filteredProductsID = products.filter(
      (product: any) => product.id === Number(productIdInputRef.current?.value)
    );

    if (filteredProductsName.length !== 0) {
      alert("Product name already exists, choose other");
    } else if (filteredProductsID.length !== 0) {
      alert("Product ID already exists, choose other");
    } else {
      postData(
        "https://newdemostock.gopos.pl/ajax/219/products/create",
        prodBodyObj
      );
    }
  };

  const onAddCategoryClick = (event: React.MouseEvent) => {
    let categoryBodyOj = {
      id: 0,
      uid: "string",
      name: categoryNameInputRef.current?.value.toString(),
      updated_at: "2022-02-13T16:11:51.341Z",
      status: "ENABLED",
    };

    let filteredCategoriesNames = categories.filter(
      (category: any) => category.name === categoryNameInputRef.current?.value
    );
    if (filteredCategoriesNames.length !== 0) {
      alert("Category name already exists, choose other");
    } else {
      postData(
        "https://newdemostock.gopos.pl/ajax/219/product_categories",
        categoryBodyOj
      );

    }
  };

  return (
    <>
      {isLoaded && (
        <Container>
          <h1>Add new</h1>
          <div className="d-flex flex-row justify-content-evenly">
            <div className="w-25">
              <h4>Add new product</h4>
              <FormGroup className="mb-4">
                <FormLabel htmlFor="prod_name">Product name</FormLabel>
                <FormControl
                  ref={productNameInputRef}
                  type="text"
                  id="prod_name"
                  placeholder="Name"
                />
              </FormGroup>
              <FormGroup className="mb-4">
                <FormLabel htmlFor="prod_category">Category name</FormLabel>
                <FormControl
                  ref={productCategoryInputRef}
                  type="text"
                  id="prod_category"
                  placeholder="Category"
                />
              </FormGroup>
              <button onClick={onAddProductClick} className="btn btn-primary">
                Add
              </button>
            </div>
            <div className="w-25">
              <h4>Add new category</h4>
              <FormGroup className="mb-4">
                <FormLabel htmlFor="cat_name">Category name</FormLabel>
                <FormControl
                  ref={categoryNameInputRef}
                  type="text"
                  id="cat_name"
                  placeholder="Name"
                />
              </FormGroup>
              <button onClick={onAddCategoryClick} className="btn btn-primary">
                Add category
              </button>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};
