import { useState } from "react";
import styled from "styled-components";
import { Button, Form, TextArea, TextInput } from "./common/Form";
import { COLOR_THEME } from "./constants";
import axios from "axios";
import { message as Message } from "antd";

const Contact = () => {
  const [name, setName] = useState({
    value: "",
    focus: false,
  });
  const [email, setEmail] = useState({
    value: "",
    focus: false,
  });
  const [message, setMessage] = useState({
    value: "",
    focus: false,
  });

  const [subject, setSubject] = useState({
    value: "",
    focus: false,
  });

  const getSetFun = (input) => {
    switch (input) {
      case "name":
        return setName;
      case "email":
        return setEmail;
      case "message":
        return setMessage;
      case "subject":
        return setSubject;
      default:
        return setName;
    }
  };

  const handleFocus = (e, input) => {
    const setter = getSetFun(input);
    setter((prev) => ({ value: prev.value, focus: true }));
  };

  const handleBlur = (e, input) => {
    const setter = getSetFun(input);
    setter((prev) => ({ value: prev.value, focus: false }));
  };

  const handleChange = (e, input) => {
    const value = e.target.value;
    const setter = getSetFun(input);
    setter((prev) => ({ value, focus: prev.focus }));
  };

  const onSubmit = async (e) => {
    axios
      .post("https://mailerapp-rs.herokuapp.com/mail", {
        name: name.value,
        email: email.value,
        message: message.value,
        subject: subject.value,
      })
      .then((response) => {
        setEmail((prev) => ({ value: "", focus: prev.focus }));
        setMessage((prev) => ({ value: "", focus: prev.focus }));
        setSubject((prev) => ({ value: "", focus: prev.focus }));
        setName((prev) => ({ value: "", focus: prev.focus }));
        Message.success("Mail Successfully sent to Rahul");
      });
  };

  return (
    <SKillsContainer id="contact">
      <ContactConatiner>
        <StyledHeading className="wow slideInLeft animated">
          Contact{" "}
        </StyledHeading>
        <h2
          className="wow rubberBand animated"
          data-wow-delay="1200ms"
          data-wow-duration="1s"
        >
          Have a question, want to work together or want to hire me.?
        </h2>
        <Form>
          <TextInput
            name="name"
            label="Name"
            {...name}
            onFocus={(e) => handleFocus(e, "name")}
            onBlur={(e) => handleBlur(e, "name")}
            onChange={(e) => handleChange(e, "name")}
          />
          <TextInput
            name="email"
            label="Email"
            {...email}
            type="email"
            onFocus={(e) => handleFocus(e, "email")}
            onBlur={(e) => handleBlur(e, "email")}
            onChange={(e) => handleChange(e, "email")}
          />
          <TextInput
            name="subject"
            label="Subject"
            {...subject}
            onFocus={(e) => handleFocus(e, "subject")}
            onBlur={(e) => handleBlur(e, "subject")}
            onChange={(e) => handleChange(e, "subject")}
          />
          <TextArea
            name="message"
            label="Message"
            {...message}
            onFocus={(e) => handleFocus(e, "message")}
            onBlur={(e) => handleBlur(e, "message")}
            onChange={(e) => handleChange(e, "message")}
          />
          <Button onSubmit={onSubmit}>Send</Button>
        </Form>
      </ContactConatiner>
    </SKillsContainer>
  );
};

export default Contact;

const SKillsContainer = styled.div`
  padding: 40px 0;
  background: #151515;
  margin-top: -10px;
`;

const ContactConatiner = styled.div`
  max-width: 800px;
  margin: 20px auto;

  h2 {
    color: white;
    text-align: center;
  }
`;

const StyledHeading = styled.h2`
  text-align: center;
  color: ${COLOR_THEME};
  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 40px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;
