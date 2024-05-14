import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
const CompilationOutput = () => {
  return <div>Hello</div>;
};
const CodeEditor = (options, userLang) => {
  const [userCode, setUserCode] = useState(``);
  return (
    <Editor
      options={options}
      height="calc(100vh - 50px)"
      width="50%"
      // Decoded theme={userTheme}
      language={userLang}
      defaultLanguage="solidity"
      defaultValue="# Enter your code here"
      onChange={(value) => {
        setUserCode(value);
      }}
    />
  );
};
const App = () => {
  //Decoded State for code input
  const [code, setCode] = useState("");

  //Decoded:= State for selected language
  const [selectedLanguage, setSelectedLanguage] = useState("");

  // State for selected difficulty
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  // Function to handle code change
  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  // Function to handle language selection
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  // Function to handle difficulty selection
  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  // Function to compile code
  const compileCode = () => {
    // Logic to compile code based on selectedLanguage and selectedDifficulty
    // Display compilation output to user
  };

  return (
    <div className="app">
      <h1>Web-Based Compiler</h1>
      {/* Code Editor Component */}
      {/* Language Selection */}
      <div className="language-selection">
        <label>Select Language:</label>
        <select
          value={selectedLanguage}
          onChange={(e) => handleLanguageSelect(e.target.value)}
        >
          <option value="">Select Language</option>
          <option value="solidity">Solidity</option>
          <option value="rust">Rust</option>
          <option value="motoko">Motoko</option>
        </select>
      </div>
      {/* Difficulty Selection */}
      <div className="difficulty-selection">
        <label>Select Difficulty:</label>
        <select
          value={selectedDifficulty}
          onChange={(e) => handleDifficultySelect(e.target.value)}
        >
          <option value="">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button onClick={compileCode}>Compile</button>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <CodeEditor code={code} onChange={handleCodeChange} />
        {/* Compilation Output Display */}
        <CompilationOutput />
      </div>
    </div>
  );
};

export default App;
