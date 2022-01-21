import { IDataService } from "./IDataService";

export class MockMovieService implements IDataService {
    GetData() {
        // throw new Error("Method not implemented.");
        return "Mockdata från MockService";
    }
}