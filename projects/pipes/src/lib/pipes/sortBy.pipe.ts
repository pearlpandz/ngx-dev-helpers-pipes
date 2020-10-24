import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "sortBy" })

export class NgSortByPipe implements PipeTransform {
    transform(array: any, field = null): any[] {
        if (!Array.isArray(array)) {
            return;
        }
        if (field != null) {
            array.sort((a: any, b: any) => {
                if (a[field] < b[field]) {
                    return -1;
                } else if (a[field] > b[field]) {
                    return 1;
                } else {
                    return 0;
                }
            });
            console.log(array);
            return array;
        } else {
            return array.sort();
        }
    }
}

// *ngFor="let c of arrayOfObjects | sort:'field'"
// *ngFor="let c of array | sortBy"
