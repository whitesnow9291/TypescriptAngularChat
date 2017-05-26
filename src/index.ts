import * as angular from 'angular';
import 'todomvc-app-css/index.css';

import {TodoService} from './app/todos/todos';
import {App} from './app/containers/App';
import {Header} from './app/components/Header';
import {MainSection} from './app/components/MainSection';
import {TodoTextInput} from './app/components/TodoTextInput';
import {TodoItem} from './app/components/TodoItem';
import {Footer} from './app/components/Footer';

import {Login} from './app/components/Login';
import {LoginService} from './app/services/loginservice';

import {Chat} from './app/components/Chat';
import {ChatItem} from './app/components/ChatItem';
import {ChatService} from './app/services/chatservice';

import 'angular-ui-router';
import 'angular-cookies';
import routesConfig from './routes';

import './index.scss';

angular
  .module('app', ['ui.router','ngCookies'])
  .config(routesConfig)
  .service('todoService', TodoService)
  .service('loginService', LoginService)
  .service('chatService', ChatService)
  .component('app', App)
  .component('headerComponent', Header)
  .component('footerComponent', Footer)
  .component('mainSection', MainSection)
  .component('todoTextInput', TodoTextInput)
  .component('todoItem', TodoItem)
  .component('loginComponent', Login)
  .component('chat', Chat)
  .component('chatItem', ChatItem);
