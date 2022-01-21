import { Movie } from "../models/movie";
import { IDataService } from "../service/IDataService";
import { MockMovieService } from "../service/MockMovieService";
import { MovieService } from "../service/MovieService";

window.onload = function() {
    let main = new Main();
    let service = new MockMovieService(); //new MovieService
    main.start(service);
   }

class Main {
    start = (service: IDataService) => {
        let test = new Movie("Die Hard", "poster")
        console.log(test);
        console.log(service.GetData());
    }
}