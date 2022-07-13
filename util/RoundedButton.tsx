import { Button } from '@chakra-ui/react'
import React from 'react'

export default function RoundedButton({text}) {
  return (
    <Button bg="gray.100" h='30px' borderRadius='7px' mr={2} fontSize='xs'>
        {text}
    </Button>
  )
}
