import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        'ec93b06977mshe1091efda7cb14ep198badjsn362eb2174a4b'
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/charts/world',
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
