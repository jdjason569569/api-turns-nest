import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebsocketModule } from './websocket/websocket.module';
import { WebSocketGatewayTest } from './websocket/controller/webSocket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TurnModule } from './turns/turn.module';


@Module({
  imports: [WebsocketModule, TurnModule,WebSocketGatewayTest, TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432') ,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    retryDelay: 3000,
    retryAttempts: 10
  })], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

 



}
