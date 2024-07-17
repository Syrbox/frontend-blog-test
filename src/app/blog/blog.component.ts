import { Component, Input } from "@angular/core";

@Component({
  selector: "app-blog",
  standalone: true,
  imports: [],
  templateUrl: "./blog.component.html",
  styleUrl: "./blog.component.scss",
})
export class BlogComponent {
  @Input({ required: true }) blog!: any;
}
