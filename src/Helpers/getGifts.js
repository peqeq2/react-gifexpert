

export const getGifts = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=PixCsLWvSQvaQSauqq9dxfq39aue8IdK&q=${ category }&limit=10&width=200&height=200`;
  const resp = await fetch(url);
  const { data } = await resp.json()

  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  return gifs
}
