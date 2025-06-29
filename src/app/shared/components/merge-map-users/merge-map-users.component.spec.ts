import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMapUsersComponent } from './merge-map-users.component';

describe('MergeMapUsersComponent', () => {
  let component: MergeMapUsersComponent;
  let fixture: ComponentFixture<MergeMapUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeMapUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergeMapUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
