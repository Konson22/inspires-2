import { VStack, Flex, Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({children}) {
  return (
      <VStack width="100%" height="100%" minHeight="100vh" margin={0} bg='gray.50'>
        <Flex width="100%" height="100%" direction="row">
            <Sidebar />
            <Box flex='1' height="100%">
              <Navbar />
              {children}
            </Box>
        </Flex>
      </VStack>
  );
}
