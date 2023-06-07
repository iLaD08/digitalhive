import emailjs from "@emailjs/browser";

const {
  REACT_APP_SERVICE_ID,
  REACT_APP_TEMPLATE_ID,
  REACT_APP_PUBLIC_KEY
} = process.env;

const sendMail = async (values) => {
  try {
    const result = await emailjs.send(
      "service_hyd9lgi",
      "template_kww7jlu",
      values,
      "1gyZth2pURlC6GD3b"
    );

    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default sendMail;
