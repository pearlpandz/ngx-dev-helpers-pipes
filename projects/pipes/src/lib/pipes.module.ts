import { NgModule } from '@angular/core';

import { NgToStringPipe } from './pipes/array2string.pipe';
import { NgCapitalizePipe } from './pipes/capitalize.pipe';
import { NgLowercasePipe } from './pipes/lowercase.pipe';
import { NgFindAndReplacePipe } from './pipes/replace.pipe';
import { NgSortByPipe } from './pipes/sortBy.pipe';
import { NgUppercasePipe } from './pipes/uppercase.pipe';

@NgModule({
  declarations: [NgToStringPipe, NgSortByPipe, NgCapitalizePipe, NgLowercasePipe, NgUppercasePipe, NgFindAndReplacePipe],
  imports: [],
  exports: [NgToStringPipe, NgSortByPipe, NgCapitalizePipe, NgLowercasePipe, NgUppercasePipe, NgFindAndReplacePipe]
})
export class PipesModule { }
