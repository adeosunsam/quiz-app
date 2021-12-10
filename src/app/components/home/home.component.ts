import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalQuestion!: number;

  @ViewChild('name') nameKey!: ElementRef;
  constructor(private _question: QuestionService) { }

  ngOnInit(): void {
    this._question.getQuestion().subscribe((data) => {
      this.totalQuestion = data.results.length;
    })
  }

  startQuiz(){
    localStorage.setItem("name", this.nameKey.nativeElement.value);
  }

}
