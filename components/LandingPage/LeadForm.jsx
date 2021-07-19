import {
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  VStack,
  Flex,
  Button,
  ButtonGroup,
  Icon,
  useColorMode,
  useColorModeValue,
  Spinner,
  Tag,
  Heading,
} from "@chakra-ui/react";

import { useState } from "react";
import { useRouter } from "next/router";
import { IoCreateOutline } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

const LeadForm = () => {
  const router = useRouter();
  const bg = useColorModeValue("#fafafa");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const { colorMode } = useColorMode();

  const [loadingState, setLoadingState] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      fullName,
      email,
    };
    let convertData = JSON.stringify(data);

    localStorage.setItem("lead", convertData);

    let loading = <Spinner />;

    let done = "Subscribed!";

    setLoadingState(loading);

    setTimeout(() => {
      setLoadingState(done);
    }, 1000);
  };

  return (
    <Flex
      as="form"
      borderRadius="md"
      direction="column"
      align="center"
      justify="center"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      maxW="720px"
      minW="80%"
    >
      <VStack
        px={[7, 14]}
        py={[5, 10]}
        spacing={5}
        borderRadius="md"
        w={["full", "full", "60%"]}
        border={colorMode === "light" ? "1px solid #000" : "1px solid #fff"}
        bg={bg}
      >
        <Heading justify="center">Subscribe to our offers!</Heading>
        <FormControl id="fullName">
          <FormLabel>Your Name</FormLabel>
          <Input
            autoComplete="off"
            placeholder={"John Doe"}
            value={fullName}
            onChange={({ currentTarget: { value } }) => setFullName(value)}
            focusBorderColor="green.500"
            size="lg"
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            autoComplete="off"
            placeholder={"example@example.com"}
            value={email}
            onChange={({ currentTarget: { value } }) => setEmail(value)}
            focusBorderColor="green.500"
            size="lg"
          />
          <FormHelperText>We will never share your email.</FormHelperText>
        </FormControl>
        <ButtonGroup variant="outline" spacing={6}>
          <Button
            type="submit"
            leftIcon={<Icon as={IoCreateOutline} />}
            colorScheme="teal"
          >
            Submit
          </Button>
          <Button
            leftIcon={<Icon as={MdCancel} />}
            onClick={() => router.push("/")}
          >
            Cancel
          </Button>
        </ButtonGroup>
        {loadingState != "" && <Tag>{loadingState}</Tag>}
      </VStack>
    </Flex>
  );
};

export default LeadForm;
