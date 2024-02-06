// eslint-disable-next-line no-unused-expressions
[
  {
    content:
      "# Query  Functions\n\nAll query functions are accessed through the `screen` object in a test.  These query functions *always* begin with one of the following names: `getBy`, `getAllBy`, `queryBy`, `queryAllBy`, `findBy`, `findAllBy`. \n\n| Start of Function Name | Examples                             |\n|------------------------|--------------------------------------|\n| getBy                  | getByRole, getByText                 |\n| getAllBy               | getAllByText, getByDisplayValue      |\n| queryBy                | queryByDisplayValue, queryByTitle    |\n| queryAllBy             | queryAllByTitle, queryAllByText      |\n| findBy                 | findByRole, findBytext               |\n| findAllBy              | findAllByText, findAllByDisplayValue |\n\nThese names indicate the following:\n\n1. Whether the function will return an element or an array of elements\n2. What happens if the function finds 0, 1, or > 1 of the targeted element\n3. Whether the function runs instantly (synchronously) or looks for an element over a span of time (asynchronously)\n\n\n### Looking for a Single Element?\n\n| Name    | 0 matches | 1 match | > 1 match | Notes                                          |\n|---------|-----------|---------|-----------|------------------------------------------------|\n| getBy   | Throw     | Element | Throw     |                                                |\n| queryBy | null      | Element | Throw     |                                                |\n| findBy  | Throw     | Element | Throw     | Looks for an element over the span of 1 second |\n\n\n### Looking for Multiple Elements?\n\n| Name       | 0 matches | 1 match   | > 1 match | Notes                                        |\n|------------|-----------|-----------|-----------|----------------------------------------------|\n| getAllBy   | Throw     | []Element | []Element |                                              |\n| queryAllBy | [ ]       | []Element | []Element |                                              |\n| findAllBy  | Throw     | []Element | []Element | Looks for elements over the span of 1 second |\n\n\n### When to use each\n\n| Goal of test                           | Use                 |\n|----------------------------------------|---------------------|\n| Prove an element exists                | getBy, getAllBy     |\n| Prove an element does **not** exist        | queryBy, queryAllBy |\n| Make sure an element eventually exists | findBy, findAllBy   |",
    type: "text",
    id: "aar6f",
  },
  {
    content:
      "import { render, screen } from '@testing-library/react';\n\nfunction ColorList() {\n  return (\n    <ul> \n      <li>Red</li> \n      <li>Blue</li>\n      <li>Green</li>\n    </ul>\n  );\n}\n\nrender(<ColorList />);",
    type: "code",
    id: "6hbd7",
  },
  {
    content:
      "test('getBy, queryBy, findBy finding 0 elements', async () => {\n  render(<ColorList />);\n\n  expect(\n    () => screen.getByRole('textbox')\n  ).toThrow();\n\n  expect(screen.queryByRole('textbox')).toEqual(null);\n\n  let errorThrown = false;\n  try {\n    await screen.findByRole('textbox');\n  } catch (err) {\n    errorThrown = true;\n  }\n  expect(errorThrown).toEqual(true);\n});\n\n\n\n",
    type: "code",
    id: "4y5wa",
  },
  {
    content:
      "test('getBy, queryBy, findBy when they find 1 element', async () => {\n  render(<ColorList />);\n\n  expect(\n    screen.getByRole('list')\n  ).toBeInTheDocument();\n  expect(\n    screen.queryByRole('list')\n  ).toBeInTheDocument()\n  expect(\n    await screen.findByRole('list')\n  ).toBeInTheDocument()\n});",
    type: "code",
    id: "bqg3r",
  },
  {
    content:
      "test('getBy, queryBy, findBy when finding > 1 elements', async () => {\n  render(<ColorList />);\n\n  expect(\n    () => screen.getByRole('listitem')\n  ).toThrow();\n\n  expect(\n    () => screen.queryByRole('listitem')\n  ).toThrow();\n\n  let errorThrown = false;\n  try {\n    await screen.findByRole('listitem');\n  } catch (err) {\n    errorThrown = true;\n  }\n  expect(errorThrown).toEqual(true);\n});",
    type: "code",
    id: "jlz7y",
  },
];
