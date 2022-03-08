import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyThingWithUploadComponent } from './modify-thing-with-upload.component';

describe('ModifyThingWithUploadComponent', () => {
  let component: ModifyThingWithUploadComponent;
  let fixture: ComponentFixture<ModifyThingWithUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyThingWithUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyThingWithUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
