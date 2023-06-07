import { useState } from "react";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "react-animate-on-scroll";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Flex,
  List,
  ListItem,
  Box,
  Text,
  Heading,
  FormLabel,
  Stack,
  Container,
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  useToast,
  useMediaQuery,
} from "@chakra-ui/react";
import sendMail from "../services/mailer";

export default function Contact() {
  const [t] = useTranslation();
  const toast = useToast();
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [isLoading, setIsLoading] = useState(false);

  const ContactSchema = Yup.object().shape({
    fullname: Yup.string().required("Full name is required!"),
    email: Yup.string()
      .email("Email is incorrect")
      .required("Email is required!"),
    message: Yup.string()
      .required("Message is required!")
      .min(30, "Message is too short!")
      .max(300, "You passed the limit!"),
  });

  return (
    <ScrollAnimation animateIn="bounceInUp">
      <Box id="contact" m="15vh 0vh 15vh 0vh">
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            {t("contact.title")}
          </Heading>
          <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
            {t("contact.description")}
          </Text>
        </Stack>
        <Flex mt="5vh" justify="center" align="center">
          <Card w={isMobile ? "40vh" : "60vh"}>
            <CardBody>
              <Formik
                initialValues={{ fullname: "", email: "", message: "" }}
                onSubmit={async (values, { resetForm }) => {
                  try {
                    setIsLoading(true);
                    await sendMail(values).then(() => {
                      resetForm();
                      setIsLoading(false);
                      toast({
                        title: "Message sent!",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                      });
                    });
                  } catch (err) {
                    setIsLoading(false);
                    toast({
                      title: "We are full right now!",
                      status: "error",
                      duration: 5000,
                      isClosable: true,
                    });
                  }
                }}
                validationSchema={ContactSchema}
              >
                <Form>
                  <Stack spacing={4}>
                    <FormLabel>{t("contact.formlabels.0")}</FormLabel>
                    <Field name="fullname" as={Input} />
                    <FormLabel>{t("contact.formlabels.1")}</FormLabel>
                    <Field name="email" as={Input} />
                    <FormLabel>{t("contact.formlabels.2")}</FormLabel>
                    <Field name="message" as={Textarea} h="15vh" />
                  </Stack>

                  <Stack mt="2.5vh" justify="center">
                    <List color="red.200">
                      <ListItem>
                        <ErrorMessage name="fullname" />
                      </ListItem>
                      <ListItem>
                        <ErrorMessage name="email" />
                      </ListItem>
                      <ListItem>
                        <ErrorMessage name="message" />
                      </ListItem>
                    </List>
                    <Button
                      loadingText={t("contact.buttonLoading")}
                      isLoading={isLoading}
                      colorScheme="green"
                      type="submit"
                    >
                      {t("contact.button")}
                    </Button>
                  </Stack>
                </Form>
              </Formik>
            </CardBody>
          </Card>
        </Flex>
      </Box>
    </ScrollAnimation>
  );
}
