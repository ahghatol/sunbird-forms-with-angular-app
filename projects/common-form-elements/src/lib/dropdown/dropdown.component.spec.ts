import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { DropdownIconComponent } from '../icon/dropdown/dropdownIcon.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, PipesModule],
      declarations: [ DropdownComponent, DropdownIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
