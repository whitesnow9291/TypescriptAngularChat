import {SHOW_ALL} from '../constants/TodoFilters';
import {initialTodo, Todo} from '../todos/todos';

class AppController {
  todos: Todo[];
  filter: string;

  constructor($cookies,$state) {
    if($cookies.getObject('authinfo')){
      $state.go('chat');
    }
    
  }
}

export const App: angular.IComponentOptions = {
  template: require('./App.html'),
  controller: AppController
};
