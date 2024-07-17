import { Component, OnInit } from "@angular/core";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { BlogComponent } from "../blog/blog.component";
import { CommonModule } from "@angular/common";
import { BlogService } from "../blog-service.service";
import { response } from "express";

@Component({
  selector: "app-blog-list",
  standalone: true,
  imports: [CommonModule, SearchBarComponent, BlogComponent],
  templateUrl: "./blog-list.component.html",
  styleUrl: "./blog-list.component.scss",
})
export class BlogListComponent implements OnInit {
  constructor(private blogService: BlogService) {}
  blogs: any = [];
  filteredBlogs: any = [];
  ngOnInit(): void {
    this.blogService.getBlogList().subscribe((response) => {
      this.blogs = response;
      this.filteredBlogs = this.blogs;
    });
  }

  filterList(event: any) {
    console.log(event);
    this.filteredBlogs = this.blogs.filter((v: any) => {
      console.log(event.toLowerCase());
      console.log(v.title.toLowerCase());
      return v.title.toLowerCase().includes(event.toLowerCase());
    });
  }
}
