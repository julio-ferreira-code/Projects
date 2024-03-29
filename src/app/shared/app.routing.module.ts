import { TelaInicialComponent } from '../../telaInicial/telaInicial.component';
import { CadastroComponent } from '../../cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../../login/login.component';
import { ListagemCadastrosComponent } from 'src/listagem-cadastros/listagem-cadastros.component';

const routes: Routes = [
  { path : '', component : LoginComponent },
  { path : 'login', component : LoginComponent },
  { path : 'cadastro', component : CadastroComponent },
  { path : 'telaInicial', component : TelaInicialComponent },
  { path : 'cadastros', component : ListagemCadastrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
