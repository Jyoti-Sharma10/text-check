function analyzeText(text) {
    // Perform word frequency analysis here and return the results
    // You can use regular expressions and JavaScript data structures to count word frequencies
    // For example, you can split 'text' into words and count their occurrences
    // Example code:
    const words = text.toLowerCase().split(/\s+/);
    const wordCounts = {};
  
    words.forEach((word) => {
      if (word in wordCounts) {
        wordCounts[word]++;
      } else {
        wordCounts[word] = 1;
      }
    });
  
    // Sort wordCounts and return the top 5 occurring words
    const sortedWords = Object.keys(wordCounts).sort((a, b) => wordCounts[b] - wordCounts[a]);
    const top5Words = sortedWords.slice(0, 5);
  
    return { wordFrequencies: top5Words };
  }
  
  module.exports = {
    analyzeText,
  };