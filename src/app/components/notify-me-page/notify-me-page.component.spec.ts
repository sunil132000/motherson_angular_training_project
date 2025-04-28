import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyMePageComponent } from './notify-me-page.component';

describe('NotifyMePageComponent', () => {
  let component: NotifyMePageComponent;
  let fixture: ComponentFixture<NotifyMePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotifyMePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifyMePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
