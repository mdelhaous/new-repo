import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute  } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gestion-categorie',
  templateUrl: './gestion-categorie.component.html',
  styleUrls: ['./gestion-categorie.component.css']
})
export class GestionCategorieComponent implements OnInit {
  categories:any;
  form!: FormGroup;
  name: any;
  idCat: any;

  constructor(private modalService: NgbModal,private fb: FormBuilder,private http: HttpClient, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(localStorage.getItem('role')=='true'){
      window.location.href='/error'
    }
    else{
      this.getAllCatg();
    } 
    
    
  }


  getAllCatg():any{
    this.http.get<any>('http://127.0.0.1:8000/api/getcatg',{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).subscribe(
      (res: any) => {
            
            this.categories = res;
            console.log(res);
      });
  }

  


  SupprimerCatg(id:any):any{
    this.http.delete('http://127.0.0.1:8000/api/deletecatg/'+id).subscribe(
        ()=>{
          window.location.reload();
        }
      );
  }

  getCat(id:any){
    this.idCat=id;
  }
  update():any{
    const data = {
      name: this.name
    };
    this.http.put('http://127.0.0.1:8000/api/updatecatg/'+this.idCat,data).subscribe(
      ()=>{
        window.location.reload();
      }
    );
  }

//   AjouteruneNvCatg(id:any):any{
//     const formData = this.form.getRawValue();
//     const data = {
//       name: formData.string,
      
//     }
//     this.http.post('http://127.0.0.1:8000/api/addarticle',data).subscribe(
//       (res:any)=>{
//         console.log(res);

// });
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