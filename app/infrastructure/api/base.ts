import axios, {AxiosInstance} from 'axios';


export class BaseApi {
    protected _axios: AxiosInstance;

    constructor(ssr_flg: boolean = false) {
        this._axios = axios.create({
            // baseURL: (ssr_flg) ? 'http://172.25.0.2:8000' : 'http://localhost:8000',
            baseURL: 'https://baseball-api.dosankoweb.work',
            responseType: 'json',
            ContentType: 'application/json',
        });
    }
}
