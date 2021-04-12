import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTextboxComponent } from './dynamic-textbox.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('DynamicTextboxComponent', () => {
  let component: DynamicTextboxComponent;
  let fixture: ComponentFixture<DynamicTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ DynamicTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
