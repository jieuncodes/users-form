import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("desplays the primary language of the repository", () => {
  const repository = {
    language: "JavaScript",
    stargazers_count: 100,
    open_issues: 10,
    forks: 20,
  };
  render(<RepositoriesSummary repository={repository} />);

  const language = screen.getByText("JavaScript");

  expect(language).toBeInTheDocument();
});
