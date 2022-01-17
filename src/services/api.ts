import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  keepUnusedDataFor: process.env.NODE_ENV !== 'test' ? 60 : 0,
  endpoints: () => {
    return {
      /* empty for code splitting */
    };
  },
});

export default api;
