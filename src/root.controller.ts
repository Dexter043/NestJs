import { Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";

@Controller("book")
export class BookController{

    constructor(private BookService:BookService){}

    @Post('/add')
    @HttpCode(200)
    addBook():string{
        return this.BookService.addBook();
    }

    @Delete('/delete')
    @HttpCode(200)
    deleteBook():string{
        return this.BookService.deleteBook();
    }


    @Put('/update')
    @HttpCode(200)
    updateBook():string{
        return this.BookService.updateBook();
    }

    @Get('/findAll')
    @HttpCode(200)
    findAllBooks():string{
        return this.BookService.findAllBook();
    }

}