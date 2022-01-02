import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-body',
  templateUrl: './quotes-body.component.html',
  styleUrls: ['./quotes-body.component.css']
})
export class QuotesBodyComponent implements OnInit {

  quoteList: any[] = [];
  addQuote(quoteInput: any) {
    this.quoteList.push({id:this.quoteList.length, name:quoteInput});
  }
  deleteQuote(id: number) {
    this.quoteList = this.quoteList.filter(quoteInput => quoteInput.id != id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
