import { Component } from '@angular/core';
import { VideoService } from './services/video.service';

@Component({
  selector: 'video-progress',
  template: `
	<div id="progressMeterFull">
        <div id="progressMeter" [style.width.px]="videoService.calculatedWidth"></div>
    </div>
    <div id="thumbScrubber" [style.top.px]="videoService.calculatedScrubY - 2" [style.left.px]="videoService.calculatedWidth"></div>
  `
})
export class VideoProgress  { 
	constructor(public videoService: VideoService ) {

	}
}