import React from "react";
import { Products } from "./pages/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Categories } from "./pages/Categories";
import { ProductsEdit } from "./pages/ProductsEdit";
import { CategoryEdit } from "./pages/CategoryEdit";
import { AddNew } from "./pages/AddNew";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/categories" element={<Categories />}></Route>
            <Route path="/edit_products" element={<ProductsEdit />}></Route>
            <Route path="/edit_categories" element={<CategoryEdit />}></Route>
            <Route path="/add_new" element={<AddNew />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
