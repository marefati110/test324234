import Editor from "@monaco-editor/react";

import { Container } from "./styled";

const jsCode = [
  '"use strict";',
  "function Person(age) {",
  "	if (age) {",
  "		this.age = age;",
  "	}",
  "}",
  "Person.prototype.getAge = function () {",
  "	return this.age;",
  "};"
].join("\n");

const EDITOR_OPTIONS = { glyphMargin: true };

export default function IndexPage() {
  function handleEditorMount(editor, monaco) {
    const decorations = editor.deltaDecorations(
      [],
      [
        {
          range: new monaco.Range(3, 1, 3, 1),
          options: {
            isWholeLine: true,
            className: "myContentClass",
            glyphMarginClassName: "myGlyphMarginClass"
          }
        }
      ]
    );

    // You can now use `decorations` to change or remove the decoration
  }
  return (
    <Container>
      <Editor
        language="javascript"
        value={jsCode}
        height="90vh"
        onMount={handleEditorMount}
        options={EDITOR_OPTIONS}
      />
    </Container>
  );
}
