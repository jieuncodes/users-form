[
  {
    content:
      'import { render, screen } from \'@testing-library/react\';\n\nfunction RoleExample() {\n  return (\n    <div>\n      <a href="/">Link</a>\n      <button>Button</button>\n      <footer>Contentinfo</footer>\n      <h1>Heading</h1>\n      <header>Banner</header>\n      <img alt="description" /> Img\n      <input type="checkbox" /> Checkbox\n      <input type="number" /> Spinbutton\n      <input type="radio" /> Radio\n      <input type="text" /> Textbox\n      <li>Listitem</li>\n      <ul>Listgroup</ul>\n    </div>\n  );\n}\n\nrender(<RoleExample />);\n',
    type: "code",
    id: "6gs6v",
  },
  {
    content:
      "test('can find elements by role', () => {\n  render(<RoleExample />);\n\n  const roles = [\n    'link',\n    'button',\n    'contentinfo',\n    'heading',\n    'banner',\n    'img',\n    'checkbox',\n    'spinbutton',\n    'radio',\n    'textbox',\n    'listitem',\n    'list'\n  ];\n\n  for (let role of roles) {\n    const el = screen.getByRole(role);\n\n    expect(el).toBeInTheDocument();\n  }\n});",
    type: "code",
    id: "bttjn",
  },
  {
    content:
      "function AccessibleName() {\n  return (\n    <div>\n      <button>Submit</button>\n      <button>Cancel</button>\n    </div>\n  );\n}\nrender(<AccessibleName />);",
    type: "code",
    id: "cjrkl",
  },
  {
    content:
      "test('can select by accessible name', () => {\n  render(<AccessibleName />);\n\n  const submitButton = screen.getByRole('button', {\n    name: /submit/i\n  });\n  const cancelButton = screen.getByRole('button', {\n    name: /cancel/i\n  });\n\n  expect(submitButton).toBeInTheDocument();\n  expect(cancelButton).toBeInTheDocument();\n});",
    type: "code",
    id: "e6dv4",
  },
  {
    content:
      'function MoreNames() {\n  return (\n    <div>\n      <label htmlFor="email">Email</label>\n      <input id="email" />\n\n      <label htmlFor="search">Search</label>\n      <input id="search" />\n    </div>\n  );\n}\nrender(<MoreNames />);\n',
    type: "code",
    id: "9a5tc",
  },
  {
    content:
      "test('shows an email and search input', () => {\n  render(<MoreNames />);\n\n  const emailInput = screen.getByRole('textbox', {\n    name: /email/i\n  });\n  const searchInput = screen.getByRole('textbox', {\n    name: /search/i\n  });\n\n  expect(emailInput).toBeInTheDocument();\n  expect(searchInput).toBeInTheDocument();\n});\n\n",
    type: "code",
    id: "sbtia",
  },
];
