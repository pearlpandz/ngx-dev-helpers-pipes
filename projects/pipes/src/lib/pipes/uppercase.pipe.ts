import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'uppercase' })

export class NgUppercasePipe implements PipeTransform {
    transform(str: string): any {
        if (str) {
            return str.toUpperCase();
        } else {
            return '';
        }
    }
}

// {{'hello, how are you?' | uppercase }}
// HELLO, HOW ARE YOU?