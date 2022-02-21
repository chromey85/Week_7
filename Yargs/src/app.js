const yargs = require("yargs");
const Movie = require("./utils")

const app = (yargsObj) => {
    if (yargsObj.add) {
        const movie = new Movie(yargsObj.title, yargsObj.actor);
        movie.add();
        console.log(movie.list());
        // add movie to array, consol log at end of runtime
    } else {
        console.log("Incorrect Command")
    }
};

app(yargs.argv);