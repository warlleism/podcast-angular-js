import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusEpisodeComponent } from './focus-episode.component';

describe('FocusEpisodeComponent', () => {
  let component: FocusEpisodeComponent;
  let fixture: ComponentFixture<FocusEpisodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FocusEpisodeComponent]
    });
    fixture = TestBed.createComponent(FocusEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
