import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private apikey = 'AIzaSyAEd7h_cslu-1-0J1EcrwkWWB9vqAu7mDI';
  private youtubeUrl = 'https://www.googleapis.com/youtube/v3/search';

  constructor(private http:HttpClient) { }

  getTrendingMusic(): Observable<any>{
    return this.http.get(`${this.youtubeUrl}/videos`,{
      params: {
        part:'snippet,statistics',
        maxResults: '10',
        chart:'mostPopular',
        regionCode: 'US',
        key: this.apikey
      }
    })
  }

  searchSongandArtist(query:string){
    return this.http.get(`${this.youtubeUrl}/search`,{
      params: {
        part:'snippet',
        maxResults: '10',
        q: query,
        key: this.apikey
      }
    })
  }


  convertToAudio(videoId: string): Observable<any> {
    const url = `https://api.y2mate.com/convert?url=https://www.youtube.com/watch?v=${videoId}&format=mp3`;
    return this.http.get(url);
  }

}