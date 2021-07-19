import { useColorMode, Code, Heading, Flex } from "@chakra-ui/react";

import NewExampleForm from "components/NewExampleForm";

const LandingPage = () => {
  const { colorMode } = useColorMode();

  return (
    <main>
      <Flex direction="column" align="center">
        <Heading as="h1">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Heading>
        <Heading as="h2">
          Get started by editing <Code>pages/index.js</Code>
        </Heading>
        <NewExampleForm />
      </Flex>
    </main>
  );
};

export default LandingPage;

/*
<div className={styles.form}>
        <NewExampleForm />
      </div>
      */
