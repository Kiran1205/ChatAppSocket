import * as io from 'socket.io-client';
import { Observable } from 'rxjs';


export class ChatService {
    private url = 'http://localhost:3000';
    private socket;

    constructor() {
        this.socket = io(this.url);
        console.log("sockcet"+this.socket.ids);
    
    }

    public sendMessage(message) {       
        this.socket.emit('message', message);
    }
    public online(message) {       
        this.socket.emit('join', message);
    }

    public getMessages = () => {
        return Observable.create((observer) => {
            this.socket.on('message', (message) => {
                console.log(message);
                observer.next(message);
            },error =>{
                console.log(error);
            });
        });
    }
}