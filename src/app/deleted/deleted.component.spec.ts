import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { DeletedComponent } from './deleted.component';
import { By } from '@angular/platform-browser';

describe('DeletedComponent', () => {
  @Component({
    selector: 'app-user-list',
    template: '<div></div>',
  })
  class FakeUserList {
    @Input() isDeleted!: boolean;
  }

  let component: DeletedComponent;
  let fixture: ComponentFixture<DeletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedComponent,FakeUserList ]
    })

    fixture = TestBed.createComponent(DeletedComponent);
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
