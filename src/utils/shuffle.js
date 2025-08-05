// FISHER-YATES SHUFFLE

export default function shuffle(array) {
  const result = [...array];

  // Start from the end of the array and swap each item with one before it
  for (let i = result.length - 1; i > 0; i--) {
    // Pick a random index before or at i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}
