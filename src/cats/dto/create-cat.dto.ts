import { IsAlpha, IsIn, IsNotEmpty, MinLength, NotEquals } from "class-validator";

export class CreateCatDto {
    
    // id: number;

    @IsNotEmpty()
    nome: string;
    
    @IsNotEmpty()
    raca: string;

    @IsNotEmpty()
    corOlhos: string;
}