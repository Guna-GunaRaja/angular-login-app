import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})  
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  constructor( private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  _url = 'http://localhost:3001/login';
  response = ''
  login(event: any, data: any){
    event.preventDefault();

    return this.http.post(this._url, data, { responseType: 'text' as const}).subscribe(   
      res=>{console.log(res)
        this.response = res
        if(res==='OK'){
          alert("login succesful")
        }
      } 
    )
  }

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }

}