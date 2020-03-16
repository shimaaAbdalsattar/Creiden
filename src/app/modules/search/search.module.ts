import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: SearchComponent
    }]),
  ]
})
export class SearchModule { }
