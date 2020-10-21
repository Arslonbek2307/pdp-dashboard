import React from "react";
import { Degrees } from "./components/Degrees";
import Message from "./components/Message";

function App() {
  return (
    <>
      <Degrees />
      <Message
        isFileExist={true}
        fileData={{
          fileName: "2-topshiriq.zip",
          fileSize: "3.1",
        }}
        isMyMessage
        captionText="Assalomu Alekum darslarga xush kelibsiz"
      />
    </>
  );
}

export default App;
