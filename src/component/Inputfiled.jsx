import React, { useState } from 'react';
import { Input, Box, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { add_data_function } from '../redux/actions';

const default_url = 'https://testunity-backed.onrender.com';

function Inputfiled() {
  const dispatch = useDispatch();
  const [url, setUrl] = useState('');
  const [loading,setloading] = useState(false)

  const handleFetch = () => {
    if (url) {
      setloading(true)
      fetch(`${default_url}/api/fetch?url=${encodeURIComponent(url)}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Assuming response is JSON, adjust if different
        })
        .then(data => {
          // Dispatch action to store response data in Redux
          dispatch(add_data_function(data)); // Modify addDataFunction according to your action structure
          console.log('Successful response:', data);
        })
        .catch(error => {
          console.error('Fetch error:', error);
          // Optionally dispatch an error action or handle error state in Redux
          dispatch(add_data_function({ url:url,status: 500, error: error.message })); // Example: Dispatching an error action
        })
        .finally(()=>{
          setloading(false)
          setUrl('');
        })
    }
    
  };

  return (
    <Box w='70%' display='flex' alignItems='center'>
      <Input
        onChange={(e) => setUrl(e.target.value)}
        placeholder='Enter Url Here Including https://'
        size='sm'
        backgroundColor='rgb(252, 248, 248)' 
        value={url}
      />
      <Button isLoading={loading} onClick={handleFetch} colorScheme='teal' backgroundColor='orange'  color={'black'} size='sm'>
        Fetch
      </Button>
    </Box>
  );
}

export default Inputfiled;
