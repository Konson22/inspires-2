import {Flex, Heading, Input} from '@chakra-ui/react'
import {FaRegBell} from 'react-icons/fa'


export default function Navbar() {
  return (
    <Flex w='100%' height='4.5rem' alignItems='center' justifyContent='space-between'>
      <Flex>
        <Heading ml='8' size='md'>Navbar</Heading>
      </Flex>
      {/* <Flex flex='1' paddingLeft='4rem' paddingRight='4rem' >
        <Input bg='orange.100' height='3rem' border='none' borderRadius='25px' placeholder='Search...' />
      </Flex> */}
      <Heading mr='8' size='md'>
        <FaRegBell />
      </Heading>
    </Flex>
  )
}
