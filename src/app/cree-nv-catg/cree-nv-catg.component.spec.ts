import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeNvCatgComponent } from './cree-nv-catg.component';

describe('CreeNvCatgComponent', () => {
  let component: CreeNvCatgComponent;
  let fixture: ComponentFixture<CreeNvCatgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreeNvCatgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreeNvCatgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
