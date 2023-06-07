import { useState, useEffect, Suspense } from "react";
import { useTranslation } from "react-i18next";
import {
  Flex,
  Link,
  Button,
  Heading,
  Select,
  HStack,
  useColorMode
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Layout() {
  const [langauge, setLanguage] = useState("en-US");
  const [t, i18n] = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    i18n.changeLanguage(langauge);
  }, [langauge, i18n]);

  const hanleNavigation = (element) => {
    const navTo = document.querySelector(`#${element}`);

    navTo.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Suspense fallback="loading">
      <Flex
        style={{ position: "relative", zIndex: 2 }}
        p="5vh 5vh 5vh 5vh"
        justify={"space-around"}
        align="center"
      >
        <Flex align="center">
          <Heading fontSize="3xl">
            Digital<span style={{ color: "lightgreen" }}>Hive</span>{" "}
          </Heading>
        </Flex>
        <Flex>
          <HStack spacing="5vh">
            <Link onClick={() => hanleNavigation("hero")}>
              {t("layout.first")}
            </Link>
            <Link onClick={() => hanleNavigation("features")}>
              {t("layout.second")}
            </Link>
            <Link onClick={() => hanleNavigation("testimony")}>
              {t("layout.third")}
            </Link>
            <Link onClick={() => hanleNavigation("contact")}>
              {t("layout.fourth")}
            </Link>
          </HStack>
        </Flex>
        <Flex p="0px 10px 0px 10px" justify="space-between">
          <Select onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">En</option>
            <option value="fr">Fr</option>
          </Select>
          <Button ml="10px" variant="ghost" onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>
    </Suspense>
  );
}
