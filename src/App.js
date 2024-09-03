import React, { useState } from "react";
import { marked } from "marked";
import './App.css';

// Set the marked options to interpret carriage returns as <br> elements
marked.setOptions({
  breaks: true,
});

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <textarea id="editor" value={markdown} onChange={handleChange} />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
}

const initialMarkdown = `# Heading 1
## Heading 2
[Link](https://ishaqyudha.vercel.app)
\`Inline code\`

\`\`\`
Code block
\`\`\`

- List item
> Blockquote

![Image](https://via.placeholder.com/150)

**Bold text**

Line one  
Line two (this line is followed by two spaces, which creates a line break)
`;

export default App;
