interface Podcast {
  id: number;
  title: string;
  type: string;
  url: string;
}

export const Podcasts: Podcast[] = [
  {
    id: 1,
    type: 'devaneio',
    title: 'Devaneio Podcast - EP 01 - Vida de Dev Júnior',
    url: '../../assets/podcasts/devaneio/podicast-ep-1.mp3',
  },
  {
    id: 2,
    type: 'devaneio',
    title: 'Devaneio Podcast - EP 02 - Solidão',
    url: '../../assets/podcasts/devaneio/podicast-ep-2.mp3',
  },
];
