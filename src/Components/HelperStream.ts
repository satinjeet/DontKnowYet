import { Subject } from "rxjs/Subject";

export const HelperStream = new Subject<any>();

HelperStream.subscribe((ev: any) => {
    console.log(ev);
})