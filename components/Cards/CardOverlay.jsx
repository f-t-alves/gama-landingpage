import { Image, Text, useColorMode, HStack, VStack, Stat, StatLabel, StatNumber } from "@chakra-ui/react";

const CardOverlay = ({ item }) => {
  const { colorMode } = useColorMode();
  const darkHover = {
    background: "gray.700",
    cursor: "pointer",
  };
  const lightHover = {
    background: "gray.300",
    cursor: "pointer",
  };

  return (
    <VStack
      borderWidth={1}
      borderColor="gray.200"
      borderRadius="md"
      cursor="pointer"
      _hover={colorMode === "dark" ? darkHover : lightHover}
      maxW="540px"
      padding="10px"
    >
      <Image alt={item.name} src={item.image} boxSize="200px"/>
      <VStack align="stretch" p={4} spacing={2}>
        <Text fontSize="m" textAlign="left">
          {item.name}
        </Text>

        <Text fontSize="xs" textAlign="left">
          {item.description}
        </Text>

        <Stat>
          <StatLabel>Price</StatLabel>
          <StatNumber>{item.price}</StatNumber>
        </Stat>
      </VStack>
    </VStack>
  );
};

export default CardOverlay;
