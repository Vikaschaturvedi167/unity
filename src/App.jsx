import { useEffect, useState } from 'react';

import Inputfiled from './component/Inputfiled';
import { styled } from 'styled-components';
import Buttondiv from './component/Buttondiv';
import MainDetails from './component/MainDetails';



function App() {
 

  

  return (
    <MainDiv>
      <Inputfiled/>
      <Buttondiv/>
      <MainDetails/>
    </MainDiv>
  );
}

export default App;


const MainDiv = styled.div`
  width: 90%;
  margin: 10px auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
`
