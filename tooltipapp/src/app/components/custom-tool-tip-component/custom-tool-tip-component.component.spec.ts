import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomToolTipComponentComponent } from './custom-tool-tip-component.component';

describe('CustomToolTipComponentComponent', () => {
  let component: CustomToolTipComponentComponent;
  let fixture: ComponentFixture<CustomToolTipComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomToolTipComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomToolTipComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
