import { Component, OnInit } from '@angular/core';
import {VideoProgress} from './videoProgress.component';
import {VideoToolbar} from './videoToolbar.component';
import {PlayerOptions} from './playerOptions.component';
import {VideoService} from './services/video.service';

@Component({
  selector: 'custom-video',
  directives: [VideoProgress, VideoToolbar, PlayerOptions],
  providers: [VideoService],
  template: `
	  <div class="row">
      <div class="col-sm-12">
        <div id="fullPlayer">
          <div class="embed-responsive embed-responsive-16by9">
              <video id="videoDisplay" width="100%" height="100%" src="{{videoService.currentVideo}}" class="embed-responsive-item"></video>
              <div id="bigPlayButton" [hidden]="!videoService.isPaused" (click)="videoService.togglePlayback()"><i class="fa fa-play"></i></div>
              <div id="videoTitle" [hidden]="!videoService.isPaused">{{currentTitle}}</div>
          </div>
          <video-progress></video-progress>
          <video-toolbar></video-toolbar>
          <videoPlayer-options [hidden]="!videoService.isPlayerOptionsVisible"></videoPlayer-options>
        </div>
      </div>
    </div>
  `
})
export class VideoComponent implements OnInit { 

  currentVideo: string;
  currentTitle: string;

  constructor(public videoService: VideoService){

  }
  ngOnInit() {
    this.videoService.appSetup('videoDisplay');
    this.videoService.fetchPlayList();
  }
}
