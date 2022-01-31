import React from 'react'
import { render } from 'react-dom'
import {
  ApolloProvider, ApolloClient, HttpLink, InMemoryCache,
} from '@apollo/client'
import App from './App'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://yelp-clone-freecodecamp-tuto.herokuapp.com/v1/graphql',
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
