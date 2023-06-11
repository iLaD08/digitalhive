import ScrollAnimation from "react-animate-on-scroll";
import { useTranslation } from "react-i18next";
import {
  Box,
  Heading,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";

const Logo = (props) => {
  return (
    <Heading fontSize="2xl">
      Digital<span style={{ color: "lightgreen" }}>Hive</span>{" "}
    </Heading>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  const [t] = useTranslation();

  const handleNavigation = (element) => {
    const navTo = document.querySelector(`#${element}`);

    navTo.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollAnimation animateIn="fadeInUp">
      <Box
        mt="5vh"
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr" }}
            spacing={8}
          >
            <Stack spacing={6}>
              <Box>
                <Logo color={useColorModeValue("gray.700", "white")} />
              </Box>
              <Text fontSize={"sm"}>
                © 2022 Digitalhive inc. All rights reserved
              </Text>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Links</ListHeader>
              <Link onClick={() => handleNavigation("hero")}>
                {t("layout.first")}
              </Link>
              <Link onClick={() => handleNavigation("features")}>
                {t("layout.second")}
              </Link>
              <Link onClick={() => handleNavigation("testimony")}>
                {t("layout.third")}
              </Link>
              <Link onClick={() => handleNavigation("contact")}>
                {t("layout.fourth")}
              </Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Email</ListHeader>
              <Link href="mailto:digitalhive.inc@outlook.com">digitalhive.inc@outlook.com</Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </ScrollAnimation>
  );
}
