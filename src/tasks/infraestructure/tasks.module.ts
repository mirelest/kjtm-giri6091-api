import { Module } from '@nestjs/common';
import { CreateTaskUseCase } from '../application/create-task.use-case';
import { ITaskRepositoryToken } from '../domain/task.repository.interface';
import { TaskRepositoryImpl } from './persistence/task.repository.impl';
import { TaskController } from './controllers/dtos/task.controller';

@Module({
    controllers: [ TaskController ],
    providers: [
        CreateTaskUseCase,
        {
            provide: ITaskRepositoryToken,
            useClass: TaskRepositoryImpl // Cambiar si la data base canbia.
        }
    ],
    exports: [ CreateTaskUseCase ]
  
})

export class TasksModule {}