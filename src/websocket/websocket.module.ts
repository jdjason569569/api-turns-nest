import { Module } from '@nestjs/common';
import { WebSocketGatewayTest } from './controller/webSocket.controller';

@Module({
  imports: [],
  controllers: [],
  providers: [WebSocketGatewayTest],
})
export class WebsocketModule {}
