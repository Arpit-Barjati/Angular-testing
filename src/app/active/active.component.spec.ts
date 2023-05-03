import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { ActiveComponent } from './active.component';
import { By } from '@angular/platform-browser';

describe('ActiveComponent', () => {
  @Component({
    selector: 'app-user-list',
    template: '<div></div>',
  })
  class FakeUserList {
    @Input() isDeleted!: boolean;
  }

  let component: ActiveComponent;
  let fixture: ComponentFixture<ActiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveComponent,FakeUserList ]
    })

    fixture = TestBed.createComponent(ActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render child user list component', () => {
    const div = fixture.debugElement.queryAll(By.css('div'));
    expect(div.length).toBe(1);
  });
});
