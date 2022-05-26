import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { category } from '../model/category.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedIn = false;
  cart =false;

  constructor(private fb: FormBuilder,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('role')=='true'){
      this.cart=true;
    }
    else{
      this.cart =false;
    }

    if(localStorage.getItem('token')){
      this.loggedIn = true;
    } else{
      this.loggedIn = false;
    }
  }


  logout(): void{

    
     window.location.href = "http://localhost:4200/login";
    localStorage.clear();
    
  }



  }

