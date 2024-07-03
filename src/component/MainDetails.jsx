import React from 'react'
import Leftside from './Leftside'
import RightSide from './RightSide'
import { styled } from 'styled-components'

function MainDetails() {
  return (
    <Main>
        <Leftside/>
        {/* <RightSide/> */}
    </Main>
  )
}

export default MainDetails

const Main = styled.div`
    display: flex;


`