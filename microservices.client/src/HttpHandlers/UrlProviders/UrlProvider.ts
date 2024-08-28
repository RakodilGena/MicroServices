import {IUrlProvider} from "./IUrlProvider";
import { injectable } from 'inversify';

@injectable()
export class UrlProvider implements IUrlProvider {
    getBaseUrl(): string {
        if (!process.env.REACT_APP_API_URL) {
            console.error("No api url provided");
            return "";
        }

        return process.env.REACT_APP_API_URL;
    }
}
