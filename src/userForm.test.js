import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion - make sure the component is doing.
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls the onUserAdd callback when the form is submitted", async () => {
  const mock = jest.fn();

  render(<UserForm onUserAdd={mock} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  await user.click(nameInput);
  await user.keyboard("John Doe");
  await user.click(emailInput);
  await user.keyboard("john@naver.com");

  const button = screen.getByRole("button");

  await user.click(button);

  // Assertion to make sure 'onUserAdd' gets called with the correct email and name.
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "John Doe",
    email: "john@naver.com",
  });
});
