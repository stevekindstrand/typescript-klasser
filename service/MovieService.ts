import { IDataService } from "./IDataService";

export class MovieService implements IDataService {
    GetData() {
        // throw new Error("Method not implemented.");
        return "Data från MovieService";
    }
}
