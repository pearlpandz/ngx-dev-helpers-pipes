import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'replace' })

export class NgFindAndReplacePipe implements PipeTransform {
    transform(str: string, find: string, replace: string): any {
        if (str) {
            return str.replace(find, replace);
        } else {
            return ''
        }
    }
}

// {{'hello how are you?' | replace:'how':'muthupandi' }}