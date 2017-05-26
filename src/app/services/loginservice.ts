import {assign} from '../assign';

export class Auth {
  email: string;
  password: string;
}

export const myAccuont: Auth = {
  email: "angularexpert@gmail.com",
  password: "typescript"
};

export class LoginService {
  login(email: string, password: string) {
    return email == myAccuont.email && password == myAccuont.password;
  }
}

