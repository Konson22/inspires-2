import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react'

export default function profile() {
  return (
    <Flex p={4}>
      <Flex flex={2} bg='gray.100' h='100%'>
        <Flex alignItems='center' p={2}>
          <Avatar size="2xl" name="Kon Akech" src="./../assets/kon.png" />
          <Box>
            <Heading>Kon Akech</Heading>
            <Text>Web developer</Text>
          </Box>
        </Flex>
      </Flex>
      <Flex flex={1} bg='gray.100' p={2} ml={3}>
        right
      </Flex>
    </Flex>
  )
}
