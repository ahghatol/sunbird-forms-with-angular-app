import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDropdownComponent } from './dynamic-dropdown.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DropdownIconComponent } from '../icon/dropdown/dropdownIcon.component';

describe('DynamicDropdownComponent', () => {
  let component: DynamicDropdownComponent;
  let fixture: ComponentFixture<DynamicDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ DynamicDropdownComponent, DropdownIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
