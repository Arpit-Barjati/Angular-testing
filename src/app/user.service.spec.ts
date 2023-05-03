import { TestBed } from '@angular/core/testing';
import { users } from './user';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should return user for vaid user with id 2',()=>{
    expect(service.getUser("2")).toBe(users[1]);
  })

  it('should return first user for invalid id',()=>{
    expect(service.getUser("hj")).toBe(users[0]);
  })
});
