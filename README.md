# AI Code Review & Performance Analysis Agent

An intelligent code review and performance analysis agent powered by Google's Gemini AI model that automatically analyzes code changes and provides comprehensive, actionable feedback with a special focus on **performance optimization**. Built with Bun, TypeScript, and the AI SDK.

## 🚀 Features

- **Automated Code Review**: Analyzes git changes and provides detailed feedback
- **Performance Analysis**: **NEW!** Identifies bottlenecks, memory leaks, and inefficient algorithms
- **Memory Leak Detection**: Automatically detects potential memory leaks and resource management issues
- **Algorithm Complexity Analysis**: Analyzes time and space complexity of code
- **Multiple Review Styles**: Supports conventional, simple, and detailed commit message generation
- **Git Integration**: Seamlessly works with your existing git workflow
- **Markdown Output**: Generates formatted review reports
- **AI-Powered**: Uses Google's Gemini 2.5 Flash model for intelligent analysis
- **TypeScript Support**: Fully typed with Zod schema validation

## 🛠️ Tools & Capabilities

The agent comes equipped with six powerful tools:

1. **File Change Analysis** - Detects and analyzes all changes in your repository
2. **Commit Message Generation** - Creates appropriate commit messages based on changes
3. **Review Documentation** - Writes comprehensive reviews to markdown files
4. **Performance Analysis** - **NEW!** Analyzes individual files for performance issues and bottlenecks
5. **Directory Performance Scan** - **NEW!** Scans entire directories for performance problems
6. **Algorithm Complexity Analysis** - **NEW!** Analyzes code complexity and optimization opportunities

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

The agent focuses on these key review areas with enhanced performance analysis:

- ✅ **Correctness** - Bug detection and logic validation
- 📖 **Clarity** - Code readability and documentation
- 🔧 **Maintainability** - Code structure and complexity
- 📏 **Consistency** - Adherence to coding standards
- ⚡ **Performance Analysis** - **ENHANCED!** Comprehensive performance optimization:
  - 🔍 **Bottleneck Detection** - Identifies slow operations and inefficient code
  - 🧠 **Memory Leak Detection** - Finds unclosed resources and memory issues
  - 📊 **Algorithm Complexity** - Analyzes O(n), O(n²) complexity and optimization
  - 🚀 **Optimization Suggestions** - Recommends better data structures and patterns
- 🔒 **Security** - Vulnerability assessment
- 🧪 **Testing** - Test coverage and quality
- 📈 **Scalability** - Robustness and error handling

## 📝 Output Example

The agent generates comprehensive reviews with performance analysis:

```markdown
# Code Review & Performance Analysis

**Generated on:** 2024-01-15T10:30:00.000Z

## File: src/utils/validator.ts

✅ **Good**: Clear function naming and proper TypeScript typing

🔍 **Suggestion**: Consider adding input validation for edge cases:
```typescript
if (!input || typeof input !== 'string') {
  throw new Error('Invalid input provided');
}
```

⚠️ **Performance Issues Detected**:
- **Memory Leak Risk**: Event listener added without cleanup (line 45)
- **Algorithm Complexity**: O(n²) nested loops detected (lines 23-28)
- **Inefficient Operation**: Multiple array.includes() calls - consider using Set

🚀 **Performance Optimizations**:
```typescript
// Instead of: array.includes(item1) && array.includes(item2)
const itemSet = new Set(array);
if (itemSet.has(item1) && itemSet.has(item2)) { ... }

// Instead of nested loops, consider:
const result = data.flatMap(item => item.children);
```

📊 **Performance Score**: 65/100 (Needs optimization)
```

## 🔍 Performance Analysis Features

### Memory Leak Detection
- Identifies unclosed event listeners, timers, and resources
- Detects circular references and memory accumulation patterns
- Suggests proper cleanup strategies

### Algorithm Complexity Analysis
- Calculates time and space complexity (O(n), O(n²), etc.)
- Identifies nested loops and expensive operations
- Recommends more efficient algorithms and data structures

### Performance Bottleneck Detection
- Finds inefficient DOM manipulations
- Identifies expensive operations and slow patterns
- Suggests optimization strategies and caching opportunities

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
