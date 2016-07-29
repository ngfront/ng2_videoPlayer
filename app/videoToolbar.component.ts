import { Component, OnInit } from '@angular/core';

import {VideoService} from './services/video.service';
import {TimeDisplayPipe} from './timeDisplay.pipe';

@Component({
  selector: 'video-toolbar',
  pipes: [TimeDisplayPipe],
  template: `
	<div id="playerToolBar">
	<a id="playBtn" class="btn btn-default" (click)="videoService.togglePlayback()">
		<i [ngClass]="{'fa-play': videoService.isPaused, 'fa-pause': !videoService.isPaused}" class="fa"></i>
	</a>
	<a id="muteBtn" class="btn btn-default" (click)="videoService.toggleMute()">
		<i class="fa" [ngClass]="{'fa-volume-off' : videoService.isMuted, 'fa-volume-up': !videoService.isMuted}"></i>
	</a>
		<span id="vodeoTime">{{videoService.currentTime | timeDisplay}} / {{videoService.videoDuration | timeDisplay}}</span>
		<a id="fsBtn" class="btn btn-default pull-right" (click)="videoService.fullScreen()"><i class="fa fa-expand"></i></a>
		<a id="" class="btn btn-default pull-right" (click)="videoService.toggleOptionsPanel()"><i class="fa fa-bars"></i></a>

	</div>
  `
})
export class VideoToolbar{ 
	constructor(public videoService: VideoService){

	}
}
