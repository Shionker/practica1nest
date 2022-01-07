import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Shift } from "src/entities";

export class CreateNewDTO {

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly title: string;
    
    @IsString()
    @ApiProperty()
    readonly description: string;

    @IsString()
    @ApiProperty()
    readonly location: string;
    
    @IsNumber()
    @ApiProperty()
    readonly shiftId: number;
    
}

export class NewsDTO {

    @IsString()
    readonly title: string;
    
    @IsString()
    readonly description: string;

    @IsString()
    readonly location: string;
     
    @IsNumber()
    readonly newsId: number;
    
    readonly shiftsShifts?: Shift;
}
