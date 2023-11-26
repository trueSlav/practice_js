'use strict';

const personalMovieDB = {
	count: '',
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

let numberOfFilms;

for(let i = 0; i < 1; i++){
	numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

	if(!numberOfFilms){
		--i;
	} else {
		personalMovieDB.count = numberOfFilms;
	}
}

for(let i = 0; i < 2; i++){
	let lastFilm = prompt('Последний просмотренный фильм?', '');
	let star = +prompt('На сколько оцените его?', '');

	if((lastFilm === '' || lastFilm === null || lastFilm.length > 50) || (!star)) {
		--i;
	} else {
		personalMovieDB.movies[lastFilm] = star;
	}
}

const {count} = personalMovieDB;

if(count < 10){
	console.log('Мало фильмов');
} else if(count >= 10 && count <= 30) {
	console.log('Норм фильмы');
} else if(count > 30) {
	console.log('Много фильмы');
}

console.log(personalMovieDB);

