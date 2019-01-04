import { of } from "rxjs";
import { map, switchMap } from 'rxjs/operators'
export function test() {
    of(1, 2, 3, 4)
        .pipe(
            map(value => {
                return value * 2;
            }),
            switchMap(value => value * 2)
        )
        .subscribe(value => {
            console.log(value);
        })
}

