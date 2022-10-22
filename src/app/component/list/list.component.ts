import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Guitar} from 'src/app/model/guitar'
import {GuitarsService } from 'src/app/service/guitars.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  term = ''
  guitars$!: Observable<Guitar[]>
  constructor(  private guitarService: GuitarsService) { }

  ngOnInit(): void {
    this.guitars$ = this.guitarService.getAll()
    console.log(this.guitars$)
  }

}
