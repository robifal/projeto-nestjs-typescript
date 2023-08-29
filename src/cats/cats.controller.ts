import { Controller, Get, HttpStatus, Param, ParseIntPipe, Res } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { Response } from 'express';

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService) { }

    @Get()
    findAll(): Cat[] {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const gatoEncontrado = this.catsService.findById(id);
        if (gatoEncontrado) {
            res.status(HttpStatus.OK).json(gatoEncontrado);
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

}
