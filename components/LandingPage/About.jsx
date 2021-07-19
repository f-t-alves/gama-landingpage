import { Box, Heading, Text } from "@chakra-ui/layout";

const About = () => {
  return (
    <Box minW="90%" maxW="900px">
      <div className="card">
        <Heading align="center">
          <strong>
            <em>All About FurrecaShop</em>
          </strong>
        </Heading>
        <div className="card-body">
          <Heading size="sm">Always Furreca, never Roubada</Heading>
          <Text>
            FurrecaShop is your one-stop shop for all Furreca off-brand apparel, electronics and more! Established in 2021, FurrecaShop has been in the heart of people around the globe from the get-go.
          </Text>
        </div>
      </div>
    </Box>
  );
};

export default About;
