import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtoDocComponent } from './proto-doc.component';

describe('ProtoDocComponent', () => {
  let component: ProtoDocComponent;
  let fixture: ComponentFixture<ProtoDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtoDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtoDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
