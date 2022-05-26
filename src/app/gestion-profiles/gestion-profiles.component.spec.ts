import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProfilesComponent } from './gestion-profiles.component';

describe('GestionProfilesComponent', () => {
  let component: GestionProfilesComponent;
  let fixture: ComponentFixture<GestionProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
