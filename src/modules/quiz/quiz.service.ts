import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQuizeDto } from "./dto/CreateQuize.dto"; 
import { Quiz } from "./quiz.entity";
import { QuizRepository } from "./quiz.repository";

@Injectable()
export class QuizService {
    constructor(
        @InjectRepository(Quiz) private quizRepository: Repository<Quiz>
    ){}

    getAllQuiz() {
        return [1, 3, 5, 'From the service'];
    }

    async getQuizById(id: number):Promise<Quiz>{
        return await this.quizRepository.findOne({where: { id: id,}})
    }

    async createNewQuiz(quiz: CreateQuizeDto){
       return await this.quizRepository.save(quiz);
    }
}