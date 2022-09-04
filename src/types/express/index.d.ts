import { IUser } from '@models/user-model';
import { IContact } from '@models/contact-model';

declare module 'express' {
  export interface Request {
    body: {
      user?: IUser;
      contact?: IContact;
      email?: string;
    };
  }
}
