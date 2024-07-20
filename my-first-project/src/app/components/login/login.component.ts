import { Component , OnInit} from '@angular/core';
import {FormGroup,FormControl, Validators,FormBuilder  } from "@angular/forms";
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { response } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  loginForm:FormGroup;
  constructor (private formBuilder:FormBuilder, 
    private authService:AuthService,
    private toastrService:ToastrService){}

  ngOnInit(): void {

  }

    createLoginForm(){
      this.loginForm=this.formBuilder.group({
      emial:["",Validators.required],
      password:["", Validators.required]
      })
    }
    
    login(){
      if(this.loginForm.valid){
        console.log(this.loginForm.value);
        let loginModel=Object.assign({},this.loginForm.value)

        this.authService.login(loginModel).subscribe(response=>{
        this.toastrService.info(response.message)
        localStorage.setItem("token",response.data.token)
        }, responseError=>{
          this.toastrService.error(responseError.error)
        })
      }
    }
  

}
