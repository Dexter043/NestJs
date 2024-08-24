import { Module } from '@nestjs/common';

@Module({})
export class OrdersModule {
    constructor(){
        console.log('orders module');
    }
}
