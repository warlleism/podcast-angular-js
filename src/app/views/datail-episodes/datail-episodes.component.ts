// Import necessary modules
import {
  Component,
  ViewChildren,
  ElementRef,
  QueryList,
  AfterViewInit,
} from '@angular/core';
import { Podcasts } from '../../data/podcasts';

@Component({
  selector: 'app-datail-episodes',
  templateUrl: './datail-episodes.component.html',
  styleUrls: ['./datail-episodes.component.scss'],
})
export class DatailEpisodesComponent implements AfterViewInit {
  podcasts = Podcasts;
  isPlaying: boolean[] = new Array(this.podcasts.length).fill(false);
  currentTimes: string[] = new Array(this.podcasts.length).fill('00:00'); // Added property for current times

  @ViewChildren('audioPlayer') audioPlayers!: QueryList<
    ElementRef<HTMLAudioElement>
  >;
  @ViewChildren('progressBar') progressBars!: QueryList<
    ElementRef<HTMLElement>
  >;

  ngAfterViewInit(): void {
    this.setupAudioEventListeners();
  }

  setupAudioEventListeners(): void {
    this.audioPlayers.forEach((audioPlayer, index) => {
      const audio: HTMLAudioElement = audioPlayer.nativeElement;

      audio.addEventListener('timeupdate', () => {
        this.updateProgressBar(audio, index);
      });

      audio.addEventListener('pause', () => {
        this.isPlaying[index] = false;
      });

      audio.addEventListener('play', () => {
        this.isPlaying[index] = true;
      });
    });
  }

  toggleAudio(index: number): void {
    const audio: HTMLAudioElement =
      this.audioPlayers.toArray()[index].nativeElement;

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  calculateProgress(audio: HTMLAudioElement): number {
    return (audio.currentTime / audio.duration) * 100 || 0;
  }

  updateProgressBar(audio: HTMLAudioElement, index: number): void {
    const progressBar: HTMLElement =
      this.progressBars.toArray()[index].nativeElement;

    const progress = this.calculateProgress(audio);
    progressBar.style.width = `${progress}%`;

    // Update current time property
    this.currentTimes[index] = this.formatTime(audio.currentTime);
  }

  setProgress(event: MouseEvent, index: number): void {
    const progressBar = event.currentTarget as HTMLElement;
    const rect = progressBar.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    const audio: HTMLAudioElement =
      this.audioPlayers.toArray()[index].nativeElement;
    audio.currentTime = (percentage / 100) * audio.duration;
    this.updateProgressBar(audio, index);
  }

  formatTime(time: number): string {
    if (!isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${this.pad(minutes)}:${this.pad(seconds)}`;
    } else {
      return '00:00';
    }
  }

  pad(value: number): string {
    return value < 10 ? '0' + value : '' + value;
  }

  getCurrentTime(index: number): string {
    return this.currentTimes[index];
  }
}
