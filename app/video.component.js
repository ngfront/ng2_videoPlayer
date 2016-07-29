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
var videoProgress_component_1 = require('./videoProgress.component');
var videoToolbar_component_1 = require('./videoToolbar.component');
var playerOptions_component_1 = require('./playerOptions.component');
var video_service_1 = require('./services/video.service');
var VideoComponent = (function () {
    function VideoComponent(videoService) {
        this.videoService = videoService;
    }
    VideoComponent.prototype.ngOnInit = function () {
        this.videoService.appSetup('videoDisplay');
        this.videoService.fetchPlayList();
    };
    VideoComponent = __decorate([
        core_1.Component({
            selector: 'custom-video',
            directives: [videoProgress_component_1.VideoProgress, videoToolbar_component_1.VideoToolbar, playerOptions_component_1.PlayerOptions],
            providers: [video_service_1.VideoService],
            template: "\n\t  <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div id=\"fullPlayer\">\n          <div class=\"embed-responsive embed-responsive-16by9\">\n              <video id=\"videoDisplay\" width=\"100%\" height=\"100%\" src=\"{{videoService.currentVideo}}\" class=\"embed-responsive-item\"></video>\n              <div id=\"bigPlayButton\" [hidden]=\"!videoService.isPaused\" (click)=\"videoService.togglePlayback()\"><i class=\"fa fa-play\"></i></div>\n              <div id=\"videoTitle\" [hidden]=\"!videoService.isPaused\">{{currentTitle}}</div>\n          </div>\n          <video-progress></video-progress>\n          <video-toolbar></video-toolbar>\n          <videoPlayer-options [hidden]=\"!videoService.isPlayerOptionsVisible\"></videoPlayer-options>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [video_service_1.VideoService])
    ], VideoComponent);
    return VideoComponent;
}());
exports.VideoComponent = VideoComponent;
//# sourceMappingURL=video.component.js.map