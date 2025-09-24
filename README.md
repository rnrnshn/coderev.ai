# AI Code Review Agent

An intelligent code review agent powered by Google's Gemini AI model that automatically analyzes code changes and provides comprehensive, actionable feedback. Built with Bun, TypeScript, and the AI SDK.

## 🚀 Features

- **Automated Code Review**: Analyzes git changes and provides detailed feedback
- **Multiple Review Styles**: Supports conventional, simple, and detailed commit message generation
- **Git Integration**: Seamlessly works with your existing git workflow
- **Markdown Output**: Generates formatted review reports
- **AI-Powered**: Uses Google's Gemini 2.5 Flash model for intelligent analysis
- **TypeScript Support**: Fully typed with Zod schema validation

## 🛠️ Tools & Capabilities

The agent comes equipped with three powerful tools:

1. **File Change Analysis** - Detects and analyzes all changes in your repository
2. **Commit Message Generation** - Creates appropriate commit messages based on changes
3. **Review Documentation** - Writes comprehensive reviews to markdown files

## 📋 Prerequisites

- [Bun](https://bun.com) runtime (v1.2.22 or later)
- Node.js project with git repository
- Google AI API key (for Gemini model access)

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd my-agent

# Install dependencies
bun install
```

### Configuration

1. Set up your Google AI API key:
   ```bash
   export GOOGLE_GENERATIVE_AI_API_KEY="your-api-key-here"
   ```

2. Update the target directory in `index.ts`:
   ```typescript
   await codeReviewAgent(
     "Review the code changes in '../your-project' directory, make your reviews and suggestions file by file"
   );
   ```

### Running the Agent

```bash
# Run the code review agent
bun run index.ts
```

## 📖 Usage Examples

### Basic Code Review
```bash
bun run index.ts
```

The agent will:
1. Analyze all git changes in the specified directory
2. Review each file for correctness, clarity, and best practices
3. Generate actionable feedback and suggestions
4. Optionally create a markdown report

### Custom Review Styles

The agent supports different commit message styles:
- **Conventional**: `feat: add new functionality`
- **Simple**: `Update 3 files (15 changes)`
- **Detailed**: `Code changes: +2 new files, ~1 modified files`

## 🏗️ Project Structure

```
my-agent/
├── index.ts          # Main application entry point
├── tools.ts          # AI tool definitions and implementations
├── prompts.ts        # System prompts for the AI agent
├── package.json      # Project dependencies and configuration
├── tsconfig.json     # TypeScript configuration
└── README.md         # This file
```

## 🔧 Dependencies

- **@ai-sdk/google**: Google AI SDK integration
- **ai**: Vercel AI SDK for tool management
- **simple-git**: Git operations and diff analysis
- **zod**: Schema validation and type safety

## 🤖 AI Agent Capabilities

The agent focuses on these key review areas:

- ✅ **Correctness** - Bug detection and logic validation
- 📖 **Clarity** - Code readability and documentation
- 🔧 **Maintainability** - Code structure and complexity
- 📏 **Consistency** - Adherence to coding standards
- ⚡ **Performance** - Optimization opportunities
- 🔒 **Security** - Vulnerability assessment
- 🧪 **Testing** - Test coverage and quality
- 📈 **Scalability** - Robustness and error handling

## 📝 Output Example

The agent generates reviews like:

```markdown
# Code Review

**Generated on:** 2024-01-15T10:30:00.000Z

## File: src/utils/validator.ts

✅ **Good**: Clear function naming and proper TypeScript typing

🔍 **Suggestion**: Consider adding input validation for edge cases:
```typescript
if (!input || typeof input !== 'string') {
  throw new Error('Invalid input provided');
}
```

⚠️ **Performance**: The regex could be compiled once and reused for better performance.
```

## 🚀 Advanced Usage

### Custom Review Prompts

Modify the system prompt in `prompts.ts` to customize the agent's review style and focus areas.

### Integration with CI/CD

The agent can be integrated into your CI/CD pipeline:

```bash
# In your CI script
bun run index.ts > review-output.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run the agent on your changes: `bun run index.ts`
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Built with [Bun](https://bun.com) - the fast JavaScript runtime
- Powered by [Google Gemini](https://ai.google.dev/) AI model
- Uses [Vercel AI SDK](https://sdk.vercel.ai/) for tool management
