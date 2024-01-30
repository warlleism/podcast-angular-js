interface Podcast {
  id: number;
  title: string;
  type: string;
  url: string;
  img: string;
  date: string;
}

export const PodcastsTracks: Podcast[] = [
  {
    id: 1,
    date: '01/01/2024',
    type: 'podcast devaneio',
    title: 'Devaneio Podcast - Vida de Dev Júnior',
    url: '../../assets/podcasts/devaneio/podicast-ep-1.mp3',
    img: '../../assets/imgs/devaneio.png',
  },
  {
    id: 2,
    date: '01/01/2024',
    type: 'podcast devaneio',
    title: 'Devaneio Podcast - Independência',
    url: '../../assets/podcasts/devaneio/podicast-ep-2.mp3',
    img: '../../assets/imgs/devaneio.png',
  },
];
