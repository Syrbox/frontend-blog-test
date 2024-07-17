import { Component } from "@angular/core";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { BlogComponent } from "../blog/blog.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-blog-list",
  standalone: true,
  imports: [CommonModule, SearchBarComponent, BlogComponent],
  templateUrl: "./blog-list.component.html",
  styleUrl: "./blog-list.component.scss",
})
export class BlogListComponent {
  //remove
  blogs = ["", "", "", ""];
}
