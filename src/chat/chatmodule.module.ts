import { Module } from '@nestjs/common';

@Module({})
export class ChatModule {
    constructor(){
        console.log('chat module');
    }
}
