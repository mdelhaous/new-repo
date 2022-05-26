import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cree-nv-catg',
  templateUrl: './cree-nv-catg.component.html',
  styleUrls: ['./cree-nv-catg.component.css']
})
export class CreeNvCatgComponent implements OnInit {
  cheminImage:any = ".../../assets/images/";
  form!: FormGroup;
  urlImageaddd: string | undefined;
  adresscurentuser: any;
  constructor(private fb: FormBuilder,private http: HttpClient, private router: Router ,private route:ActivatedRoute) { 
    router.events.subscribe(event=>{
      if (event instanceof NavigationEnd){
        let url1 =  this.route.snapshot.url.pop();
        this.adresscurentuser=url1;
        console.log("adressUser issss "+url1);
      }
    })
  }
  name: any;
  image : any;

  ngOnInit(): void {
    if(localStorage.getItem('role')=='true'){
      window.location.href='/error'
    }
    else{

    this.form = this.fb.group({
      name: '',
      image: ''
    });
  }
  }
  onSelectImage(event:any)
  {
    console.log(event);
    if (event.target.files){
      console.log(event.target.files[0].name);
      this.urlImageaddd="../../assets/images/"+event.target.files[0].name;
      console.log("urlImageaddd : "+this.urlImageaddd);
    }
  }

  // Ajouter(name:any){
  //   const formData = this.form.getRawValue();
  //   const data = {
  //     name: formData.string,
    
  //   }
  //   this.http.post('http://127.0.0.1:8000/api/addarticle', data).subscribe(
  //     (res: any) => {
  //           console.log(res);
  //     });
  // }
  Ajouter(name: any){
    const data = {
      name: this.name,
       image: this.urlImageaddd
    }
    console.log(data)
    this.http.post('http://127.0.0.1:8000/api/addcatg', data).subscribe(
      (res: any) => {
            console.log(res);
              Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'category added',
              showConfirmButton: false,
              timer: 1500
            });
      });
  }

}
