import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'NgArray2String' })
export class NgArray2String implements PipeTransform {
    transform(value: any[], field = null): any {
        if (value) {
            if (field != null) { // array of object
                const str = value.map(a => a[field]).toString();
                return str;
            } else { // plain array
                const str = value.map(a => a).toString();
                return str;
            }
        } else {
            return ''
        }
    }
}
