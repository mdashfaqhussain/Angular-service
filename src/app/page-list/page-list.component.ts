import { Component, Input } from '@angular/core';

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
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent {
  @Input() page: ReceivedData[] = [];

  xss = '<img src="" onerror="alert(123)"';
}
