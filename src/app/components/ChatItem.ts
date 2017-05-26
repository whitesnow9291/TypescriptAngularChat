import {Message} from '../services/chatservice';

class ChatItemController {
  chatitem:Message;
  $cookies:any;
  /** @ngInject */
  constructor($cookies) {
  }
}

export const ChatItem: angular.IComponentOptions = {
  template: require('./ChatItem.html'),
  controller: ChatItemController,
  bindings: {
    chatitem: '='
  }
};
