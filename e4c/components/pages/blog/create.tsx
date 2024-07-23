"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

function TextEditor() {
  const [editorHtml, setEditorHtml] = useState("");

  const handleChange = (content: string) => {
    setEditorHtml(content);
    console.log(content);
  };

  return (
    <>
      <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        theme="snow"
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["link", "image", "video"],
            ["clean"],
            [{ align: [] }],
            [{ color: [] }, { background: [] }],
            ["code-block"],
          ],
        }}
        formats={[
          "header",
          "font",
          "size",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "link",
          "image",
          "video",
          "align",
          "color",
          "background",
          "code-block",
        ]}
      />
      <div dangerouslySetInnerHTML={{ __html: editorHtml }} />
    </>
  );
}

export default TextEditor;
