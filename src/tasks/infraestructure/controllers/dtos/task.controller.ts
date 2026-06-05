
import { CreateTaskUseCase } from "@//tasks/application/create-task.use-case";
import * as taskRepositoryInterface from "@//tasks/domain/task.repository.interface";
import { Controller, Get, Inject } from "@nestjs/common";
import { get } from "http";

@Controller("tasks")
export class TaskController {

    constructor (
        private readonly createTaskUseCase: CreateTaskUseCase,
        @Inject(taskRepositoryInterface.ITaskRepositoryToken)
        private readonly taskRepository: taskRepositoryInterface.ITaskRepository
    ) {}

    @Get()
    async findAll() {
        return this.taskRepository.findAll();
    }

}