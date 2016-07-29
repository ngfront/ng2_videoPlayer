"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var VideoService = (function () {
    function VideoService(http) {
        var _this = this;
        this.http = http;
        this.currentVideo = null;
        this.currentTitle = null;
        this.currentVideoDesc = null;
        this.videoDuration = 0;
        this.currentTime = 0;
        this.calculatedWidth = 0;
        this.calculatedScrubY = 0;
        this.isMuted = false;
        this.isPaused = true;
        this.isPlayerOptionsVisible = false;
        this.updateData = function (e) {
            _this.videoDuration = _this.videoEl.duration;
        };
        this.updateTime = function (e) {
            _this.currentTime = _this.videoEl.currentTime;
        };
        this.trackProgress = function () {
            _this.calculatedScrubY = _this.videoEl.offsetHeight;
            var t = _this.videoEl.currentTime;
            var d = _this.videoEl.duration;
            _this.calculatedWidth = (t / d * _this.videoEl.offsetWidth);
        };
        this.toggleMute = function () {
            if (_this.videoEl.volume == 0) {
                _this.videoEl.volume = 1;
                _this.isMuted = false;
            }
            else {
                _this.videoEl.volume = 0;
                _this.isMuted = true;
            }
        };
        this.togglePlayback = function () {
            if (_this.videoEl.paused) {
                _this.videoEl.play();
                _this.isPaused = false;
            }
            else {
                _this.videoEl.pause();
                _this.isPaused = true;
            }
        };
        this.toggleOptionsPanel = function () {
            _this.isPlayerOptionsVisible = !_this.isPlayerOptionsVisible;
        };
        this.fetchPlayList = function () {
            _this.http.get('../data/playlist.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.playlist = data;
                _this.currentVideo = _this.playlist[1]['path'];
                _this.currentTitle = _this.playlist[1]['title'];
                _this.currentVideoDesc = _this.playlist[1]['description'];
            });
        };
    }
    VideoService.prototype.appSetup = function (v) {
        this.videoEl = document.getElementById(v);
        this.videoEl.addEventListener('loadedmetadata', this.updateData);
        this.videoEl.addEventListener('timeupdate', this.updateTime);
        window.setInterval(this.trackProgress, 500);
    };
    VideoService.prototype.selectVideo = function (video) {
        this.currentVideo = video['path'];
        this.currentTitle = video['title'];
        this.currentVideoDesc = video['description'];
    };
    VideoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], VideoService);
    return VideoService;
}());
exports.VideoService = VideoService;
//# sourceMappingURL=video.service.js.map