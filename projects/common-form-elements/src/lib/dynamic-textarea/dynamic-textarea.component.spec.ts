import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTextareaComponent } from './dynamic-textarea.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('DynamicTextareaComponent', () => {
  let component: DynamicTextareaComponent;
  let fixture: ComponentFixture<DynamicTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ DynamicTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
