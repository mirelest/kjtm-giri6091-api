// Capa de aplicación (caso de uso)
import { Inject, Injectable } from "@nestjs/common";
import type { ITaskRepository } from "../domain/task.repository.interface";
import { ITaskRepositoryToken } from "../domain/task.repository.interface";

@Injectable()
export class CreateTaskUseCase {
    constructor(
        @Inject(ITaskRepositoryToken) // <- Es mejor usar el Token (Symbol) que importaste en vez del string 'ITaskRepository'
        private readonly taskRepository: ITaskRepository
    ) {} // <- ¡Importante! Añadidas las llaves vacías del constructor
}