import {TodoService, Todo} from '../todos/todos';

class HeaderController {
  todos: Todo[];

  /** @ngInject */
  constructor(public todoService: TodoService) {
  }

  handleSave(text: string) {
    if (text.length !== 0) {
      this.todos = this.todoService.addTodo(text, this.todos);
    }
  }
}

export const Header: angular.IComponentOptions = {
  template: require('./Header.html'),
  controller: HeaderController,
  bindings: {
    todos: '='
  }
};
