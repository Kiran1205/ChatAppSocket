import * as io from 'socket.io-client';
import { Observable } from 'rxjs';


export class ChatService {
    private url = 'http://localhost:3000';
    private socket;

    constructor() {
        this.socket = io(this.url);
    }

    public sendMessage(message) {
       
        this.socket.emit('hello', message);
    }

    public getMessages = () => {
        return Observable.create((observer) => {
            this.socket.on('hello', (message) => {
                console.log(message);
                observer.next(message);
            },error =>{
                console.log(error);
            });
        });
    }
}