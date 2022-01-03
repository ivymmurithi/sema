import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  quoteList: any[] = [];
  addQuote(quoteInput: any, authorInput: any, usernameInput: any) {
    this.quoteList.push({id:this.quoteList.length, name: quoteInput, author: authorInput, username: usernameInput })
    console.log(quoteInput);
  }

  deleteQuote(id: number) {
    this.quoteList = this.quoteList.filter(quoteInput => quoteInput.id != id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
