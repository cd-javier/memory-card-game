async function fetchImage(keyword) {
  const data = await fetch(
    'https://api.tvmaze.com/singlesearch/shows?q=' + keyword
  );
  const processedData = await data.json();
  return processedData.image.medium;
}

export default async function loadDeck(deck, cb) {
  const newDeck = await Promise.all(
    deck.map(async (keyword) => {
      const img = await fetchImage(keyword);
      return { keyword, img };
    })
  );

  cb(newDeck);
}