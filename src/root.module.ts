import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ChatModule } from './chat/chatmodule.module';
import { OrdersModule } from './orders/orders.module';
import { BookController } from './root.controller';

@Module({
  imports: [UsersModule, ChatModule, OrdersModule],
  controllers:[BookController],
})
export class RootModule {
  constructor(){
    console.log('root module');
}
}
