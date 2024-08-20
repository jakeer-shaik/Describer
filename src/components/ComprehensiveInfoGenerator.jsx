import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { ImSpinner2 } from "react-icons/im";
import { BiRefresh } from "react-icons/bi";
import { getAIOutput } from "../services/useGenAi";

const ComprehensiveInfoGenerator = () => {
  const [topic, setTopic] = useState("");
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [result, setResult] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const prompts = {
    overview: `Please provide a detailed overview of ${topic}. Include information on its history, key concepts, current developments, major contributors, and any relevant examples or case studies.`,
    analysis: `Can you provide a thorough analysis of ${topic}? Focus on the core issues, challenges, and debates surrounding it. Include an examination of various perspectives, potential impacts, and the underlying factors driving these issues.`,
    history: `Give a comprehensive historical background of ${topic}. Detail its origins, significant events, and key milestones over time. Explain how historical developments have shaped its current state.`,
    keyConcepts: `What are the primary concepts and theories related to ${topic}? Provide a detailed explanation of each concept, including its definition, significance, and how it fits into the broader context of the topic.`,
    currentDevelopments: `Describe the latest developments and trends related to ${topic}. Include recent research findings, emerging technologies, and current issues affecting the field. Explain the implications of these developments.`,
    majorContributors: `Who are the major contributors to ${topic}? Provide detailed information about their contributions, achievements, and impact on the field. Include notable figures and their roles in advancing the topic.`,
    caseStudies: `Provide a set of relevant case studies related to ${topic}. For each case study, describe the context, objectives, methodologies, and outcomes. Explain their significance and how they illustrate key aspects of the topic.`,
    realWorldApplications: `What are some real-world applications of ${topic}? Discuss various use cases, practical implementations, and the benefits or challenges associated with applying the topic in different contexts.`,
    comprehensiveView: `Please give a detailed and comprehensive view of ${topic}. Cover its history, key concepts, current developments, major contributors, case studies, and practical applications. Ensure the information is thorough and well-organized.`,
  };

  const handleSubmit = async () => {
    if (topic && selectedPrompt) {
      setLoading(true);
      setResult("");
      setPrompt(prompts[selectedPrompt]);
      await getAIOutput(prompts[selectedPrompt], file, setResult, setLoading);
      setLoading(false);
    } else {
      alert("Please enter a topic and select the type of information.");
    }
  };

  const handleNewTask = () => {
    setPrompt("");
    setResult("");
    setSelectedPrompt("");
    setTopic("");
  };

  return (
    <div className="min-h-screen bg-gray-100 lg:p-8 mt-12">
      <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 max-w-4xl mx-auto w-full">
        <h1 className="text-2xl lg:text-3xl font-bold mb-6 text-center">
          Comprehensive Information
        </h1>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Enter the topic:
          </label>
          <input
            type="text"
            placeholder="Type the topic..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Select the type of information you want:
          </label>
          <select
            id="infoType"
            disabled={!topic}
            className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={selectedPrompt}
            onChange={(e) => setSelectedPrompt(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="overview">Overview</option>
            <option value="analysis">Analysis</option>
            <option value="history">Historical Background</option>
            <option value="keyConcepts">Key Concepts</option>
            <option value="currentDevelopments">Current Developments</option>
            <option value="majorContributors">Major Contributors</option>
            <option value="caseStudies">Case Studies</option>
            <option value="realWorldApplications">
              Real-World Applications
            </option>
            <option value="comprehensiveView">Comprehensive View</option>
          </select>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-4 mb-6">
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
              <AiOutlineSend className="text-xl mr-2" />
              Generate Information
            </button>
          )}
        </div>
        {result && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Result:</h2>
            <p className="text-gray-700 whitespace-pre-line">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComprehensiveInfoGenerator;
