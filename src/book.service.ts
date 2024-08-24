import { Injectable, Param } from "@nestjs/common";

@Injectable()
export class BookService{

    addBook():string{
        return "This will add a book";
    }

    deleteBook(): string{
        
        return "This will delete a book";
    }

    updateBook(): string{
        return "This will update a book!";
    }

    findAllBook(): string{
        return "This will find all books";
    }

    findBookById(@Param() params: any): string {
        console.log(params.bookId);
        return `This action returns a #${params.bookId} cat`;
      }
}