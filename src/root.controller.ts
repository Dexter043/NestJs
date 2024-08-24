import { Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";

@Controller("book")
export class BookController{

    @Post('/add')
    @HttpCode(200)
    addBook(): string{
        return "This will add a book";
    }

    @Delete('/delete')
    @HttpCode(200)
    deleteBook(): string{
        
        return "This will delete a book";
    }

    @Put('/update')
    @HttpCode(200)
    updateBook(): string{
        return "This will update a book";
    }

    @Get('/findAll')
    @HttpCode(200)
    findAllBook(): string{
        return "This will find all books";
    }

    @Get('/findBookById/:bookId')
    @HttpCode(200)
    findBookById(@Param() params: any): string {
        console.log(params.bookId);
        return `This action returns a #${params.bookId} cat`;
      }

}