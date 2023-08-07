import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.footer`
  background-color: #222222;
  color: white;
  text-align: center;
  padding: 20px;
`;

export default function Footer() {
  return (
    <StyledDiv>
    <h1>Villa Amella | EHotel Room Book</h1>
    <p>© 2023  - All Rights Copyright Reserved To Andrei Alionte</p>
    </StyledDiv>
  )
}

