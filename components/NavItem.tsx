import { Flex, Text, Link, Menu, MenuButton, Icon } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NavItem({title, icon, path, navSize}) {
  return (
    <Flex flexDir='column' alignItems={navSize === 'small' ? 'center' : 'flex-start'} mt={3} as='nav'>
        <Menu placement="right">
            <Link  textDecoration='none' padding={3} borderRadius='6px'
            >
                <NextLink href={path}>
                    <MenuButton>
                        <Flex alignItems='center' flexDirection={navSize === 'large' ? 'row' : 'column'} color='#fff'>
                            <Icon as={icon} fontSize='3xl' mb={navSize === 'small' && 2} />
                            <Text ml={navSize === 'large' && 2} fontSize='xs'>{title}</Text>
                        </Flex>
                    </MenuButton>
                </NextLink>
            </Link>
        </Menu>
    </Flex>
  )
}
