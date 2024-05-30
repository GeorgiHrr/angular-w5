import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class WaifuPageService{
    private http = inject(HttpClient)

    public getNekoWaifuPic(){
        return this.http.get('https://api.waifu.pics/sfw/neko');
    }
    public getWaifuPic(){
        return this.http.get('https://api.waifu.pics/sfw/waifu');
    }
    public getShinobuWaifuPic(){
        return this.http.get('https://api.waifu.pics/sfw/shinobu');
    }
    public getMeguminWaifuPic(){
        return this.http.get('https://api.waifu.pics/sfw/megumin');
    }
}