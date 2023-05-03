import { FilterUserPipe } from './filter-user.pipe';
import { users } from '../user';

describe('FilterUserPipe', () => {
  let pipe:FilterUserPipe;
  beforeAll(()=>{
    pipe = new FilterUserPipe();
  })
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it("should display inactive users when isDeleted is true",()=>{
    expect(pipe.transform(users,true)).toEqual(users.filter((user) => user.isDeleted === true));
  });

  it("should display active users when isDeleted is false",()=>{
    expect(pipe.transform(users,false)).toEqual(users.filter((user) => user.isDeleted === false));
  })

  it("should display all users when isDeleted is undefined",()=>{
    expect(pipe.transform(users,undefined)).toEqual(users);
  })
});
