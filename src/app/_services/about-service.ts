import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../_models/result';
import { AboutDto } from '../_models/aboutDto';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  constructor(private http: HttpClient) {}

  baseUrl = "https://localhost:7000/api/abouts/";

  getAll(){
    return this.http.get<Result<AboutDto[]>>(this.baseUrl);
  }

  getById(id: string){
    return this.http.get<Result<AboutDto>>(this.baseUrl + id);
  }

  create(model: AboutDto){
    return this.http.post<Result<AboutDto>>(this.baseUrl, model);
  }

  update(model: AboutDto){
    return this.http.put(this.baseUrl, model);
  }

  delete(id: string){
    return this.http.delete(this.baseUrl + id);
  }
}

