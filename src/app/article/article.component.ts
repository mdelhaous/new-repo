import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute  } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles:any;
  articlesAuPanier: any;
  constructor(private fb: FormBuilder,private http: HttpClient, private router: Router,private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getarticle();
  }
  getarticle(): any{
    let id = this.route.snapshot.params['id'];
    this.http.get<any>('http://127.0.0.1:8000/api/GetArticle/'+id).subscribe(
      (res: any) => {
            this.articles = res;
      });
      this.http.get<any>('http://127.0.0.1:8000/api/getarticlesP/'+localStorage.getItem('user_id')).subscribe(
      (res: any) => {
            this.articlesAuPanier = res;
            for (let i = 0; i < this.articles.length; i++) {
              for(let j=0; j < this.articlesAuPanier.length; j++){
                if(this.articles[i].id==this.articlesAuPanier[0][j].id){
                 this.articles[i]["isOnPanier"]=true;
                }
                else{
                  this.articles[i]["isOnPanier"]=false;
                }
              }
            }
            console.log(this.articles)
      })
  }
  RetirerDuPanier(id: any){
    this.http.delete<any>('http://127.0.0.1:8000/api/deletearticleP/'+id).subscribe(
  (res: any) => {
        this.ngOnInit();
        
  })
}
  AjouterAuPanier(id:any):any{
    console.log('Bearer' + localStorage.getItem("token"))
    const data = {
      article_id : id,
      user_id : localStorage.getItem('user_id')
    }
    this.http.post('http://127.0.0.1:8000/api/addarticleToPanier',data,
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }
    ).subscribe(
      (res:any)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        });
        this.ngOnInit();
      }
    );
    
}

}
