import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

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


  getErrorMessage(): string {
    return 'mensagem';    
  }

  onSubmit(){
    
  }
  
}

