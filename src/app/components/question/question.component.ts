import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IQuestion } from 'src/app/Interface/IQuestion';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  name!: string;
  questions!: IQuestion[];
  options!: string[];
  correctAnswer!: string;
  currentQuestion: number = 0;
  selectedOption!: string;
  response: Array<{choice: string, answer: string}> = [];

  constructor(private _question: QuestionService,
      private _router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem("name") !== null) {
      this.name = localStorage.getItem("name")!;
    }
    this._question.getQuestion().subscribe(data => {
      this.questions = data.results;
      this.questions.map((data) => {
        data.incorrect_answers.push(data.correct_answer);
      });
      this.questions.map((data) => {
        data.incorrect_answers.sort(() => 0.5 - Math.random());
      });
    });
  }

  nextQuestion(opt: string) {
    this.correctAnswer = opt;
    this.response.push({choice: this.selectedOption, answer: this.correctAnswer});
    this.selectedOption = "";
    this.currentQuestion++;
  }

  prevQuestion() {
    this.currentQuestion--;
  }

  onSelect(option: string) {
    this.selectedOption = option;
  }

  onSubmit(opt: string){
    this.correctAnswer = opt;
    this.response.push({choice: this.selectedOption, answer: this.correctAnswer});
    localStorage.setItem('response', JSON.stringify(this.response));
    this._router.navigate(['/response']);
  }

}
