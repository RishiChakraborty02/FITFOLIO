const news = document.querySelector(".news");

const newsItems = async () => {
  const news1 = await fetch(
    "https://newsapi.org/v2/everything?q=bitcoin&apiKey=94afde3c4e9840fb85e17829d69d03e9"
  );
  console.log(news1);
};
