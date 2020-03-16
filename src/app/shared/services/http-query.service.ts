import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const baseUrl: string = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class HttpQueryService {
  private url: string;

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * @name setUrl
   * @memberof QueryService
   * @description set url with the required api
   * @param {string} api
   */
  public setUrl(api: string) {
    this.url = baseUrl + api;
  }
  /**
   * @name get
   * @memberof QueryService
   * @description get from api
   * @returns {<any>}
   */
  public get(params: any = {}): Observable<any> {
    return this.httpClient
      .get(this.url, { }).pipe(map((res: Response) => res));
  }

}
