import {
    Flex,
    Heading,
    Stack,
    VStack,
    Text,
    Button,
    Box
} from "@chakra-ui/react";
import { TaskObject } from "../util/types/Task";
import Image from "next/image";
import RoundedButton from "../util/RoundedButton";

type TaskListProps = {
    tasks: TaskObject[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
    if (tasks.length === 0) {
        return (
            <Flex
                alignItems="center"
                gap={8}
                marginTop="8"
                p="4"
                justifyContent={"center"}
            >
                <Image
                    alt="empty"
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8Y6jlyyGKX4Xok7Q6ro0TwI-hCCHLP1zovBevgm_JsTiTnbQXbT9UMCt2YOhDBOjHwo&usqp=CAU' height="300px"
                />
            </Flex>
        )
    }

    return (
        <VStack
            alignItems="flex-start"
            width={"100%"}
        >
            {tasks.map(task => (
                <Flex
                    boxShadow="2px 2px 4px rgba(120, 130, 164, 0.1)"
                    p="4"
                    width={"100%"}
                    borderRadius="8px"
                    bg="#fff"
                    cursor="pointer"
                    _hover={{
                        borderColor: "brand.accent",
                        color: "brand.white",
                        background: "rgba(55, 102, 0, 0.01)"
                    }}
                >
                    <Flex alignItems="center" gap={8} w='100%'>
                        <Stack w='100%'>
                        <Flex justifyContent='space-between' mb={1}>
                            <Heading as="h3" size="sm" color="brand.primary" m="0">{task.title}</Heading>
                            <Button bg='none'>:</Button>
                        </Flex>
                            <Text color="#696969">{task.description}</Text>
                            <Flex justifyContent='space-between' mt={4} >
                                <Box>
                                    <RoundedButton text='React' />
                                    <RoundedButton text='React' />
                                </Box>
                                <Text>{task.createdAt}</Text>
                            </Flex>
                        </Stack>
                    </Flex>
                </Flex>
            ))}
        </VStack>
    );
}

/*
{tasks.map(task => (
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
                ))}
*/ 

