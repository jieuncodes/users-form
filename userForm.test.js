//1. Show two inputs and one button
//2. Entering a name + email then submitting the form casues the 'onUserAdd' callback to be called.

import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  //render the component
  render(<UserForm />);
});
