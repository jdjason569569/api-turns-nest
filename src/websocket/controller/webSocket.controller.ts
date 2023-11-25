
import { WebSocketServer, WebSocketGateway, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server  } from 'socket.io';

@WebSocketGateway(
    {
        cors: {
          origin: '*',
          methods: ['GET', 'POST'],
          allowedHeaders: ['Origin, X-Requested-With, Content-Type, Accept'],
         
        },
      }
)
export class WebSocketGatewayTest  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{
  @WebSocketServer()
  server: Server;

  afterInit(server: any) {
      console.log("inicia el webSocket");
      //this.emitData()
  }
  handleConnection(client: any, ...args: any[]) {
      console.log("alguien se conecto al socket");
      
  }
  handleDisconnect(client: any) {
    console.log("alguien se fue");
  }


  emitData() {
    let count = 0;
    setInterval(() => {
        console.log("EMIT DATA");
        this.server.emit('data', { message: `contador = ${count++}`});
    }, 2000);
  }
}
