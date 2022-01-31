import React from 'react'
import { useQuery, gql } from '@apollo/client'

const PLANETS = gql`
{
  planets {
    id
    name
    cuisine
  }
}
`

function Planets() {
  const { loading, error, data } = useQuery(PLANETS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : (</p>

  return data.planets.map(({ id, name, cuisine }) => <div key={id}>
    <p>
      {name} | {cuisine}
    </p>
  </div>)
}

export default Planets
