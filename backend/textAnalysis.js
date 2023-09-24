function analyzeText(text) {
    // Check if the text is empty or contains no words
    if (!text.trim()) {
      return {
        top5Words: [],
        top5CooccurringWordPairs: [],
        wordFrequencies: {},
      };
    }
  
    const words = text
    .toLowerCase() // Convert to lowercase to ensure case-insensitive counting
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '') // Remove punctuation
    .split(/\s+/); // Split by whitespace

    const wordFrequencies = new Map();
    const cooccurringPairs = new Map();
  
    // Count word frequencies and co-occurring pairs
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      // Count word frequencies
      if (wordFrequencies.has(word)) {
        wordFrequencies.set(word, wordFrequencies.get(word) + 1);
      } else {
        wordFrequencies.set(word, 1);
      }
  
      // Count co-occurring pairs
      if (i < words.length - 1) {
        const pair = `${word} ${words[i + 1]}`;
        console.log("xyz", pair);
        if (cooccurringPairs.has(pair)) {
          cooccurringPairs.set(pair, cooccurringPairs.get(pair) + 1);
        } else {
          cooccurringPairs.set(pair, 1);
        }
      }
    }
  
    // Sort word frequencies
    const sortedWordFrequencies = [...wordFrequencies.entries()].sort(
      (a, b) => b[1] - a[1]
    );
  
    // Get the top 5 occurring words
    const top5Words = sortedWordFrequencies.slice(0, 5).map((entry) => entry[0]);
  
    // Sort co-occurring pairs
    const sortedCooccurringPairs = [...cooccurringPairs.entries()].sort(
      (a, b) => b[1] - a[1]
    );
  
    // Get the top 5 co-occurring word pairs
    const top5CooccurringWordPairs = sortedCooccurringPairs
      .slice(0, 5)
      .map((entry) => entry[0]);
  
    // Convert wordFrequencies Map to a regular object
    const wordFrequenciesObject = Object.fromEntries(wordFrequencies);
  
    return {
      top5Words,
      top5CooccurringWordPairs,
      wordFrequencies: wordFrequenciesObject,
    };
  }
  
  module.exports = {
    analyzeText,
  };
  