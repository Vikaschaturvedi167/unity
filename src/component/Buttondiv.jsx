import React, { useState } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { styled } from 'styled-components'
import { useDispatch } from 'react-redux'
import { add_filter } from '../redux/actions'
function Buttondiv() {
        const [activebutton,setactivebutton] = useState('')
        const dispatch = useDispatch()
        function handlefilter(filter_type){
                dispatch(add_filter(filter_type))
                setactivebutton(filter_type)
        }
  return (
    <Main>
         <Button onClick={()=>handlefilter('')} bg={activebutton==''?'#CDCDCD':''} colorScheme='green' backgroundColor='orange' color='black' size='xm' padding='5px' variant='outline'>
                All
        </Button>
        <Button onClick={()=>handlefilter('text/xml')} bg={activebutton=='text/xml'?'#CDCDCD':''} colorScheme='green' color='black' backgroundColor='orange'  size='xm' padding='5px' variant='outline'>
                XHR
        </Button>
        <Button onClick={()=>handlefilter('application/javascript')} bg={activebutton=='application/javascript'?'#CDCDCD':''} colorScheme='green'color='black' backgroundColor='orange'  size='xm' padding='5px' variant='outline'>
                JS
        </Button>
        <Button onClick={()=>handlefilter('text/css')} bg={activebutton=='text/css'?'#CDCDCD':''} colorScheme='green'color='black'  backgroundColor='orange'  size='xm' padding='5px' variant='outline'>
                CSS
        </Button>
    </Main>
  )
}

export default Buttondiv
const Main = styled.div`
display: flex;
gap: 20px;
`