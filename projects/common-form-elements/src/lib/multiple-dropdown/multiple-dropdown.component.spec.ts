import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleDropdownComponent } from './multiple-dropdown.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { CaretDownComponent } from '../icon/caret-down/caret-down.component';

describe('MultipleDropdownComponent', () => {
  let component: MultipleDropdownComponent;
  let fixture: ComponentFixture<MultipleDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, PipesModule],
      declarations: [ MultipleDropdownComponent, CaretDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
