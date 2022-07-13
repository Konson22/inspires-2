import { Box, Flex, Heading, Button, Stack, Text } from "@chakra-ui/react";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import RoundedButton from "./../util/RoundedButton";
import 'react-calendar/dist/Calendar.css';
import axiosInstance from "./../hooks/axiosIntance";
import { TaskList } from "../tasks/TaskList";


export default function index({tasks}) {

  return (
    <Flex m={3}>
        <Flex
            flex={1}
            h="100%"
            mr={3}
            px={5}
            overflowY="scroll"
            css={{
              "::-webkit-scrollbar": { display: "none" }
            }}
          >
            <Flex flexDir='column' flex={1}>
                <Stack isInline h='max-content' my={5}>
                    <RoundedButton text='React'  />
                    <RoundedButton text='Desgin' />
                    <RoundedButton text='Fashion' />
                </Stack>
                <Flex justifyContent='space-between' mb={6}>
                    <Heading>Tasks</Heading>
                    <Flex>
                        <Flex h='50px' w='50px' borderRadius='50%' bg='gray.100' ml={3}>
                        </Flex>
                        <Flex h='50px' w='50px' borderRadius='50%' bg='gray.100' ml={3}>
                        </Flex>
                        <Flex h='50px' w='50px' borderRadius='50%' bg='gray.100' ml={3}>
                        </Flex>
                    </Flex>
                </Flex>
                <TaskList tasks={tasks} />
                {/* {tasks.map(task => (
                    <Flex direction='column' key={task.id} p={5} mb={5} width="100%" bg='white'>
                        <Flex justifyContent='space-between' mb={1}>
                            <Heading as='h4' fontSize={['sm', 'md', 'md']}>{task.title}</Heading>
                            <Button bg='none'>:</Button>
                        </Flex>
                        <Text>{task.description}</Text>
                        <Flex justifyContent='space-between' mt={4}>
                            <Box>
                                <RoundedButton text='React' />
                                <RoundedButton text='React' />
                            </Box>
                            <Text>{task.createdAt}</Text>
                        </Flex>
                    </Flex>
                ))} */}
            </Flex>
        </Flex>
        <TaskSidebar />
    </Flex>
  )
}



function TaskSidebar(){
    const [value, onChange] = useState(new Date());

    return(
        <Flex
            flexBasis='45%'
            bg='gray.100'
            flexDir='column'
            p={5}
          >
            <Flex w='100%' mb={5}>
                <Flex flex={2} bg='white' mr={3} borderRadius='10px'>
                    <Calendar onChange={onChange} value={value} />
                </Flex>
                <Flex flex={1} h='200px' bg='white' borderRadius='10px' p={3}>
                    other
                </Flex>
            </Flex>            
            <Flex w='100%'>
                <Flex flex={2} flexDir='column' bg='yellow.600' borderRadius='10px' p={3} color='white'>
                    Average task complition time 8 hours
                </Flex>
                <Flex flex={1} flexDir='column' bg='white'  mx={2} borderRadius='10px' p={3}>
                    <Heading as='h4' fontSize='2xl'>45</Heading>
                    <Text>Pending</Text>
                </Flex>
                <Flex flex={1} flexDir='column' bg='white' borderRadius='10px' p={3}>
                    <Heading as='h4' fontSize='2xl'>5</Heading>
                    <Text>Closed</Text>
                </Flex>
            </Flex>            
        </Flex>
    )
}

export async function getServerSideProps() {
    const response = await axiosInstance.get('/task');
    return { props: { 
            tasks: response.data
        } 
    }
}