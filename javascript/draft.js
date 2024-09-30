// MARKUP
// const results = document.querySelector("#results");

// fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
//   .then((response) => response.json())
//   .then((data) => {
//     data.Search.forEach((result) => {
//       const movieCard = `<div class='col-3'>
//         <div class="card" style="width: 18rem;">
//           <img src="${result.Poster}" class="card-img-top" alt="${result.Title} poster">
//           <div class="card-body">
//             <h2 class="card-title">${result.Title}</h2>
//             <p class="card-text">${result.Year}</p>
//             <a href="https://www.imdb.com/title/${result.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
//           </div>
//         </div>
//       </div>`;
//       results.insertAdjacentHTML("beforeend", movieCard);
//     });
//   });

// async/await
// const results = document.querySelector("#results");

// async function fetchMovies() {
//   try {
//     const response = await fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7");
//     const data = await response.json();

//     data.Search.forEach((result) => {
//       const movieCard = `
//         <div class='col-3'>
//           <div class="card" style="width: 18rem;">
//             <img src="${result.Poster}" class="card-img-top" alt="${result.Title} poster">
//             <div class="card-body">
//               <h2 class="card-title">${result.Title}</h2>
//               <p class="card-text">${result.Year}</p>
//               <a href="https://www.imdb.com/title/${result.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
//             </div>
//           </div>
//         </div>`;

//       results.insertAdjacentHTML("beforeend", movieCard);
//     });
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//   }
// }

// fetchMovies();

// TEMPLATE CLONE

// const results = document.querySelector("#results");
// const template = document.querySelector("#movieCardTemplate");

// fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
// .then(response => response.json())
// .then((data) => {
//     data.Search.forEach((movie) => {
//       const clone = template.content.cloneNode(true);
//       clone.querySelector("img").src = movie.Poster
//       clone.querySelector("img").alt = `${movie.Title} poster`;
//       clone.querySelector("h2").textContent = movie.Title
//       clone.querySelector("p").textContent = movie.Year
//       clone.querySelector("a").href = `https://www.imdb.com/title/${movie.imdbID}`
//       results.appendChild(clone);
//     });
//   })

// async await
// async function fetchMovies() {
//   try {
//     const response = await fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7");
//     const data = await response.json();

//     data.Search.forEach((movie) => {
//       const clone = template.content.cloneNode(true);
//       clone.querySelector("img").src = movie.Poster;
//       clone.querySelector("img").alt = `${movie.Title} poster`;
//       clone.querySelector("h2").textContent = movie.Title;
//       clone.querySelector("p").textContent = movie.Year;
//       clone.querySelector("a").href = `https://www.imdb.com/title/${movie.imdbID}`;
//       results.appendChild(clone);
//     });
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//   }
// }

// fetchMovies();

// const template = document.querySelector("#movieCardTemplate").innerHTML;
// fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
//   .then((response) => response.json())
//   .then((data) => {
//     data.Search.forEach((movie) => {
//       const output = Mustache.render(template, movie);
//       results.insertAdjacentHTML("beforeend", output);
//     });
//   });

import Mustache from "mustachejs";

console.log("hello from application.js");

const results = document.querySelector("#results");
const template = document.querySelector("#movieCardTemplate");

fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
  .then((response) => response.json())
  .then((data) => {
    const harryPotterData = {
      harryPotter: data.Search,
    };
    const output = Mustache.render(template.innerHTML, harryPotterData);
    results.innerHTML = output;
  });

//If you would do it in a synchronous manner, you would:

// prepare something to eat
// do the dishes
// organize your bedroom
// do whatever is next on your list.
// This means that each of these activities would take some time and all the others would have to wait till you’re done with the previous.

// This process would take a looonggg time, or better saying, much longer than if we would take the asynchronous approach.

// If we would do all the above asynchronously, it would look like:

// order something to eat
// while waiting first clean all the dirty dishes
// then organize the room
// food is here

//Asynchronous programming helps us to avoid performance bottlenecks and enhance the responsiveness of our applications. It is especially useful to execute other functions while you wait until a costly function finishes. We usually use async when we have to execute functions that will take an unpredictable amount of time to finish.

//Templating
// a pre-defined structure of HTML or other markup language—that can be reused with different data to generate dynamic content.
