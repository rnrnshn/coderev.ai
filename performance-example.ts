// Performance Analysis Example
// This file demonstrates various performance issues that the agent can detect

// ❌ Memory Leak Example
class MemoryLeakExample {
  private listeners: Array<() => void> = [];
  
  constructor() {
    // Memory leak: Event listener added without cleanup
    document.addEventListener('click', this.handleClick.bind(this));
    
    // Memory leak: setInterval without clearInterval
    setInterval(() => {
      console.log('Running...');
    }, 1000);
  }
  
  private handleClick() {
    console.log('Clicked');
  }
  
  // Missing cleanup methods
}

// ❌ Inefficient Algorithm Example
function inefficientSearch(items: string[], target: string): boolean {
  // O(n²) complexity - nested loops
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (items[i] === target && items[j] === target) {
        return true;
      }
    }
  }
  return false;
}

// ❌ Performance Anti-patterns
function performanceAntiPatterns() {
  const data = [1, 2, 3, 4, 5];
  
  // Inefficient: Multiple array operations
  const result = data
    .filter(x => x > 2)
    .map(x => x * 2)
    .filter(x => x < 10);
  
  // Inefficient: Multiple includes calls
  if (data.includes(1) && data.includes(2) && data.includes(3)) {
    console.log('Found all');
  }
  
  // Inefficient: innerHTML manipulation
  document.getElementById('container')!.innerHTML = '<div>New content</div>';
  
  // Inefficient: setTimeout with 0 delay
  setTimeout(() => {
    console.log('Deferred execution');
  }, 0);
  
  // Inefficient: JSON deep cloning
  const cloned = JSON.parse(JSON.stringify(data));
  
  return result;
}

// ❌ Large Function (over 50 lines)
function largeFunction() {
  const data = [];
  for (let i = 0; i < 1000; i++) {
    data.push(i);
  }
  
  const processed = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
      processed.push(data[i] * 2);
    }
  }
  
  const filtered = [];
  for (let i = 0; i < processed.length; i++) {
    if (processed[i] > 100) {
      filtered.push(processed[i]);
    }
  }
  
  const sorted = [];
  for (let i = 0; i < filtered.length; i++) {
    let min = filtered[i];
    let minIndex = i;
    for (let j = i + 1; j < filtered.length; j++) {
      if (filtered[j] < min) {
        min = filtered[j];
        minIndex = j;
      }
    }
    sorted.push(min);
  }
  
  const result = [];
  for (let i = 0; i < sorted.length; i++) {
    result.push(sorted[i] + 10);
  }
  
  return result;
}

// ✅ Optimized Examples
class OptimizedExample {
  private listeners: Array<() => void> = [];
  private intervalId?: NodeJS.Timeout;
  
  constructor() {
    // Proper event listener management
    const clickHandler = this.handleClick.bind(this);
    document.addEventListener('click', clickHandler);
    this.listeners.push(() => document.removeEventListener('click', clickHandler));
    
    // Proper interval management
    this.intervalId = setInterval(() => {
      console.log('Running...');
    }, 1000);
  }
  
  private handleClick() {
    console.log('Clicked');
  }
  
  // Proper cleanup
  destroy() {
    this.listeners.forEach(cleanup => cleanup());
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

// ✅ Efficient Algorithm
function efficientSearch(items: string[], target: string): boolean {
  // O(n) complexity - single loop
  const itemSet = new Set(items);
  return itemSet.has(target);
}

// ✅ Performance Best Practices
function performanceBestPractices() {
  const data = [1, 2, 3, 4, 5];
  
  // Efficient: Single reduce operation
  const result = data.reduce((acc, x) => {
    if (x > 2 && x * 2 < 10) {
      acc.push(x * 2);
    }
    return acc;
  }, [] as number[]);
  
  // Efficient: Set for O(1) lookups
  const dataSet = new Set(data);
  if (dataSet.has(1) && dataSet.has(2) && dataSet.has(3)) {
    console.log('Found all');
  }
  
  // Efficient: textContent instead of innerHTML
  const container = document.getElementById('container');
  if (container) {
    container.textContent = 'New content';
  }
  
  // Efficient: requestAnimationFrame instead of setTimeout
  requestAnimationFrame(() => {
    console.log('Deferred execution');
  });
  
  // Efficient: structuredClone for deep cloning
  const cloned = structuredClone(data);
  
  return result;
}

export { 
  MemoryLeakExample, 
  OptimizedExample,
  inefficientSearch,
  efficientSearch,
  performanceAntiPatterns,
  performanceBestPractices,
  largeFunction
};
