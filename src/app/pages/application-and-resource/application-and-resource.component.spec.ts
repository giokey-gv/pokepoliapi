import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationAndResourceComponent } from './application-and-resource.component';

describe('ApplicationAndResourceComponent', () => {
  let component: ApplicationAndResourceComponent;
  let fixture: ComponentFixture<ApplicationAndResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationAndResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationAndResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
