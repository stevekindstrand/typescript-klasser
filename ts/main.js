"use strict";
exports.__esModule = true;
var movie_1 = require("../models/movie");
window.onload = function () {
    var main = new Main();
    main.start();
};
var Main = /** @class */ (function () {
    function Main() {
        this.start = function () {
            var test = new movie_1.Movie("Die Hard", "poster");
            console.log(test);
        };
    }
    return Main;
}());
