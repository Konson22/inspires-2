import React, { ReactChild } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Navbar } from "ui";
import Head from "next/head";
import Link from "next/link";
import { FiHome, FiSettings, FiUser, FiBell, FiCheckCircle, FiUsers, FiAirplay } from "react-icons/fi";
import { VStack } from "@chakra-ui/react";

type LayoutProps = {
  children: ReactChild | ReactChild[];
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Inspirers</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Flex height="100vh">
        <Box bg="#2C3639" p="8" height="100%" color="#fff" boxShadow="rgba(0, 0, 0, 0.08) 0px 4px 12px">
          <VStack gap={6}>
              <Flex direction="column" alignItems="center">
                <FiHome size="1.5rem" color="#F1ECC3"/>
                <Link href="/">Home</Link>
              </Flex>
              <Flex direction="column" alignItems="center">
                <FiSettings size="1.5rem" color="#F1ECC3"/>
                <Link href="/journeys">Journeys</Link>
              </Flex>
              <Flex direction="column" alignItems="center">
                <FiUser size="1.5rem" color="#F1ECC3"/>
                <Link href="/profile">Profile</Link>
              </Flex>
              <Flex direction="column" alignItems="center">
                <FiBell size="1.5rem" color="#F1ECC3"/>
                <Link href="/notifications">Notifications</Link>
              </Flex>
              <Flex direction="column" alignItems="center">
                <FiCheckCircle size="1.5rem" color="#F1ECC3"/>
                <Link href="/tasks">Tasks</Link>
              </Flex>
              <Flex direction="column" alignItems="center">
                <FiUsers size="1.5rem" color="#F1ECC3"/>
                <Link href="/communitis">Communitis</Link>
              </Flex>
              <Flex direction="column" alignItems="center">
                <FiAirplay size="1.5rem" color="#F1ECC3"/>
                <Link href="/discover">Discover</Link>
              </Flex>
              <Flex direction="column" alignItems="center">
                <FiSettings size="1.5rem" color="#F1ECC3"/>
                <Link href="/settings">Settings</Link>
              </Flex>
          </VStack>
        </Box>
        <Box width="90%" height="100%">
          <Navbar />
          <Box as="section">
            {children}
          </Box>
        </Box>
      </Flex>
    </>
  );
}
