import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartExampleComponent } from './echart-example.component';

describe('EchartExampleComponent', () => {
  let component: EchartExampleComponent;
  let fixture: ComponentFixture<EchartExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
