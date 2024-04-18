# RTK Query

<h3>createApi</h3>
<p>The createApi function is used to define your API endpoints and configurations. It takes an object with endpoint definitions as its argument.</p>
<ul>
    <li>reducerPath: Specifies the name of the slice in the Redux store where the API data will be stored.</li>
    <li>baseQuery: Defines the base fetch function to use for making HTTP requests. It can be configured with options such as baseUrl for setting a base URL for all requests.</li>
    <li>endpoints: Defines the API endpoints and their configurations using a callback function.</li>
</ul>

```js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    //get all products
    getAllProducts: builder.query({
      query: () => "/products",
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
```

<h3>Endpoints and builder object</h3>
<p>Endpoints are specific API routes or operations that you define within the createApi function. These endpoints represent the different ways your application can interact with the backend server to retrieve or manipulate data.</p>

<p>The builder object exposes methods to define endpoints and customize their behavior. </p>
<p>Within the endpoints callback function, you interact with the builder object to define your API endpoints. The builder object provides methods like query and mutation to define query and mutation functions for fetching and modifying data, respectively.</p>
