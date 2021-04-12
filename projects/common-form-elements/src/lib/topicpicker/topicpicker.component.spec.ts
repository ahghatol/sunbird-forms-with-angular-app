import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicpickerComponent } from './topicpicker.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DropdownIconComponent } from '../icon/dropdown/dropdownIcon.component';

describe('TopicpickerComponent', () => {
  let component: TopicpickerComponent;
  let fixture: ComponentFixture<TopicpickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ TopicpickerComponent, DropdownIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
