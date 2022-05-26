import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeNvArticleComponent } from './cree-nv-article.component';

describe('CreeNvArticleComponent', () => {
  let component: CreeNvArticleComponent;
  let fixture: ComponentFixture<CreeNvArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreeNvArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreeNvArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
