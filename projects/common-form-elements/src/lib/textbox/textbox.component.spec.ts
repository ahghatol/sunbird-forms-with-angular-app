import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxComponent } from './textbox.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { GreenTickComponent } from '../icon/green-tick/green-tick.component';
import { RedExclamationComponent } from '../icon/red-exclamation/red-exclamation.component';
import { EmptyCircleComponent } from '../icon/empty-circle/empty-circle.component';

describe('TextboxComponent', () => {
  let component: TextboxComponent;
  let fixture: ComponentFixture<TextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, PipesModule],
      declarations: [ TextboxComponent, GreenTickComponent, RedExclamationComponent, EmptyCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
