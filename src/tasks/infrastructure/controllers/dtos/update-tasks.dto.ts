import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateTaskDto } from "./create-task.dto";
import { IsEnum, IsOptional } from "class-validator";

export class UpdateTaskDto extends PartialType(CreateTaskDto) {

    @ApiProperty({
        description: 'Estado de la tarea',
        enum: ['PENDING', 'IN_PROGRESS', 'COMPLETED'],
        example: 'IN_PROGRESS',
        required: false
    })
    @IsEnum(["PENDING", "IN_PROGRESS", "COMPLETED"], { 
        message: 'Solo acepta los valores PENDING, IN_PROGRESS o COMPLETED' 
    })
    @IsOptional()

    status?: "PENDING" | "IN_PROGRESS" | "COMPLETED";

}