'use strict';

const numberOfFilms=+prompt('How many films did you watch?');

let personalMovieDB={
    count:numberOfFilms,
    movies:[]
};

let movie='';

//First version:

for (let i = 1; i<=numberOfFilms;i++){
    movie=prompt('What film did you watch last time?');
    if (movie=='' || movie.length>50) {
        movie=prompt('What film did you watch last time?');
    }
    personalMovieDB.movies[i-1]=movie;
}



//Second version:

// let k=1;
// while(k<=numberOfFilms){
//     movie=prompt('What film did you watch last time?');
//     if (movie=='' || movie.length>50) {
//          movie=prompt('What film did you watch last time?');
//     }
//     personalMovieDB.movies[k-1]=movie;
//     k++;
// }



//Third version:

// let k=1;
// do{
//     movie=prompt('What film did you watch last time?');
//     if (movie=='' || movie.length>50) {
//         movie=prompt('What film did you watch last time?');
//     }
//     personalMovieDB.movies[k-1]=movie;
//     k++;
// } while(k<=numberOfFilms);


console.log(personalMovieDB);

if (personalMovieDB.count<10){
    console.log('You have already seen a few films');
} else if(personalMovieDB.count>=10 && personalMovieDB.count<=30){
    console.log('You are a classic viewer');
} else if(personalMovieDB.count>30){
    console.log('You are a movie fan');
} else{
    console.log('Error');
}