import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form!: FormGroup;
  constructor(private fb: FormBuilder,private http: HttpClient, private router: Router) { }

  ngOnInit(): void { 

    // if(localStorage.getItem('token')){
    //   window.location.href = "http://localhost:4200/category";
       
    // if (localStorage.getItem('token') !== null) {
    //   if (localStorage.getItem('role') == 'Admin')
    //     this.router.navigate(['/GestCatg']);
    //   else  (localStorage.getItem('role') == 'internaute')
    //     this.router.navigate(['/category']);
    // }
    this.form = this.fb.group({
      email: '',
      pass: ''
    });
  }
  profile = {
    sexe : " _ ",
    dateN : " _ ",
    addresse : " _ ",
    ville : " _ ",
    numtele : " _ ",
    user_id : 0
  };
  email:any;
  pass:any;
  login(email:any,pass:any){
    const data = {
      email: this.email,
      password: this.pass
    }
    this.http.post('http://127.0.0.1:8000/api/login', data).subscribe(
      (res: any) => {
            console.log(res.data);
            localStorage.setItem('token',res.data.token);
            localStorage.setItem('user_id',res.data.id);
            localStorage.setItem('role',res.data.role);
            this.http.get('http://127.0.0.1:8000/api/GOP/'+res.data.id).subscribe(
              (res1:any)=>{
                if(localStorage.getItem('role') == "true"){
                  if(res1.length == 0){
                    this.profile.user_id = res.data.id;
                    this.createProfile();
                    window.location.href='/category';
                }
                else{
                  window.location.href='/category';
                }

              }
              else {
                window.location.href='/dashboard';


              } 
          
               
              }
            );    
      });
       
  }  
  createProfile(){
    this.http.post('http://127.0.0.1:8000/api/CP',this.profile).subscribe(
      (res)=>{
        console.log(res);

        window.location.reload();
      }
    );
  }

}
