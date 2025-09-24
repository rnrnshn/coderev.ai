import { stepCountIs, streamText } from "ai";
import { google } from "@ai-sdk/google";
import { SYSTEM_PROMPT } from "./prompts";
import { 
  getFileChangesInDirectoryTool, 
  generateCommitMessageTool, 
  writeReviewToMarkdownTool,
  analyzeFilePerformanceTool,
  analyzeDirectoryPerformanceTool,
  analyzeAlgorithmComplexityTool
} from "./tools";

const codeReviewAgent = async (prompt: string) => {
  const result = streamText({
    model: google("models/gemini-2.5-flash"),
    prompt,
    system: SYSTEM_PROMPT,
    tools: {
      getFileChangesInDirectoryTool: getFileChangesInDirectoryTool,
      generateCommitMessageTool: generateCommitMessageTool,
      writeReviewToMarkdownTool: writeReviewToMarkdownTool,
      analyzeFilePerformanceTool: analyzeFilePerformanceTool,
      analyzeDirectoryPerformanceTool: analyzeDirectoryPerformanceTool,
      analyzeAlgorithmComplexityTool: analyzeAlgorithmComplexityTool,
    },
    stopWhen: stepCountIs(10),
  });

  for await (const chunk of result.textStream) {
    process.stdout.write(chunk);
  }
};

// Specify which directory the code review agent should review changes in your prompt
await codeReviewAgent(
  "Review the code changes in '../my-agent' directory with a focus on performance analysis. Analyze for bottlenecks, memory leaks, and inefficient algorithms. Make your reviews and suggestions file by file with detailed performance insights."
);
