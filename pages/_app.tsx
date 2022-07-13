import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import TaskContextProvider from '../context-manager/TaskContextProvider'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <TaskContextProvider>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </TaskContextProvider>
  )
}

export default MyApp


