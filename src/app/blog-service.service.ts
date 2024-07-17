import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getBlogList(): Observable<any> {
    return this.http.get(
      "https://my-json-server.typicode.com/Syrbox/frontend-blog-test/blogs"
    );
  }
}
