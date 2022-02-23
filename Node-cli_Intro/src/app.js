const Movie = require("./utils");

const app = (args) => {
    switch (args[2]) {
        case "add":
            console.log(args)
            const movie = new Movie(args[3], args[4]);
            console.log(movie.add())

        case "addMulti":
            const movie1 = new Movie(args[3], args[4])
            const movie2 = new Movie(args[5], args[6]);
            const movie3 = new Movie(args[7], args[8]);
            // const output = movie.add() - console log if one off output
            movie1.add()
            movie2.add()
            console.log(movie3.add())
            //takes use inputted movie, add to an array and console.log that array
            break;    
        default:
            console.log("Incorrect input")
            break;
    }
};

app(process.argv)

// const app = (args) => {
//     switch (args[2]) {
//         case "add":
//             const movie = new Movie(args[3], args[4]);
//             const movie1 = new Movie(args[5], args[6]);
//             const movie2 = new Movie(args[7], args[8]);
//             // const output = movie.add() - console log if one off output
//             console.log(movie.add())
//             console.log(movie1.add())
//             console.log(movie2.add())
//             //takes use inputted movie, add to an array and console.log that array
//             break;    
//         default:
//             console.log("Incorrect input")
//             break;
//     }
// };

// app(process.argv)

// This is code provided by someone on another server


// const movies = [];

// function addMovie(title, actor) {
//     movies.push(new Movie(title, actor));
// }

// const app = (args) => {
//     if (args.length < 3) {
//         console.log("Incorrect input");
//         // maybe show the user how to use this program
//         return -1;
//     }

//     for (let i = 0; i < args.length; i++) {
//         switch (args[i]) {
//             case "add":
//                 addMovie(args[++i], args[++i]); // ++i skips the next argument
//                 break;
//         }
//     }

//     // print movies
//     for (let i = 0; i < movies.length; i++) {
//         console.log(movies[i].title + ": " + movies[i].actor);
//     }
// };

// app(process.argv)