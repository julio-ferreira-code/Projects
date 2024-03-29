import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private router: Router, private fb: FormBuilder) { }

password!: string;
email!: string;
entrada!: FormGroup;

  ngOnInit(): void {
    this.entrada = this.fb.group({
      email: ['', Validators.email],
      password: ['']
    });
  }

  login() : void {
    if(this.entrada.get("email")?.value == 'ferreira@gmail.com' && this.entrada.get("password")?.value == '123'){
     this.router.navigate(["telaInicial"]);
     //alert("Entrou ulala!");

    }else {
      alert("Email ou senha inválida");
    }
  }
  }
