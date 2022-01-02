import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesBodyComponent } from './quotes-body.component';

describe('QuotesBodyComponent', () => {
  let component: QuotesBodyComponent;
  let fixture: ComponentFixture<QuotesBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
