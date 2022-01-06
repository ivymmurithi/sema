import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-quote',
  templateUrl: './display-quote.component.html',
  styleUrls: ['./display-quote.component.css']
})
export class DisplayQuoteComponent implements OnInit {

  @Input() quoteInput: any;
  dateCreated: Date = new Date();


  constructor() { }

  ngOnInit(): void {
  }

}
