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
