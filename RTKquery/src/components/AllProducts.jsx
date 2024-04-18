import React from "react";
import { useGetAllProductsQuery } from "../app/service/dummyData";

const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery();

  if (isError) {
    return <h1>Error spotted!</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {data?.products.map((p) => (
        <>
          <h3 key={p.id}>{p.title}</h3>
          <p>{p.description}</p>
        </>
      ))}
    </div>
  );
};

export default AllProducts;
