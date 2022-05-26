import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
    
  form!: FormGroup;
  constructor(private fb: FormBuilder,private http: HttpClient, private router: Router) { }



  ngOnInit(): void {
   
  
    
    
  }

  confirm_password:any;
  name:any;
  email:any;
  password:any;
  registerAli(confirm_password:any,name:any,email:any,password:any){
    
    const data = {
      name: name,
      email: email,
      password: password,
      role: "internaute",
      confirm_password: confirm_password
    }
    console.log(data);
    this.http.post('http://127.0.0.1:8000/api/register', data).subscribe(
      (res: any) => {
        console.log(res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'register with Success',
          showConfirmButton: false,
          timer: 1500
        });
        window.location.href = "http://localhost:4200/login";
      });

      
  }

  


   
}
