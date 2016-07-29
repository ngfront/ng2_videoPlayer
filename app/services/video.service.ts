import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService { 
	public videoEl: any;
	public currentVideo: string = null;
	public currentTitle: string = null;
	public currentVideoDesc: string = null;
	public videoDuration: any = 0;
	public currentTime: any = 0;
	public calculatedWidth: number = 0;
	public calculatedScrubY: number = 0;
	public isMuted: boolean = false;
	public isPaused: boolean = true;
	public isPlayerOptionsVisible: boolean = false;
	public playlist: Array<Object>;

	constructor(private http: Http){

	}
	appSetup(v: string) {
		this.videoEl = <HTMLVideoElement> document.getElementById(v);
		

		this.videoEl.addEventListener('loadedmetadata', this.updateData);
		this.videoEl.addEventListener('timeupdate', this.updateTime);

		window.setInterval(this.trackProgress, 500);
	}
	updateData = (e: any) => {
		this.videoDuration = this.videoEl.duration;
	}

	updateTime = (e: any) => {
		this.currentTime = this.videoEl.currentTime;
	}

	trackProgress = () => {
		this.calculatedScrubY = this.videoEl.offsetHeight;
		const t = this.videoEl.currentTime;
		const d = this.videoEl.duration;
		this.calculatedWidth = ( t / d * this.videoEl.offsetWidth);
	}

	toggleMute = () => {
		if(this.videoEl.volume == 0) {
			this.videoEl.volume = 1;
			this.isMuted = false;
		}
		else {
			this.videoEl.volume = 0;
			this.isMuted = true;
		}
	}

	togglePlayback = () => {
		if(this.videoEl.paused) {
			this.videoEl.play();
			this.isPaused = false;
		}else {
			this.videoEl.pause();
			this.isPaused = true;
		}
	}

	toggleOptionsPanel = () => {
		this.isPlayerOptionsVisible = !this.isPlayerOptionsVisible;
	}

	fetchPlayList = () => {
		this.http.get('../data/playlist.json')
					.map((res: Response) => res.json())
					.subscribe(data => {
						this.playlist = data;
						this.currentVideo = this.playlist[1]['path'];
						this.currentTitle = this.playlist[1]['title'];
						this.currentVideoDesc = this.playlist[1]['description'];
					});
	}

	selectVideo(video) {
		this.currentVideo = video['path'];
		this.currentTitle = video['title'];
		this.currentVideoDesc = video['description'];
	}
}

