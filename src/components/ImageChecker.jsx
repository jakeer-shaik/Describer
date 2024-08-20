import React, { useState } from "react";
import { AiOutlineUpload, AiOutlineFileSearch } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { ImSpinner2 } from "react-icons/im";
import { getAIOutput } from "../services/useGenAi";

const ImageAnalyser = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [filePreview, setFilePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const simulatedSuggestions = [
    "Identify the main objects in the image.",
    "What is the dominant color in the image?",
    "Is there any text visible in the image? If yes, describe it.",
    "Analyze the image and suggest its possible use case.",
    "Does the image appear to be taken indoors or outdoors?",
  ];

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFilePreview(URL.createObjectURL(selectedFile));
    fetchPromptSuggestions();
  };

  const fetchPromptSuggestions = () => {
    setSuggestions(simulatedSuggestions);
  };

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleNewTask = () => {
    setFile(null);
    setPrompt("");
    setResult("");
    setFilePreview(null);
    setSuggestions([]);
  };

  const handleSubmit = async () => {
    if (!prompt) {
      alert("Please enter a prompt.");
      return;
    }
    setSuggestions([]);
    await getAIOutput(prompt, file, setResult, setLoading);
  };

  const handleSuggestionClick = (suggestion) => {
    setPrompt(suggestion);
  };

  return (
    <div className="min-h-screen bg-gray-100 lg:p-8 mt-12">
      <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 max-w-5xl mx-auto w-full">
        <h1 className="text-2xl lg:text-3xl font-bold mb-6 text-center text-gray-800">
          Image Analyser
        </h1>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            {file ? "Uploaded Image" : "Upload an Image"}
          </label>
          {!file && (
            <div className="flex items-center justify-center w-full mb-4">
              <label className="flex flex-col items-center px-6 py-4 bg-white text-blue-600 rounded-lg shadow-lg border border-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white transition-all">
                <AiOutlineUpload className="w-10 h-10" />
                <span className="mt-2 text-lg leading-normal">
                  Select a file
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          )}

          {filePreview && (
            <div className="flex justify-center mb-4">
              <img
                src={filePreview}
                alt="Uploaded Preview"
                className="w-full max-w-md h-auto object-contain rounded-lg shadow-md"
              />
            </div>
          )}
        </div>
        {suggestions.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Prompt Suggestions:
            </h2>
            <ul className="list-disc pl-5">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:underline mb-1"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="mb-4 lg:w-3/4 w-full">
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Enter your prompt:
            </label>
            <input
              type="text"
              placeholder="Describe the image..."
              value={prompt}
              onChange={handlePromptChange}
              className="shadow-md appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center justify-center lg:w-1/4 w-full mt-4 lg:mt-0">
            {loading ? (
              <div className="flex items-center text-blue-600">
                <ImSpinner2 className="w-6 h-6 animate-spin" />
                <span className="ml-2 text-lg font-semibold">Loading...</span>
              </div>
            ) : result ? (
              <button
                onClick={handleNewTask}
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <BiRefresh className="text-xl mr-2" />
                New Task
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <AiOutlineFileSearch className="text-xl mr-2" />
                Check Image
              </button>
            )}
          </div>
        </div>
        {result && (
          <div className="mt-6 bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Result:
            </h2>
            <p className="text-gray-700 whitespace-pre-line">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageAnalyser;
