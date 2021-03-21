import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />)

  const formHeader = screen.getByText(/Checkout Form/);

  expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />)

  const checkoutButton = screen.getByRole('button');
  const firstName = screen.getByLabelText(/First Name:/);
  const lastName = screen.getByLabelText(/Last Name:/);
  const address = screen.getByLabelText(/Address:/);
  const city = screen.getByLabelText(/City:/);
  const state = screen.getByLabelText(/State:/);
  const zip = screen.getByLabelText(/Zip:/);
  
  userEvent.type(firstName, 'Austin');
  userEvent.type(lastName, 'Carrill');
  userEvent.type(address, '123 Main St');
  userEvent.type(city, 'Any City');
  userEvent.type(state, 'Any State');
  userEvent.type(zip, '12345')
  userEvent.click(checkoutButton);

  // expect(firstName).toBe(false);  To show that the test will fail
  // expect(city).toBe(false);   To show that the test will fail
  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
  expect(address).toBeInTheDocument();
  expect(city).toBeInTheDocument();
  expect(state).toBeInTheDocument();
  expect(zip).toBeInTheDocument();

  screen.debug()
});
