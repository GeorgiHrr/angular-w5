import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class CatPageService{
    private http = inject(HttpClient)

    public getCatPic(){
        return this.http.get('https://api.thecatapi.com/v1/images/search');
    }
}