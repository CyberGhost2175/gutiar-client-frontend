import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  form!:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:'',
      email: '',
      content: ''
    });
  }
  submit(): void {
    this.http.post('http://localhost:8000/api/contact', this.form.getRawValue(), {
      withCredentials: true
    }).subscribe(() => this.router.navigate(['/home']));
  }
}
