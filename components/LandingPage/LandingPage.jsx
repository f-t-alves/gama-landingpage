import {
  useColorMode,
  Flex,
  Heading,
  VStack,
  Wrap,
  Center,
} from "@chakra-ui/react";

import About from "./About";
import LeadForm from "./LeadForm";
import ShirtCard from "../Cards/ShirtCard";

const LandingPage = () => {
  const { colorMode } = useColorMode();

  return (
    <main>
      <VStack maxW="900px" minW="90%" align="center">
        <Heading as="h1">Black Friday Sale!</Heading>
        <LeadForm />
        <Center>
          <Wrap
            spacing="30px"
            align="center"
            justify="center"
            maxW="720px"
            minW="100%"
          >
            <ShirtCard />
            <ShirtCard />
            <ShirtCard />
            <ShirtCard />
            <ShirtCard />
            <ShirtCard />
          </Wrap>
        </Center>
        <About />
      </VStack>
    </main>
  );
};

export default LandingPage;
