import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

export abstract class BaseDAO {

  protected headers = new Headers({'Content-Type': 'application/json'});
  protected baseURL = "http://pokeapi.co/api/v2/";
  protected http:Http;

  constructor(http:Http, entity:string) {
    this.http = http;
    this.baseURL += entity;
    this.baseURL += "/";
  }

  private buildURL(item:string):string {
    return this.baseURL + item;
  }

  protected get(item):Observable<Response> {
    let url = this.buildURL(item);
    return this.http.get(url, {headers: this.headers});
  }

}
