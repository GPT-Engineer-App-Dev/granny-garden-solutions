import React from "react";
import { Box, Heading, Text, Image, Stack, Grid, GridItem, Container, Button, Link } from "@chakra-ui/react";
import { FaSeedling, FaHeart, FaSmile } from "react-icons/fa";

const gardeningSolutions = [
  {
    title: "Easy-Peasy Raised Beds",
    description: "No more bending down! Our raised beds are perfect for your green-thumbed granny.",
    image: "https://images.unsplash.com/photo-1548400659-500be8d0279a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyYWlzZWQlMjBnYXJkZW4lMjBiZWRzfGVufDB8fHx8MTcxMTEzNTgwMXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Granny's Grippy Gloves",
    description: "Arthritis-friendly gloves with extra grip, so you can garden to your heart's content.",
    image: "https://images.unsplash.com/photo-1695053708444-502b7f87d49a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnYXJkZW5pbmclMjBnbG92ZXMlMjBmb3IlMjBlbGRlcmx5fGVufDB8fHx8MTcxMTEzNTgwMnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Lightweight Watering Wand",
    description: "Magically water your plants without heavy lifting. Abracadabra!",
    image: "https://images.unsplash.com/photo-1611735341450-74d61e660ad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsaWdodHdlaWdodCUyMHdhdGVyaW5nJTIwd2FuZHxlbnwwfHx8fDE3MTExMzU4MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Box bg="green.50" minHeight="100vh">
      <Container maxW="container.lg" py={8}>
        <Heading as="h1" size="2xl" textAlign="center" color="green.700">
          Granny's Gardening Gizmos <FaSeedling />
        </Heading>
        <Text fontSize="xl" textAlign="center" mt={4}>
          Quirky solutions for the young at heart! <FaHeart />
        </Text>

        <Grid templateColumns="repeat(3, 1fr)" gap={8} mt={12}>
          {gardeningSolutions.map((solution, index) => (
            <GridItem key={index}>
              <Stack bg="white" p={6} borderRadius="lg" boxShadow="md" align="center" spacing={4}>
                <Image src={solution.image} alt={solution.title} borderRadius="full" boxSize="150px" />
                <Heading as="h3" size="lg" color="green.600">
                  {solution.title}
                </Heading>
                <Text textAlign="center">{solution.description}</Text>
                <Button colorScheme="green" size="lg">
                  Get It Now!
                </Button>
              </Stack>
            </GridItem>
          ))}
        </Grid>

        <Box mt={16} textAlign="center">
          <Text fontSize="2xl">
            Join our newsletter for more granny-approved gardening tips! <FaSmile />
          </Text>
          <Link href="#" mt={4}>
            <Button colorScheme="green" size="lg">
              Sign Me Up!
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
