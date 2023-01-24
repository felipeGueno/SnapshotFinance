import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserRegistration } from '../models/UserRegistration';
import { UserService } from 'src/app/services/UserService.services';

import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {



constructor(private router : Router, private userService: UserService){}
  
  email = new FormControl('');
  hide = true;
  checked = false;
  indeterminate = false;

  userRegistration : UserRegistration ={
    name:'',
    email:'',
    password:''
  }

  
  
  saveUser():void {
    let erro : any;
    this.userService.saveUser(this.userRegistration).subscribe(
      {
        next : (res) =>{
           this.userService.message(res)
        },
        error : (err) => {
          ErrorEvent
          console.log(err)
        },
      
    }
    ); 
  }

  getErrorMessage(): string {
    return 'mensagem';    
  }

  onSubmit(){
    
  }
  
}

