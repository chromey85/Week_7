const movieArr = [];

class Movie {
    constructor(title, actor = "Not Specified") {
        this.title = title;
        this.actor = actor;
    }
    add() {
        movieArr.push(this);
        return movieArr;
    }
}

module.exports = Movie;