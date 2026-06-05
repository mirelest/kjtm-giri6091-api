// Capa de aplicación (caso de uso)
import { Inject, Injectable } from "@nestjs/common";
import type { ITaskRepository } from "../domain/task.repository.interface";
import { ITaskRepositoryToken } from "../domain/task.repository.interface";
import { Task } from "../domain/task.entity";

@Injectable()
export class CreateTaskUseCase {
    constructor(
        @Inject(ITaskRepositoryToken) // <- Es mejor usar el Token (Symbol) que importaste en vez del string 'ITaskRepository'
        private readonly taskRepository: ITaskRepository
    ) {} // <- ¡Importante! Añadidas las llaves vacías del constructor

    async excute(title: string, description: string): Promise<Task> { // A funcion async debe retornar una promesa, y el tipo de dato que retorna es Task
        const cyrpto = await import('crypto'); // genera el ID
        const taks = new Task(
            cyrpto.randomUUID(),
            title,
            description,
            'PENDING',
            new Date(),
        );
        return this.taskRepository.create(taks);
    }


}