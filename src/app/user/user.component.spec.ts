import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { User } from './interface/user-interface';
import { users } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

describe('UserComponent', () => {
  class mockUserService {
    users: User[] = users;
    getUsers(id: string) {}
  }

  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;
  let router:Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [{ provide: UserService, useClass: mockUserService }, Router],
    }).compileComponents();
    userService = TestBed.inject(UserService);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render user according to manage', () => {
    component.user = users[0];
    component.path = 'manage';
    fixture.detectChanges();
    let spy = spyOn(component, 'userDetailsHandler');
    component.clickHandler('1');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(component.title).toBe('Details');
    expect(component.buttonClass).toBe('btn-primary');
  });

  it('should render user according to active', () => {
    component.user = users[0];
    component.path = 'active';
    fixture.detectChanges();
    let spy = spyOn(component, 'toggleIsDeletedHandler');
    component.clickHandler('1');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(component.title).toBe('Deactivate');
    expect(component.buttonClass).toBe('btn-danger');
  });

  it('should render user according to active', () => {
    component.user = users[0];
    component.path = 'deleted';
    fixture.detectChanges();
    let spy = spyOn(component, 'toggleIsDeletedHandler');
    component.clickHandler('1');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(component.title).toBe('Activate');
    expect(component.buttonClass).toBe('btn-success');
  });

  it('should toggle isDeleted', () => {
    component.toggleIsDeletedHandler('1');
    expect(users[0].isDeleted).toBe(false);
  });

  it('should check for router', () => {
    let spy = spyOn(router,'navigate');
    component.userDetailsHandler("1");
    expect(spy).toHaveBeenCalled();
  });
});
