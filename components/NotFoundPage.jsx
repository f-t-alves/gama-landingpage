import { Button, Heading, Icon, useColorMode, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaHome } from 'react-icons/fa';

const NotFoundPage = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  return (
    <VStack minH="70vh" spacing={7} justify="center">
      <Heading
        textAlign="center"
        fontSize={['3xl', '5xl']}
        color={colorMode === 'dark' ? 'red.300' : 'red.500'}
      >
        Code 404 Happened!
      </Heading>

      <Heading textAlign="center" fontSize={['md', 'xl']}>
        Uh, oh! This page cannot be found! Please go back to the homepage!
      </Heading>

      <Button
        colorScheme="red"
        leftIcon={<Icon as={FaHome} />}
        onClick={() => router.push("/")}
      >
        Home
      </Button>
    </VStack>
  );
};

export default NotFoundPage;