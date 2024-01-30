import React from "react";
import {
  ContactFormWrapper,
  ContactHead,
  ContactText,
  ContactForm,
  SuccessMsg,
} from "./styles";
import { useForm } from "@formspree/react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mwkdygke");

  if (state.succeeded) {
    return (
      <ContactFormWrapper>
        <SuccessMsg>Thanks for showing your interest!</SuccessMsg>
      </ContactFormWrapper>
    );
  }

  return (
    <ContactFormWrapper id="contact">
      <ContactHead>Contact Me</ContactHead>
      <ContactText>
        Please fill out the form below to discuss any work opportunity.
      </ContactText>
      <ContactForm onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Your name"
          name="name"
          disabled={state.submitting}
        />
        <input
          type="email"
          required
          placeholder="Your Email"
          name="email"
          disabled={state.submitting}
        />
        <textarea
          type="text"
          placeholder="Message"
          rows={5}
          name="message"
          disabled={state.submitting}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </ContactForm>
    </ContactFormWrapper>
  );
};

export default ContactSection;
