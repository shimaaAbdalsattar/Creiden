import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: UserComponent
    }])
  ],
})
export class UserModule { }
