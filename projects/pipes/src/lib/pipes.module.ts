import { NgModule } from '@angular/core';
import { NgToStringPipe } from './pipes/array2string.pipe';
import { NgSortByPipe } from './pipes/sortBy.pipe';

@NgModule({
  declarations: [NgToStringPipe, NgSortByPipe],
  imports: [
  ],
  exports: [NgToStringPipe, NgSortByPipe]
})
export class PipesModule { }
