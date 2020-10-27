import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'lowercase' })

export class NgLowercasePipe implements PipeTransform {
    transform(str: string): any {
        if (str) {
            return str.toLowerCase();
        } else {
            return '';
        }
    }
}

// {{'HELLO, HOW ARE YOU?' | lowercase }}
// hello, how are you?