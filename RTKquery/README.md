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
<ul>
<li>Endpoints are specific API routes or operations that you define within the createApi function. These endpoints represent the different ways your application can interact with the backend server to retrieve or manipulate data.</li>

<li>The builder object exposes methods to define endpoints and customize their behavior. </li>
<li>Within the endpoints callback function, you interact with the builder object to define your API endpoints. The builder object provides methods like query and mutation to define query and mutation functions for fetching and modifying data, respectively.</li>
<li>Query Function: Defines how data is fetched from the endpoint. It's responsible for making the HTTP request to the specified URL and returning the response data.</li>
<li>Mutation Function (Optional): If the endpoint is responsible for modifying data on the server (e.g., creating, updating, or deleting resources), you can define a mutation function instead of or in addition to a query function. Mutation functions typically make HTTP requests that result in data changes on the server and return the updated data or confirmation of the operation.</li>
<li>Transform Response Function (Optional): Allows you to transform the raw response data received from the server before it's stored in the cache. Useful for normalizing data, filtering out unnecessary information, or formatting the data in a more convenient structure.</li>
<li>Provides Tags (Optional): Specifies an array of tags that describe the data provided by the endpoint. These tags are used for cache invalidation and data refetching. When the data associated with these tags changes, any queries that depend on these tags will be automatically refetched.</li>
<li>Invalidates Tags (Optional): Specifies an array of tags that describe the data dependencies of the endpoint. When data with these tags is updated in the cache, it triggers a refetch of the endpoint's data. Useful for keeping related data up-to-date in response to changes elsewhere in the application.</li>
</ul>
