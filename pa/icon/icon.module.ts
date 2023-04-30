import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { HttpClientModule, } from '@angular/common/http';
import { IconDirective } from './icon.directive';



@NgModule({
  declarations: [IconDirective],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [IconDirective]
})
export class IconModule { }
