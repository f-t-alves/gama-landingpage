import {
  Button,
  chakra,
  HStack,
  Icon,
  IconButton,
  Image,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const { signedIn, setSignedIn } = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      as="nav"
      p={4}
      spacing={2}
      color={colorMode === "dark" ? "green.300" : "green.500"}
      fontWeight="bold"
    >
      <NextLink href={"/"} passHref>
        <HStack spacing={2}>
          <Image
            src="/gama_icon.png"
            w={9}
            h={9}
            borderRadius="md"
            alt="Furreca's logo"
          />
          <chakra.span fontSize="lg">Desafio Gama</chakra.span>
        </HStack>
      </NextLink>

      <Spacer />

      <HStack spacing={3}>
        {signedIn ? (
          <NextLink href={"/me"} passHref>
            <Button colorScheme="green" size="sm">
              Profile
            </Button>
          </NextLink>
        ) : (
          <NextLink href={"/sign-in"} passHref>
            <Button colorScheme="green" size="sm">
              Sign In
            </Button>
          </NextLink>
        )}

        <IconButton
          size="sm"
          colorScheme="red"
          aria-label="Activate Dark Mode"
          icon={<Icon as={FaMoon} />}
          variant="outline"
          onClick={() => toggleColorMode()}
        />
      </HStack>
    </HStack>
  );
};

export default Header;
