import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Articles:any;
  Users:any;
  Categories:any;
  
  constructor(private pieCanvas: ElementRef, private fb: FormBuilder,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('role')){
      window.location.href='/error'
    }
    else{
      this.getAllArt();
      this.getAllCatg();
      this.getAllUse();
    }
    
  }
  getAllCatg():any{
    this.http.get<any>('http://127.0.0.1:8000/api/getcatg').subscribe(
      (res: any) => {
            
            this.Categories = res[0].length;
            console.log(this.Categories);
      });
  }
  getAllArt():any{
    this.http.get<any>('http://127.0.0.1:8000/api/GetAllArticle').subscribe(
      (res: any) => {
            
            this.Articles = res[0].length;
            console.log(this.Articles);
      });
  }
  getAllUse():any{
    this.http.get<any>('http://127.0.0.1:8000/api/Getcl').subscribe(
      (res: any) => {
            
            this.Users = res.length;
            console.log(this.Users);
      });
  }

}
