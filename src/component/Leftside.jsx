import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import styled from 'styled-components'; // Import styled from styled-components

function Leftside() {
  const data = useSelector((store) => store.reducer);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsOpen(false);
  };

  return (
    <Main>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Status</Th>
              <Th>Type</Th>
              <Th>Size</Th>
              <Th>Time</Th>
              <Th>Fullfield</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.data.map((item, index) => (
              <StyledTr key={index} onClick={() => handleOpenModal(item)}>
                <Td>{item.url}</Td>
                <Td>{item.status}</Td>
                <Td>{item.responseHeaders ? item.responseHeaders['content-type'] : 'N/A'}</Td>
                <Td>{item.dataSize ? item.dataSize : 'N/A'}</Td>
                <Td>{item.connectionTime ? item.connectionTime + 'ms' : 'N/A'}</Td>
                <Td>{item.statusText ? item.statusText : 'N/A'}</Td>
              </StyledTr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Request Details</ModalHeader>
          <ModalBody>
            <TableContainer maxH="300px" overflowY="auto">
              <Table variant="simple" size={'sm'} width={'100%'}>
                <Thead>
                  <Tr>
                    <Th>Headers</Th>
                    <Th>Value</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {selectedItem?.responseHeaders &&
                    Object.keys(selectedItem.responseHeaders).map((key, index) => (
                      <Tr key={index}>
                        <Td>{key}</Td>
                        <Td>{selectedItem.responseHeaders[key]}</Td>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </TableContainer>

            <TableContainer maxH="300px" overflowY="auto">
              <Table variant="simple" size={'sm'} width={'100%'}>
                <Thead>
                  <Tr>
                    <Th>Payload</Th>
                    <Th>Value</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {selectedItem?.data &&
                    <Tr>
                      <Td>Data</Td>
                      <Td>{selectedItem.data}</Td>
                    </Tr>
                  }
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCloseModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Main>
  );
}

export default Leftside;

const Main = styled.div`
  width: 100%;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 10px;
`;

const StyledTr = styled(Tr)`
  cursor: pointer;
  &:hover {
    background-color: grey; 
  }
`;
