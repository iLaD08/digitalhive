import { Flex, Button, Select } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Icons(props) {
  let { language, setLanguage, toggleColorMode, colorMode } = props;

  return (
    <Flex p="0px 10px 0px 10px" justify="space-between">
      <Select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">En</option>
        <option value="fr">Fr</option>
      </Select>
      <Button ml="10px" variant="ghost" onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Flex>
  );
}
