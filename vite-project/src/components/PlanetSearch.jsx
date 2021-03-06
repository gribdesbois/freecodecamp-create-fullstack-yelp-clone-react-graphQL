import React, { useState } from 'react'
import { useLazyQuery, gql } from '@apollo/client'
import Search from './Search.jsx'
import Planets from './Planets'

const SEARCH = gql`
  query Search($match: String) {
    planets(order_by: { name: asc }, where: { name: { _ilike: $match } }) {
      name
      cuisine
      id
    }
  }
`;

const PlanetSearch = () => {
  const [inputVal, setInputVal] = useState('')
  const [search, { loading, error, data }] = useLazyQuery(SEARCH)

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      <Search
        inputVal={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        onSearch={() => search({ variables: { match: `%${inputVal}%` } })}
      />
      <Planets newPlanets={data ? data.planets : null} />
    </div>
  )
}

export default PlanetSearch
