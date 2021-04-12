import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCheckboxComponent } from './dynamic-checkbox.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('DynamicCheckboxComponent', () => {
  let component: DynamicCheckboxComponent;
  let fixture: ComponentFixture<DynamicCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ DynamicCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
