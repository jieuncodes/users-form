import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserList from "./UserList";

test("render one row per user", () => {
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "sam", email: "sam@sam.com" },
  ];

  //Render the component
  render(<UserList />);

  //Find all the rows in the table
  



  //Assertion: correct number of rows in the table
});

test("render the email and name of each user", () => {});
