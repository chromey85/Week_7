const yargs = require("yargs");
const Movie = require("./utils")

const app = (yargsObj) => {
    if (yargsObj.add) {
        const movie = new Movie(yargsObj.title, yargsObj.actor);
        movie.add();
        console.log(movie.list());
        // add movie to array, consol log at end of runtime
    } else if (yargsObj.addMore) {
            const movie = new Movie(yargsObj.title, yargsObj.actor);
            const movie1 = new Movie(yargsObj.title1, yargsObj.actor1);
            const movie2 = new Movie(yargsObj.title2, yargsObj.actor2);
            const movie3 = new Movie(yargsObj.title3, yargsObj.actor3);
            movie.add();
            movie1.add()
            console.log(movie1.list());
        } else {
            console.log("Incorrect Command")
        }
};

app(yargs.argv);