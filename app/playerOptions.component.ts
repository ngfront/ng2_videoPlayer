import {Component} from '@angular/core';
import {VideoService} from './services/video.service';

@Component({
	selector: 'videoPlayer-options',
	template: `
		<a id="close-panel" (click)="videoService.toggleOptionsPanel()"><i class="fa fa-close"></i></a>
		<div class="currentVideoDetails">
			<h3>{{videoService.currentTitle}}</h3>
			<p>{{videoService.currentVideoDesc}}</p>
		</div>
		<div class="playlist">
			<h3>Playlist</h3>
			<ul>
			<li *ngFor="let video of videoService.playlist" (click)="videoService.selectVideo(video)">
				{{video.title}}
			</li>
			</ul>
		</div>
	`
})
export class PlayerOptions{
	constructor(public videoService:VideoService ) {

	}
}