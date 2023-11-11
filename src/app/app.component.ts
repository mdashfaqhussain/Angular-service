import { Component, Input } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

interface ReceivedData {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages: ReceivedData[] = [];

  constructor(private wikipediaService: WikipediaService) {}
  onTerm(value: string) {
    this.wikipediaService.search(value).subscribe((response: any) => {
      this.pages = response.query.search;
    });
  }
}
