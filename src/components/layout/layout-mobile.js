import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Icons from "./icons";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Heading,
  Button,
  Link,
  Icon,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function LayoutMobile() {
  const [language, setLanguage] = useState(window.localStorage.getItem("i18nextLng"));
  const { isOpen, onToggle } = useDisclosure();
  const [t, i18n] = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"70px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
          align="center"
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
          <Heading fontSize="2xl">
            Digital<span style={{ color: "lightgreen" }}>Hive</span>{" "}
          </Heading>
        </Flex>
        <Icons
          language={language}
          setLanguage={setLanguage}
          toggleColorMode={toggleColorMode}
          colorMode={colorMode}
        />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav onToggle={onToggle} />
      </Collapse>
    </Box>
  );
}

const MobileNav = ({ onToggle }) => {
  const [t] = useTranslation();

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      <MobileNavItem key={t("layout.first")} onToggle={onToggle} scrollTo="hero" label={t("layout.first")} />
      <MobileNavItem key={t("layout.second")} onToggle={onToggle} scrollTo="features" label={t("layout.second")} />
      <MobileNavItem key={t("layout.second")} onToggle={onToggle} scrollTo="testimony" label={t("layout.third")} />
      <MobileNavItem key={t("layout.second")} onToggle={onToggle} scrollTo="contact" label={t("layout.fourth")} />
    </Stack>
  );
};

const MobileNavItem = ({ onToggle, label, scrollTo }) => {
  const handleNavigation = (element) => {
    const navTo = document.querySelector(`#${element}`);

    navTo.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => onToggle(), 2000)
  };

  return (
    <Stack spacing={4} onClick={() => handleNavigation(scrollTo)}>
      <Flex
        py={2}
        as={Link}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};
