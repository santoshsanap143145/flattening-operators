import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwithMapTmdbComponent } from './swith-map-tmdb.component';

describe('SwithMapTmdbComponent', () => {
  let component: SwithMapTmdbComponent;
  let fixture: ComponentFixture<SwithMapTmdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwithMapTmdbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwithMapTmdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
