import React from 'react'
import styled from '@emotion/styled'
import { Input, Button } from './Form'

const Container = styled.div`
  display: flex;
  align-items: center;
  > button {
    margin-left: 1rem;
  }
`

const InputForm = ({
  inputVal, onChange, onSubmit, buttonText,
}) => (
  <Container>
    <Input value={inputVal} onChange={onChange} />
    <Button onClick={onSubmit}>{buttonText || 'Search'}</Button>
  </Container>
)

export default InputForm
