import { Pipe, PipeTransform } from '@angular/core';
import { User } from './interface/user-interface';

@Pipe({
  name: 'filterUser',
  pure: false
})
export class FilterUserPipe implements PipeTransform {

  transform(users: User[], isDeleted?:boolean): User[] {
    if(isDeleted === undefined)
      return users;
    return users.filter((user) => user.isDeleted === isDeleted);
  }

}
