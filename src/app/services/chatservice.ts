import {assign} from '../assign';
import {Auth} from './loginservice';
export class Message {
  content: string;
  time: string;
  author:Auth
}

export const myAccuont: Auth = {
  email: "angularexpert@gmail.com",
  password: "typescript"
};

export class ChatService {

  addChatItem(newitem:Message, chatlists: Message[]) {
    if (!chatlists){
      return [newitem];
    }  
    return chatlists.concat(newitem);
  }
}

