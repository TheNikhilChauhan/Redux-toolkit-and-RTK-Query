/* import React from "react";
import AllProducts from "./components/AllProducts";
import SpecificProduct from "./components/SpecificProduct"; 
import AddNewProducts from "./components/AddNewProducts"; 
import UpdateProduct from "./components/UpdateProduct"; */
import DeleteProduct from "./components/DeleteProduct";

const App = () => {
  return (
    <div>
      <DeleteProduct productId={2} />
      {/* <AllProducts />
      <SpecificProduct /> 
      <AddNewProducts /> 
      <UpdateProduct productId={4} />*/}
    </div>
  );
};

export default App;
