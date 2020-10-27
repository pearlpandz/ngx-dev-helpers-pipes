import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize' })

export class NgCapitalizePipe implements PipeTransform {
    transform(str: string): any {
        if (str) {
            return str.charAt(0).toUpperCase() + str.slice(1);;
        } else {
            return ''
        }
    }
}

// {{'hello how are you?' | capitalize }}