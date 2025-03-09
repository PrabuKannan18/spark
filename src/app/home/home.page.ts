import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HttpClient } from '@angular/common/http';
import { YoutubeService } from '../_service/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class HomePage {
  trendingVideos: any;
  constructor(private http:HttpClient,private youtubeService:YoutubeService) {}

  ngOnInit() {
    this.getTrendingMusic();
  }

  getTrendingMusic() {
    this.youtubeService.getTrendingMusic().subscribe((res) => {
      // this.trendingVideos = res.items;
      console.log('trendingVideos', res);
    });
}

   
}