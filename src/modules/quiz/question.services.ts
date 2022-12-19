import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { Question } from "./question.entity";
import { Quiz } from "./quiz.entity";

@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(Question) private quizRepository: Repository<Question>
    ){}

    async createQuestion(question: CreateQuestionDto, quiz: Quiz): Promise<Question>{
         return await this.quizRepository.save(question);
    }
}