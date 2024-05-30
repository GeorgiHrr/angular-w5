import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CatPageService } from "../services/catPage.api";

@Component({
    selector: 'app-cat-page',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './catPage.component.html',
    styleUrl: './catPage.component.css'
  })

  export class catPageComponent{
    private catApiService  = inject(CatPageService)
    public picUrl;   

    public ngOnInit(){
      this.getCatPicture();
      console.log(this.picUrl);
    }

    public getCatPicture(){
      this.catApiService.getCatPic().subscribe((data: any) => {
        this.picUrl = data[0].url;
        console.log(this.picUrl);
      })
    }
  }