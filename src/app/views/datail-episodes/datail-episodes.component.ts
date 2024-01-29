import { Component, ViewChildren, ElementRef, QueryList, AfterViewInit } from '@angular/core';
import { PodcastsTracks } from '../../data/podcasts-tracks';

@Component({
  selector: 'app-datail-episodes',
  templateUrl: './datail-episodes.component.html',
  styleUrls: ['./datail-episodes.component.scss'],
})
export class DatailEpisodesComponent implements AfterViewInit {
  podcasts = PodcastsTracks;
  skipSeconds = 5;
  isPlaying: boolean[] = new Array(this.podcasts.length).fill(false);
  currentTimes: string[] = new Array(this.podcasts.length).fill('00:00');

  @ViewChildren('audioPlayer') audioPlayers!: QueryList<ElementRef<HTMLAudioElement>>;
  @ViewChildren('progressBar') progressBars!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit(): void {
    let data = localStorage.getItem('type');
    this.podcasts = this.podcasts.filter((e: any) => e.type === data);
    setTimeout(() => {
      this.setupAudioEventListeners();
    }, 90);
  }

  skipForward(index: number): void {
    const audio: HTMLAudioElement = this.audioPlayers.toArray()[index].nativeElement;
    audio.currentTime += this.skipSeconds;
    this.updateProgressBar(audio, index);
  }

  skipBackward(index: number): void {
    const audio: HTMLAudioElement = this.audioPlayers.toArray()[index].nativeElement;
    audio.currentTime -= this.skipSeconds;
    this.updateProgressBar(audio, index);
  }

  setupAudioEventListeners(): void {
    this.audioPlayers.forEach((audioPlayer, index) => {
      const audio: HTMLAudioElement = audioPlayer.nativeElement;
      const podcastId = this.podcasts[index].id; // Supondo que cada podcast tenha uma propriedade 'id'
      const savedProgress = localStorage.getItem(`progress_${podcastId}`);
      if (savedProgress) {
        audio.currentTime = parseFloat(savedProgress);
        this.updateProgressBar(audio, index);
      }
      audio.addEventListener('timeupdate', () => {
        this.updateProgressBar(audio, index);
        localStorage.setItem(`progress_${podcastId}`, audio.currentTime.toString());
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
    const audio: HTMLAudioElement = this.audioPlayers.toArray()[index].nativeElement;

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  updateProgressBar(audio: HTMLAudioElement, index: number): void {
    const progressBar: HTMLElement = this.progressBars.toArray()[index].nativeElement;

    const calculateProgress = (audio: HTMLAudioElement): number => {
      return (audio.currentTime / audio.duration) * 100 || 0;
    };

    const progress = calculateProgress(audio);
    progressBar.style.width = `${progress}%`;

    const currentTime = this.formatTime(audio.currentTime);
    this.currentTimes[index] = currentTime;
  }

  setProgress(event: MouseEvent, index: number): void {
    const progressBar = event.currentTarget as HTMLElement;
    const rect = progressBar.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    const audio: HTMLAudioElement = this.audioPlayers.toArray()[index].nativeElement;
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
