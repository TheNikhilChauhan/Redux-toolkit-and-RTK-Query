import { useGetProductsByIdQuery } from "../app/service/dummyData";

const SpecificProduct = () => {
  const { data, isError, isLoading } = useGetProductsByIdQuery(2);

  if (isError) {
    return <h1>OOps we got an Error!</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h3>{data?.brand}</h3>
      <h3>{data?.category}</h3>
    </div>
  );
};

export default SpecificProduct;
