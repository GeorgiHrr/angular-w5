import { Component, OnInit, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { WaifuPageService } from "../services/waifuPage.api";
import { HttpClientModule } from "@angular/common/http";

@Component({
    selector: 'app-waifu-page',
    standalone: true,
    imports: [FormsModule, HttpClientModule],
    templateUrl: './waifuPage.component.html',
    styleUrl: './waifuPage.component.css'
  })

  export class waifuPageComponent implements OnInit{
    private waifuApiService  = inject(WaifuPageService)
    public picUrl;   

    public picCollection: any = [];

    public ngOnInit(){
      this.getNekoPicture();
    }

    public getNekoPicture(){
      this.waifuApiService.getNekoWaifuPic().subscribe((data: any) => {
        this.picUrl = data.url;
      })
    }
    public getWaifuPicture(){
      this.waifuApiService.getWaifuPic().subscribe((data: any) => {
        this.picUrl = data.url;
      })
    }
    public getShinobuPicture(){
      this.waifuApiService.getShinobuWaifuPic().subscribe((data: any) => {
        this.picUrl = data.url;
      })
    }
    public getMeguminPicture(){
      this.waifuApiService.getMeguminWaifuPic().subscribe((data: any) => {
        this.picUrl = data.url;
      })
    }
}