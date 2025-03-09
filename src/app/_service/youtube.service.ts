import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private saavnUrl = 'https://saavn.dev/api/search/songs?query=Believer';

  constructor(private http: HttpClient) {}

  // Get trending music (JioSaavn doesn't have a direct trending API, so we may need an alternative)
  getTrendingMusic(): Observable<any> {
    return this.http.get(`${this.saavnUrl}/songs/recommendations`);
  }

  // Search for songs and artists
  searchSongandArtist(query: string): Observable<any> {
    return this.http.get(`${this.saavnUrl}/search/songs`, {
      params: { query }
    });
  }
}