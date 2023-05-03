import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { Component, Input } from '@angular/core';
import { User } from '../interface/user-interface';
import { of } from 'rxjs';
import { FilterUserPipe } from '../filter-user.pipe';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';
import { users } from 'src/app/user';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  @Component({
    selector: 'app-user',
    template: '<div></div>',
  })
  class FakeAppUser {
    @Input() user!: User;
    @Input() path!: string;
  }

  class mockUserService {
    users: User[] = users;
  }

  let mockActivatedRoute = {
    snapshot:{
      routeConfig:{
        path:'manage'
      }
    },
  };

  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent, FakeAppUser, FilterUserPipe],
      providers: [
        {
          provide: UserService,
          useClass: mockUserService,
        },
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute,
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create one user element for each user', () => {
    const div = fixture.debugElement.queryAll(By.css('div'));
    expect(div.length).toBe(users.length);
  });
});
