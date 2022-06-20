import { injectable } from 'inversify';

export interface IUser {
  email: string;
  name: string;
}

@injectable()
export class UserService {
  private userStorage: IUser[] = [
    {
      email: 'lorem@ipsum.com',
      name: 'Lorem',
    },
    {
      email: 'doloe@sit.com',
      name: 'Dolor',
    },
  ];

  public getUsers(): IUser[] {
    return this.userStorage;
  }
}
