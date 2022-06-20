import { inject } from 'inversify';
import { controller, httpGet } from 'inversify-express-utils';
import { TYPES } from '../constants';
import { IUser, UserService } from '../services';

@controller('/users')
export class UserController {
  constructor(@inject(TYPES.UserService) private userService: UserService) {}

  @httpGet('/all')
  public getUsers(): IUser[] {
    return this.userService.getUsers();
  }
}
