/*
 * Angular
 */
import {Component} from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import {VideoComponent} from './video.component';



bootstrap(VideoComponent, [
  HTTP_PROVIDERS
]);
