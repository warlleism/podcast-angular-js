import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailEpisodesComponent } from './datail-episodes.component';

describe('DatailEpisodesComponent', () => {
  let component: DatailEpisodesComponent;
  let fixture: ComponentFixture<DatailEpisodesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatailEpisodesComponent]
    });
    fixture = TestBed.createComponent(DatailEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
