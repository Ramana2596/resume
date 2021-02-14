import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AppMaterialModule } from '../app.material.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [LoginComponent]
})
export class LoginModuleModule { }
