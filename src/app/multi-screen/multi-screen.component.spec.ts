import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiScreenComponent } from './multi-screen.component';

describe('MultiScreenComponent', () => {
  let component: MultiScreenComponent;
  let fixture: ComponentFixture<MultiScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
