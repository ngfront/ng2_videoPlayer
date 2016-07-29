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
var video_service_1 = require('./services/video.service');
var timeDisplay_pipe_1 = require('./timeDisplay.pipe');
var VideoToolbar = (function () {
    function VideoToolbar(videoService) {
        this.videoService = videoService;
    }
    VideoToolbar = __decorate([
        core_1.Component({
            selector: 'video-toolbar',
            pipes: [timeDisplay_pipe_1.TimeDisplayPipe],
            template: "\n\t<div id=\"playerToolBar\">\n\t<a id=\"playBtn\" class=\"btn btn-default\" (click)=\"videoService.togglePlayback()\">\n\t\t<i [ngClass]=\"{'fa-play': videoService.isPaused, 'fa-pause': !videoService.isPaused}\" class=\"fa\"></i>\n\t</a>\n\t<a id=\"muteBtn\" class=\"btn btn-default\" (click)=\"videoService.toggleMute()\">\n\t\t<i class=\"fa\" [ngClass]=\"{'fa-volume-off' : videoService.isMuted, 'fa-volume-up': !videoService.isMuted}\"></i>\n\t</a>\n\t\t<span id=\"vodeoTime\">{{videoService.currentTime | timeDisplay}} / {{videoService.videoDuration | timeDisplay}}</span>\n\t\t<a id=\"fsBtn\" class=\"btn btn-default pull-right\" (click)=\"videoService.fullScreen()\"><i class=\"fa fa-expand\"></i></a>\n\t\t<a id=\"\" class=\"btn btn-default pull-right\" (click)=\"videoService.toggleOptionsPanel()\"><i class=\"fa fa-bars\"></i></a>\n\n\t</div>\n  "
        }), 
        __metadata('design:paramtypes', [video_service_1.VideoService])
    ], VideoToolbar);
    return VideoToolbar;
}());
exports.VideoToolbar = VideoToolbar;
//# sourceMappingURL=videoToolbar.component.js.map