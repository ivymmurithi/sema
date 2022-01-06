import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  public quoteList: any[] = [];
  addQuote(quoteInput: any, authorInput: any, usernameInput: any) {
    this.quoteList.push({id:this.quoteList.length, name: quoteInput, author: authorInput, username: usernameInput })
     }

  deleteQuote(id: number) {
    this.quoteList = this.quoteList.filter(quoteInput => quoteInput.id != id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
