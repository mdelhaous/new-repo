import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute  } from '@angular/router';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { category } from '../model/category.model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  articles:any
  

  constructor(private fb: FormBuilder,private http: HttpClient, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      if(localStorage.getItem('role')=='false'){
        window.location.href='/error'
      }
      else{this.getarticles();}
      
    } 
    // this.getarticles();
  }

  getarticles():any{
    this.http.get<any>('http://127.0.0.1:8000/api/getarticlesP/'+localStorage.getItem('user_id')).subscribe(
      (res: any) => {
            this.articles = res;
            console.log(res);
            
      })
  }

  supparticles(id:any):any{
    this.http.delete<any>('http://127.0.0.1:8000/api/deletearticleP/'+id).subscribe(
      (res: any) => {
            this.articles = res;
            console.log(res);
            
      })
  }

}
