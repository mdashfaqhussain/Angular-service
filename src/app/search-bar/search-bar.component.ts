import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<string>();

  term: string = '';

  onInput(e: Event) {
    this.term = (e.target as HTMLInputElement).value;
  }

  onFormSubmit(e: Event) {
    e.preventDefault();
    this.submitted.emit(this.term);
  }
}
