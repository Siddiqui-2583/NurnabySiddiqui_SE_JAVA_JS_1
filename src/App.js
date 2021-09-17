import './App.css';
import Header from './components/Header/Header'
import React, { useState } from "react";
import DataTable from './components/DataTable/DataTable'
import Dashboard from './components/Dashboard/Dashboard'
import AddProduct from './components/AddProduct/AddProduct'
import EditProduct from './components/EditProduct/EditProduct'
import About from './components/About/About'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  let data = [
    {
      title: "GIGABYTE GA-F2A68HM-DS2",
      price: "6000",
      salePrice: "4500",
      description: "Ultra Durable 4 Plus AMD FM2 Socket Motherboard",
      category: "Motherboard",
    },
    {
      title: "MSI A320M",
      price: "7000",
      salePrice: "5500",
      description: "A Pro Max AMD Motherboard",
      category: "Motherboard",
    },
    {
      title: "Silicon Power 4GB",
      price: "3000",
      salePrice: "2500",
      description: "DDR4 2400 Bus RAM",
      category: "Ram",
    },
    {
      title: "Adata 4GB",
      price: "3000",
      salePrice: "2500",
      description: "DDR4 2400 Bus RAM",
      category: "Ram",
    },
    {
      title: "Gigabyte GT 710",
      price: "7000",
      salePrice: "6500",
      description: "DDR4 2400 Bus RAM",
      category: "Graphics card",
    },
    {
      title: "Zotac GeForce GT 710",
      price: "7000",
      salePrice: "6500",
      description: "DDR4 2400 Bus RAM",
      category: "Graphics card",
    },
  ];
  const [products, setProducts] = useState(data);
  const [clickedProduct, setClickedProduct] = useState();
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/add-new-product">
            <AddProduct products={products} setProducts={setProducts} />
          </Route>
          <Route path="/edit-product">
            <EditProduct
              products={products}
              setProducts={setProducts}
              clickedProduct={clickedProduct}
            />
          </Route>
          <Route path="/all-products">
            <DataTable
              products={products}
              setProducts={setProducts}
              setClickedProduct={setClickedProduct}
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
