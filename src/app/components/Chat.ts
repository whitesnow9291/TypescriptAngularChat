import { ChatService, Message } from '../services/chatservice';
import {Auth} from '../services/loginservice';
class ChatController {
  chatlists: Message[];
  editing: boolean;
  chat_text: string;
  $cookies:any;
  /** @ngInject */
  constructor($cookies,public $interval:any,public $scope:any,  public chatService: ChatService, public $window: any, public $timeout: any) {
    this.editing = this.editing || false;
    this.chat_text = this.chat_text || '';
    this.$cookies = $cookies;
    
    if (this.chat_text.length) {
      this.focus();
    }
    
    this.$scope = $scope;
    this.$interval(() => {
      let newChatItem: Message = new Message();
      newChatItem.author = new Auth();
      newChatItem.author.email = 'yourfriend@gmail.com';
      newChatItem.author.password = 'myfriend';
      newChatItem.time = new Date().toLocaleString();
      newChatItem.content = "Go ahead";
      this.chatlists = this.chatService.addChatItem(newChatItem, this.chatlists);
    }, 4000);
  }

  handleBlur() {
    // if (!this.text) {
    //   this.handleAdd(this.text);
    // }
  }
  addRandomMessage(){
    let newChatItem: Message = new Message();
    newChatItem.author = new Auth();
    newChatItem.author.email = 'yourfriend@gmail.com';
    newChatItem.author.password = 'myfriend';
    newChatItem.time = new Date().toLocaleString();
    newChatItem.content = "Go ahead";
    console.log(this.chatlists);
    
    //this.chatlists = this.chatService.addChatItem(newChatItem, this.chatlists);
  }
  handleSubmit(e: any) {
    if (e.keyCode === 13) {
      this.handleAdd(this.chat_text);
          if (this.chat_text) {
            this.chat_text = '';
          }
        }
  }
  handleAdd(content: string) {
    if (content.length !== 0) {
      let newChatItem: Message = new Message();
      newChatItem.author = this.$cookies.getObject('authinfo');
      newChatItem.time = new Date().toLocaleString();
      console.log(newChatItem.author);
      newChatItem.content = content;
      this.chatlists = this.chatService.addChatItem(newChatItem, this.chatlists);
    }
  }
  focus() {
    this.$timeout(() => {
      const element = this.$window.document.querySelector('.editing .textInput');
      if (element) {
        element.focus();
      }
    }, 0);
  }
}

export const Chat: angular.IComponentOptions = {
  template: require('./Chat.html'),
  controller: ChatController,
  bindings: {
    placeholder: '@',
    newTodo: '@',
    editing: '@',
    chat_text: '<',
    chatlists: '<'
  }
};
