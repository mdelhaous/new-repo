import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cree-nv-article',
  templateUrl: './cree-nv-article.component.html',
  styleUrls: ['./cree-nv-article.component.css']
})
export class CreeNvArticleComponent implements OnInit {
  form!: FormGroup;
  urlImageaddd: string | undefined;
  constructor(private fb: FormBuilder,private http: HttpClient, private router: Router,private route: ActivatedRoute) { }

  prix: any;
  name: any;
  descriptif: any;
  cat_id: any;
  categories:any;
  ngOnInit(): void {
    if(localStorage.getItem('role')=='true'){
      window.location.href='/error'
    }
    else{
      this.http.get<any>('http://127.0.0.1:8000/api/getcatg').subscribe(
        (res: any) => {
              this.categories = res[0];
              console.log(this.categories);
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
  Ajouter(prix:any,name:any,descriptif:any){
    const data = {
      prix: prix,
      name: name,
      descriptif: descriptif,
      categorie_id: this.route.snapshot.params['id'],
      image: this.urlImageaddd
    }
    this.http.post('http://127.0.0.1:8000/api/addarticle', data).subscribe(
      (res: any) => {
            console.log(res);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'article added',
              showConfirmButton: false,
              timer: 1500
            });
            this.prix="";
            this.name="";
            this.descriptif="";
            this.cat_id="";
      });
      
  }
}
