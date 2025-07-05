import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwithMapTvShowsComponent } from './swith-map-tv-shows.component';

describe('SwithMapTvShowsComponent', () => {
  let component: SwithMapTvShowsComponent;
  let fixture: ComponentFixture<SwithMapTvShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwithMapTvShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwithMapTvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
