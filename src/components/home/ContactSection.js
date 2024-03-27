import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Container } from "../Container";
import Email from "../../../emails";
import { Resend } from "resend";

const handleFormSubmit = async (e, inputValue) => {
  e.preventDefault();
  const { email, message } = inputValue;
  const data = await fetch('/api/email-handler')
  console.log(data)
};
const handleInputChange = (event, stateSetter) => {
  stateSetter((prev) => {
    return {
      ...prev,
      [event.target.name]: event.target.value,
    };
  });
};

const ContactSection = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    message: "",
  });
  return (
    <section id="contactSection">
      <Container>
        <Box className="flex flex-col gap-4" component="form" autoComplete="off" onSubmit={(e) => handleFormSubmit(e, inputValue)}>
          <TextField
            required
            name="email"
            value={inputValue.email}
            fullWidth
            label="Your email address"
            placeholder="Type your email address here"
            onChange={(e) => handleInputChange(e, setInputValue)}
          />
          <TextField
            required
            name="message"
            value={inputValue.message}
            fullWidth
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            placeholder="Type your message here"
            onChange={(e) => handleInputChange(e, setInputValue)}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
          <LoadingButton loading variant="outlined">
            Submit
          </LoadingButton>
        </Box>
      </Container>
    </section>
  );
};



export default ContactSection;
