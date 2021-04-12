import { from } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CheckboxComponent } from './checkbox.component';
import { PipesModule } from '../pipes/pipes.module';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, PipesModule],
      declarations: [ CheckboxComponent ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
