// import fs from "fs";
// import { faker } from "faker";
// import { Movie, MovieType, COUNTRY_NAME } from "./types/movies";
// import { v4 as uuidv4 } from "uuid";
//
// const generateMovieData = (count: number = 10) => {
//   const movies: Movie[] = [];
//
//   for (let i = 0; i < count; i++) {
//     const movie: Movie = {
//       movieId: uuidv4.toString(),
//       name: faker.lorem.words(2),
//       image: faker.image.imageUrl(),
//       description: faker.lorem.sentence(),
//       uploaderId: faker.internet.userName(),
//       details: {
//         country_name: faker.random.arrayElement(Object.values(COUNTRY_NAME)),
//         type: faker.random.arrayElements(Object.values(MovieType), 3),
//         detail: faker.lorem.paragraph(),
//         actor: [
//           faker.name.findName(),
//           faker.name.findName(),
//           faker.name.findName(),
//         ],
//       },
//       releasedate: faker.date.past().getTime(),
//       created: Date.now(),
//       updated: Date.now(),
//     };
//     movies.push(movie);
//   }
//   return movies;
// };
//
// export const generate_raw_data = () => {
//   const movieData = generateMovieData(50);
//
//   // Convert movie data to string
//   const movieDataString = `export const movies = ${JSON.stringify(movieData, null, 2)};`;
//
//   // Write movie data to file
//   fs.writeFileSync("data/generatedmoviedata.ts", movieDataString);
//
//   console.log("Movie data saved to data/generatedmoviedata.ts");
// };
