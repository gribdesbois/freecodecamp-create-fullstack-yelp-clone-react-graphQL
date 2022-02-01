import React from 'react'
import { render } from 'react-dom'
import {
  ApolloProvider, ApolloClient, HttpLink, InMemoryCache,
} from '@apollo/client'

import App from './App'

const { VITE_API_URI } = import.meta.env

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: VITE_API_URI,
  }),
})

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
