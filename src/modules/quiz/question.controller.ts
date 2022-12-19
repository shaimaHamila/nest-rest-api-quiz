import { ValidationPipe } from "@nestjs/common"
import { Body, Controller, Post, UsePipes } from "@nestjs/common/decorators"
import { CreateQuestionDto } from "./dto/create-question.dto"
import { Question } from "./question.entity";
import { QuestionService } from "./question.services";
import { QuizService } from "./quiz.service";

@Controller('question')

export class QuestionController{

   constructor( 
      private questionService: QuestionService, 
      private quizService: QuizService
      ){}

   @Post('')
   @UsePipes(ValidationPipe)

     async saveQuestion( @Body() question: CreateQuestionDto): Promise<Question>{
         const quiz = await this.quizService.getQuizById(question.quizId)
         return await this.questionService.createQuestion(question, quiz)
     }
}