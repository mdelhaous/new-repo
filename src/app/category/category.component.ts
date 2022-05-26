import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { category } from '../model/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:any;
  constructor(private fb: FormBuilder,private http: HttpClient, private router: Router) { }
articles:any;
  ngOnInit(): void {
    this.getAllCatg();
  }

  getAllCatg():any{
    this.http.get<any>('http://127.0.0.1:8000/api/getcatg').subscribe(
      (res: any) => {
            
            this.categories = res;
            console.log(res);
      });
  }

  onGetAllCatg(){

  }


}
