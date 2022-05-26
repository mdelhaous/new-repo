import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute  } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-gestion-articles',
  templateUrl: './gestion-articles.component.html',
  styleUrls: ['./gestion-articles.component.css']
})
export class GestionArticlesComponent implements OnInit {
  articles:any;
  idart:any;
  form!: FormGroup;
  name: any;
  prix: any;
  descriptif: any;
  categorie_id: any;
  image: any;


  constructor(private modalService: NgbModal,private fb: FormBuilder,private http: HttpClient, private router: Router,private route: ActivatedRoute) { }

  
  ngOnInit(): void {
    if(localStorage.getItem('role')=='true'){
      window.location.href='/error'
    }
    else{
    this.getarticle();
    } 
  }
  ajouerArticle(){
    let id = this.route.snapshot.params['id'];
    window.location.href='/NouvArtc/'+id;
  }

  getarticle():any{
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.http.get<any>('http://127.0.0.1:8000/api/GetArticle/'+id).subscribe(
      (res: any) => {
            this.articles = res;
            console.log(res);
            
      })
  }

  SupprimerArticle(id:any){
    this.http.delete('http://127.0.0.1:8000/api/deletearticle/'+id).subscribe(
      ()=>{
        window.location.reload();
      }
    );


  // UpdateArticle(id:any):any{

  //   this.http.put('http://127.0.0.1:8000/api/updatearticle/'+id).subscribe(

  //     (res: any) => {
  //       this.categories = res;
  //       console.log(res);
  //     });
  //       }
    
}


update():any{
  const data = {
    name: this.name,
    prix: this.prix,
    descriptif: this.descriptif,
    categorie_id: this.categorie_id,
    image: this.image
  };
  this.http.put('http://127.0.0.1:8000/api/updatearticle/'+this.idart,data).subscribe(
    ()=>{
      window.location.reload();
    }
  );
}

getart(id:any){
  this.idart=id;
}

closeResult: string="";
open(content: any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}


}