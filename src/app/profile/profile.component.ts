
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute  } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile:any;
  constructor(private modalService: NgbModal,private fb: FormBuilder,private http: HttpClient, private router: Router,private route: ActivatedRoute) { }
hasProf=true
  ngOnInit(): void {
    this.GetmyProfile()

  }
  GetmyProfile():any{
    
    this.http.get('http://127.0.0.1:8000/api/GOP/'+localStorage.getItem('user_id')).subscribe(
      (res:any)=>{
        this.profile = res[0];
        console.log(res);
      }
    );}
  sexe:any;
  dateN:any;
  addresse:any;
  ville:any;
  numtele:any;
  

  update():any{
    const data = {
      sexe:this.sexe,
      dateN:this.dateN,
      addresse:this.addresse,
      ville:this.ville,
      numtele:this.numtele,        
    };
    this.http.put('http://127.0.0.1:8000/api/UP/'+localStorage.getItem('user_id'),data).subscribe(
      (res)=>{
        console.log(res);

        window.location.reload();
      }
    );
  

}
}