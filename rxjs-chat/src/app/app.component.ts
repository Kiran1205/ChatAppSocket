import { Component } from '@angular/core';
import { ChatService } from './Chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-chat';
  message: string;
  Username:string;
  messages: string[] = [];
  constructor(private chatService: ChatService) { }
  
  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }
  registeruserName() {
    this.chatService.online(this.Username);
    this.message = '';
  }

  ngOnInit() {
    console.log("entered");
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        console.log("message recieved");
        this.messages.push(message);
      });
  }

}
