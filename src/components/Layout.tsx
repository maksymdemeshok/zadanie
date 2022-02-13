import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

export const Layout: React.FC = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link className="text-white p-2 m-3"  to="/products">Products</Link>
            <Link className="text-white p-2 m-3" to="/categories">Categories</Link>
            <Link className="text-white p-2 m-3" to="/edit_products">Edit products</Link>
            <Link className="text-white p-2 m-3" to="/edit_categories">Edit categories</Link>
            <Link className="text-white p-2 m-3" to="/add_new">Add new</Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
