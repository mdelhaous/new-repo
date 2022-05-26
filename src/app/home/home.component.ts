import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories:any;
  constructor(private fb: FormBuilder,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getAllCatg;
  }
  


  getAllCatg():any{
    this.http.get<any>('http://127.0.0.1:8000/api/getcatg').subscribe(
      (res: any) => {
            
            this.categories = res;
            console.log(res);
      });
  }
}
