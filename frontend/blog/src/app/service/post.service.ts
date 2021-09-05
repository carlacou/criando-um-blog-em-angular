import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // <--- THIS WAS INCLUDED
import { Post } from '../model/Post'; // <--- THIS WAS INCLUDED

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<Post[]> { // <--- THIS WAS MODIFIED
    return this.http.get<Post[]>('http://localhost:3000/posts')
  }
}
