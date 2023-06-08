import { useState, useEffect, Suspense } from "react";
import { useTranslation } from "react-i18next";
import Icons from "./icons";
import {
  Flex,
  Link,
  Button,
  Heading,
  Select,
  HStack,
  useColorMode,
} from "@chakra-ui/react";

export default function Layout() {
  const [language, setLanguage] = useState(window.localStorage.getItem("i18nextLng"));
  const [t, i18n] = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const handleNavigation = (element) => {
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
          </HStack>
        </Flex>
        <Icons
          language={language}
          setLanguage={setLanguage}
          toggleColorMode={toggleColorMode}
          colorMode={colorMode}
        />
      </Flex>
    </Suspense>
  );
}
