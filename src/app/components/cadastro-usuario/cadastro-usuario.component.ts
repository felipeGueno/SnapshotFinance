import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserRegistration } from '../models/UserRegistration';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
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
    
  }

  


  getErrorMessage(): string {
    return 'mensagem';    
  }

  onSubmit(){
    
  }
  
}

