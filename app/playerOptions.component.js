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
var PlayerOptions = (function () {
    function PlayerOptions(videoService) {
        this.videoService = videoService;
    }
    PlayerOptions = __decorate([
        core_1.Component({
            selector: 'videoPlayer-options',
            template: "\n\t\t<a id=\"close-panel\" (click)=\"videoService.toggleOptionsPanel()\"><i class=\"fa fa-close\"></i></a>\n\t\t<div class=\"currentVideoDetails\">\n\t\t\t<h3>{{videoService.currentTitle}}</h3>\n\t\t\t<p>{{videoService.currentVideoDesc}}</p>\n\t\t</div>\n\t\t<div class=\"playlist\">\n\t\t\t<h3>Playlist</h3>\n\t\t\t<ul>\n\t\t\t<li *ngFor=\"let video of videoService.playlist\" (click)=\"videoService.selectVideo(video)\">\n\t\t\t\t{{video.title}}\n\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [video_service_1.VideoService])
    ], PlayerOptions);
    return PlayerOptions;
}());
exports.PlayerOptions = PlayerOptions;
//# sourceMappingURL=playerOptions.component.js.map