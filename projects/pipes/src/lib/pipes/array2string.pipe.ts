import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toString' })

export class NgToStringPipe implements PipeTransform {
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

// {{buckets | NgArray2String: 'name'}}
// {{ [1,2,3,4] | NgArray2String  }}