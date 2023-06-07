import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import ScrollAnimation from "react-animate-on-scroll";
import {
  FcDonate,
  FcPicture,
  FcShop,
  FcTabletAndroid,
  FcDatabase,
} from "react-icons/fc";

const Card = ({ heading, description, icon }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function gridListWith() {
  const [t] = useTranslation();
  const [isMobile] = useMediaQuery("(max-width: 480px)");

  return (
    <Box id="features" mt={isMobile && "35vh"} p={7}>
      <ScrollAnimation animateIn="fadeInDown">
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            {t("features.title")}
          </Heading>
          <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
            {t("features.description")}
          </Text>
        </Stack>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp">
        <Container maxW={"5xl"} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              heading={t("features.cards.0.title")}
              icon={<Icon as={FcPicture} w={10} h={10} />}
              description={t("features.cards.0.description")}
              href={"#"}
            />
            <Card
              heading={t("features.cards.1.title")}
              icon={<Icon as={FcTabletAndroid} w={10} h={10} />}
              description={t("features.cards.1.description")}
              href={"#"}
            />
            <Card
              heading={t("features.cards.2.title")}
              icon={<Icon as={FcShop} w={10} h={10} />}
              description={t("features.cards.2.description")}
              href={"#"}
            />
            <Card
              heading={t("features.cards.3.title")}
              icon={<Icon as={FcDatabase} w={10} h={10} />}
              description={t("features.cards.3.description")}
              href={"#"}
            />
            <Card
              heading={t("features.cards.4.title")}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={t("features.cards.4.description")}
              href={"#"}
            />
          </Flex>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
