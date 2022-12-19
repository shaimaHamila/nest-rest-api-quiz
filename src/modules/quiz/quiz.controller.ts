import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizeDto } from './dto/CreateQuize.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')

export class QuizController {

    constructor(private quizService: QuizService){}

    @Get('/')
    getAllQuiz(){
        return this.quizService.getAllQuiz();
    }

    @Post('/create')

    // @HttpCode(200)

    @UsePipes(ValidationPipe)

    async createQuize(@Body() quizData: CreateQuizeDto){
        return await this.quizService.createNewQuiz(quizData);
    }
 
}
