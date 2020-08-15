import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTextImgComponent } from './generic-text-img.component';

describe('GenericTextImgComponent', () => {
  let component: GenericTextImgComponent;
  let fixture: ComponentFixture<GenericTextImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericTextImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericTextImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
