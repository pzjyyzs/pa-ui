import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponent } from './alert.component';


describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('alert type test', () => {

    it('Alert should has info type', () => {
      expect(fixture.elementRef.nativeElement.querySelector('.info')).not.toBe(null);
    });

    it('Alert should has success type', () => {
      component.type = 'positive';
      fixture.detectChanges();
      expect(fixture.elementRef.nativeElement.querySelector('.positive')).not.toBe(null);
    })
  })
});
