"use client"; // 👈 Needed because monaco-editor is client-side only

import React from "react";
import Editor from "@monaco-editor/react";

const Page = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Monaco Editor Example</h1>

      <div className="border rounded-md overflow-hidden">
        <Editor
          height="400px"
          defaultLanguage="javascript"
          defaultValue="// Write your code here..."
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: { enabled: false },
          }}
        />
      </div>
    </div>
  );
};

export default Page;
