import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicMultiSelectComponent } from './dynamic-multi-select.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DropdownIconComponent } from '../icon/dropdown/dropdownIcon.component';

describe('DynamicMultiSelectComponent', () => {
  let component: DynamicMultiSelectComponent;
  let fixture: ComponentFixture<DynamicMultiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ DynamicMultiSelectComponent, DropdownIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
