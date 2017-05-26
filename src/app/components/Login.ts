import {LoginService,Auth} from '../services/loginservice';
import {StateService} from 'angular-ui-router';
class LoginController {
  email: string;
  password: string;
  errors:string;
  $state:StateService;
  $cookies:any;
  authinfo:Auth = new Auth();
  constructor($state,$cookies,public loginService: LoginService) {
    this.$state = $state;
    this.$cookies = $cookies;
  }

  handleLogin() {
    if (this.loginService.login(this.email,this.password)) {
        this.authinfo.email = this.email;
        this.authinfo.password = this.password;
        
        this.$cookies.putObject('authinfo', this.authinfo);
        this.$state.go('chat');
    }else{
        this.errors = "Wrong username or password";
    }
  }
}

export const Login: angular.IComponentOptions = {
  template: require('./Login.html'),
  controller: LoginController,
  bindings: {
    password: '<',
    email: '<',
    errors: '<'
  }
};
