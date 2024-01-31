// Most Important parts of UserForm:
//1. Show two inputs and one button
//2. Entering a name + email then submitting the form casues the 'onUserAdd' callback to be called.

import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  // Render the component
  render(<UserForm />);

  // Manipulate the component or find an element in it.
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion - make sure the component is doing.
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();

  // What we expect it to do.
});

test("it calls the onUserAdd callback when the form is submitted", async () => {
  const mock = jest.fn();

  // Try to render my component
  render(<UserForm onUserAdd={mock} />);

  // Find the two inputs
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  // Simulate typing in a name
  await user.click(nameInput);
  await user.keyboard("John Doe");

  // Simulate typing in an email
  await user.click(emailInput);
  await user.keyboard("john@naver.com");

  // Find the button
  const button = screen.getByRole("button");

  // Simulate clicking the button
  await user.click(button);

  // Assertion to make sure 'onUserAdd' gets called with the correct email and name.
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "John Doe",
    email: "john@naver.com",
  });
});
