import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTechnoComponent } from './add-techno.component';

describe('AddTechnoComponent', () => {
  let component: AddTechnoComponent;
  let fixture: ComponentFixture<AddTechnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTechnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTechnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
