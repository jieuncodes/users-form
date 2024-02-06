// eslint-disable-next-line no-unused-expressions
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
];
