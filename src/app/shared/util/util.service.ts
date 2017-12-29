/**
 * write by @pengfei.li
 */
import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';

@Injectable()
export class UtilService {
  constructor() {}

  buildHttpParams(params: object): HttpParams {
    let _httpParams: HttpParams = new HttpParams();
    if(params){
      for(let [key, value] of Object.entries(params)){
        if(value){
          _httpParams = _httpParams.set(key, value.toString());
        }
      }
    }
    return _httpParams;
  }
}
