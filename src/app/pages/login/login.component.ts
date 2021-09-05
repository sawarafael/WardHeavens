import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credenciais = {
    email:    'admin',
    password: 'admin'
  }

  email: any = '';
  password: any = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit() {
      if (this.credenciais.email == this.email
         && this.credenciais.password == this.password) {
           this.router.navigateByUrl('list')
           console.log(`Login efetuado`);
         } else {

           console.log('erro na senha')
         }
  }

}
