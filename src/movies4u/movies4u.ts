
import {movies} from "./movies"; /* import movie database  */
console.log(movies);
/* searchbar */
type movie = [string, string, string, string, string[], string][];


const moviesearchInput = document.querySelector('#movieSearchInput') as HTMLInputElement;
const searchBtn = document.querySelector('#searchBtn') as HTMLInputElement;
const yearUp = document.querySelector('#yearUp') as HTMLInputElement;
const yearDown = document.querySelector('#yearDown') as HTMLInputElement;
const bestRate = document.querySelector('#bestRate') as HTMLInputElement;
const moviecardContent = document.querySelector(".moviecardContent") as HTMLInputElement; /* using class for a fun change  */

/* movie card content */
/* const movieTitle = document.querySelector('#movieTitle') as HTMLElement;
const releaseYear = document.querySelector('#releaseYear') as HTMLElement;
const director = document.querySelector('#director') as HTMLElement;
const movieLength = document.querySelector('#movieLength') as HTMLElement;
const genre = document.querySelector('#genre') as HTMLElement;
const rating = document.querySelector('#rating') as HTMLElement; */

console.log(moviesearchInput);
console.log(searchBtn);
console.log(yearUp);
console.log(yearDown);
console.log(bestRate);

/* console.log(movieTitle);
console.log(releaseYear);
console.log(director);
console.log(movieLength);
console.log(genre);
console.log(rating); */

// elvis operator --> ? checking truthy or falsy 
searchBtn?.addEventListener('click', () => {
    //  checking the  event 
    
    const searchValue = moviesearchInput?.value;

console.log(searchValue); /* input and search btn responding */
});

/* copy2try */
/* tried some stuff... would like to talk about the correct way */

/* searchBtn?.addEventListener('click', () => {
    
    const searchValue = moviesearchInput?.value;

console.log(searchValue); 

if(searchValue){
    const searchResults = movies.filter(movie => {
        const searchedTitle = movie[0];
        return searchedTitle.includes(searchValue);
    })
    if (searchResults.length > 0) {      
        moviecardDetails(searchResults)
    }
}
}); */



        /* ***** YEAR UP BUTTON ***** */ 

if(yearUp){
    /* console.log("up button works"); */

    yearUp.addEventListener("click", () => {
        console.log("up button works");

        movies.forEach((movie) => {
            /* output via ts in html, with variables and template literals (backticks) */
            const moviecardDetails = `<div>
            <h3>${movie[0]}</h3>
            <p>${movie[1]}</p> 
            <h4>${movie[2]}</h4>
            <p>${movie[3]}</p>
            <p>${movie[4]}</p>
            <h6>${movie[5]}</h6>
            </div>`; 

            moviecardContent.innerHTML += moviecardDetails; /* inserting data into html, += to prevent overwriting our output in html*/
        });

        /* a and b are the elements in the array */
        const sortedMoviesAsc = movies.sort((a, b) => {
            return a[1] - b[1];
        });
        console.log(sortedMoviesAsc);
        
    });
    
};

                 /* ***** YEAR DOWN BUTTON ***** */ 
if(yearDown){
    yearDown.addEventListener("click", () => {
        console.log("down button works");

        movies.forEach((movie) => {

            const moviecardDetails = `<div>
            <h3>${movie[0]}</h3>
            <p>${movie[1]}</p> 
            <h4>${movie[2]}</h4>
            <p>${movie[3]}</p>
            <p>${movie[4]}</p>
            <h6>${movie[5]}</h6>
            </div>`; 

            moviecardContent.innerHTML += moviecardDetails; /* inserting data into html*/
        });
        
        const sortedMoviesDesc = movies.sort((a, b) => {
            return b[1] - a[1];
        })
        console.log(sortedMoviesDesc); /* console returns sorted descending  */
        
    });
};

                      /* ***** RATE BUTTON ***** */  

 if(bestRate){
    bestRate.addEventListener("click", () => {
        console.log("best rate btn works");
        movies.forEach((movie) => {
            /* output via ts in html, with variables and template literals (backticks) */
            const moviecardDetails = `<div>
            <h3>${movie[0]}</h3>
            <p>${movie[1]}</p> 
            <h4>${movie[2]}</h4>
            <p>${movie[3]}</p>
            <p>${movie[4]}</p>
            <h6>${movie[5]}</h6>
            </div>`; 

            moviecardContent.innerHTML += moviecardDetails; /* inserting data into html*/
        });
        
        const bestRatedMoviesDesc = movies.sort((a, b) => {
            return b[5] - a[5];
        })
        console.log(bestRatedMoviesDesc); /* console returns sorted descending rating */
        
        
    })
 }                     


