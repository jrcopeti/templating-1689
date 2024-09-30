
// String Interpolation

// const results = document.querySelector('#results');

// fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
//   .then(response => response.json())
//   .then((data) => {
//     data.Search.forEach((result) => {
//       // First, we build our HTML element
//       const movieCard = `<div class='col-3'>
//         <div class="card">
//           <img src="${result.Poster}" class="card-img-top" alt="${result.Title} poster">
//           <div class="card-body">
//             <h2 class="card-title">${result.Title}</h2>
//             <p class="card-text">${result.Year}</p>
//             <a href="https://www.imdb.com/title/${result.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
//           </div>
//         </div>
//     </div>`;
//     results.insertAdjacentHTML('beforeend', movieCard); // Then, we insert it into the DOM
//     })
//   })


// Template with cloneNode

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


Mustache
import Mustache from "mustachejs";

console.log("Hello from application.js");

const results = document.querySelector("#results");
console.log("results", results);
const template = document.querySelector("#movieCardTemplate");
fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
  .then((response) => response.json())
  .then((data) => {
    const movieData = {
      harryPotter: data.Search,
    };
    const output = Mustache.render(template.innerHTML, movieData);
    results.innerHTML = output;
  });


// Vue.js
// import { createApp } from "vue";
// createApp({
//   data() {
//     return {
//       message: "Hello from Vue.JS"
//     }
//   }
// }).mount('#results')
