import { Avatar, Divider, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { useState } from "react";
import {FiHome, FiDatabase, FiMenu} from 'react-icons/fi'
import NavItem from "./NavItem";
import NextLink from "next/link";



export default function Sidebar() {

  const [navSize, setNavSize] = useState('large')


  return (
    <Flex 
      width={navSize === 'large' ? '15%' : '7%'} 
      direction='column' 
      height="100vh" 
      bg='blackAlpha.700'
      color='#fff'
    >
      <Flex w='100%' alignItems='center' justifyContent={navSize === 'small' && 'center'} height='4rem' p={2}>
        <IconButton
          mt={1}
          background='none'
          fontSize='2xl'
          icon={<FiMenu />} 
          aria-label={"test"} 
          onClick={() => navSize === 'large' ? setNavSize('small') : setNavSize('large')}       
        />
        <Heading ml='8' size='md' display={navSize === 'small' && 'none'}>Menu</Heading>
      </Flex>
      <Flex h='100%' direction='column' padding={2}>
        <NavItem title='Dashboard' icon={FiHome} path='/' navSize={navSize} />
        <NavItem title='Taskes' icon={FiDatabase} path='/tasks' navSize={navSize} />
        <NavItem title='Dashboard' icon={FiHome} path='/kk' navSize={navSize} />
        <NavItem title='Dashboard' icon={FiHome} path='/j' navSize={navSize} />
      </Flex>
      <Flex alignItems={navSize === 'small' ? 'center' : 'flex-start'} flexDir='column' padding={2}>
        <Divider display={navSize === 'small' && 'none'} />
        <NextLink href='/profile'>
        <Flex align='center' mt={3}>
          <Avatar size="md" name="Kon Akech" src="./../assets/kon.png" />
          <Flex display={navSize === 'small' && 'none'} ml={2}>
            <Heading as='h5' size='md'>Konson Ak</Heading>
            <Text>Admin</Text>
          </Flex>
        </Flex>
        </NextLink>
      </Flex>
    </Flex>
  )
}
