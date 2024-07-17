import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  OperatorFunction,
} from "rxjs";

@Component({
  selector: "app-search-bar",
  standalone: true,
  imports: [CommonModule, FormsModule, NgbTypeaheadModule],
  templateUrl: "./search-bar.component.html",
  styleUrl: "./search-bar.component.scss",
})
export class SearchBarComponent {
  @Input() suggestions: any;
  @Output() searchEvent = new EventEmitter<string>();
  model: string = "";
  search() {
    this.searchEvent.emit(this.model);
  }
}
