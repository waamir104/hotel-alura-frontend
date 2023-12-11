import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsPaginationComponent } from './rooms-pagination.component';

describe('RoomsPaginationComponent', () => {
  let component: RoomsPaginationComponent;
  let fixture: ComponentFixture<RoomsPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsPaginationComponent]
    });
    fixture = TestBed.createComponent(RoomsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
