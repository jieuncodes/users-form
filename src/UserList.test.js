import { render, screen, within } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserList from "./UserList";

test("render one row per user", () => {
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "sam", email: "sam@sam.com" },
  ];

  // Render the component
  const { container } = render(<UserList users={users} />);

  // Find all the rows in the table
  // eslint-disable-next-line
  const rows = container.querySelectorAll("tbody tr");

  //Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {});
