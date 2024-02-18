import { render, screen } from "@testing-library/react";
import RepositoriesListItem from "./RepositoriesListItem";

function renderComponent() {
  const repository = {
    full_name: "facebook/react",
    language: "JavaScript",
    description:
      "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    owner: "facebook",
    html_url: "https://github.com/facebook/react",
  };
  render(<RepositoriesListItem repository={repository} />);
}

test("shows a link to the github hompage for this repository", () => {
  renderComponent();
});
