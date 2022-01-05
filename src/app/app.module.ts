import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { DisplayQuoteComponent } from './display-quote/display-quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { DatePostedPipe } from './pipes/date-posted.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    DisplayQuoteComponent,
    QuoteDetailsComponent,
    DatePostedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
