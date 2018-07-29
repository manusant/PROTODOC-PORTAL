import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtoApiComponent } from './proto-api.component';

describe('ProtoApiComponent', () => {
  let component: ProtoApiComponent;
  let fixture: ComponentFixture<ProtoApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtoApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
