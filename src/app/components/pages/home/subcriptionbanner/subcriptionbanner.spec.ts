import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcriptionbanner } from './subcriptionbanner';

describe('Subcriptionbanner', () => {
  let component: Subcriptionbanner;
  let fixture: ComponentFixture<Subcriptionbanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcriptionbanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcriptionbanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
