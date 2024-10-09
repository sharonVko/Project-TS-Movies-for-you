
import {movies} from "./movies"; /* import movie database  */
console.log(movies);
/* searchbar */
type movie = [string, string, string, string, string, string [], string]


const moviesearchInput = document.querySelector('#movieSearchInput') as HTMLInputElement;
const searchBtn = document.querySelector('#searchBtn') as HTMLInputElement;
const yearUp = document.querySelector('#yearUp') as HTMLInputElement;
const yearDown = document.querySelector('#yearDown') as HTMLInputElement;
const bestRate = document.querySelector('#searchBtn') as HTMLInputElement;

/* movie card content */
const movieTitle = document.querySelector('#movieTitle') as HTMLElement;
const releaseYear = document.querySelector('#releaseYear') as HTMLElement;
const director = document.querySelector('#director') as HTMLElement;
const movieLength = document.querySelector('#movieLength') as HTMLElement;
const genre = document.querySelector('#genre') as HTMLElement;
const rating = document.querySelector('#rating') as HTMLElement;

console.log(moviesearchInput);
console.log(searchBtn);
console.log(yearUp);
console.log(yearDown);
console.log(bestRate);

console.log(movieTitle);
console.log(releaseYear);
console.log(director);
console.log(movieLength);
console.log(genre);
console.log(rating);

// elvis operator --> ? checking truthy or falsy 
searchBtn?.addEventListener('click', () => {
    //  checking the  event 
    
    const searchValue = moviesearchInput?.value;

console.log(searchValue);
})

/* const moviecardContent =  */

/* const moviecardRender = (array: string[]) => {
     
    movieTitle.innerHTML = `` 
}*/

