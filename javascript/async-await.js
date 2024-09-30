async function fetchMovies() {
  try {
    const response = await fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7");
    const data = await response.json();
    console.log(data);
    // do something with the data
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

fetchMovies();
