interface Podcast {
  id: number;
  title: string;
  type: string;
  url: string;
  img: string;
}

export const Podcasts: Podcast[] = [
  {
    id: 1,
    type: 'devaneio',
    title: 'Devaneio Podcast - EP 01 - Vida de Dev Júnior',
    url: '../../assets/podcasts/devaneio/podicast-ep-1.mp3',
    img: '../../assets/imgs/devaneio.png',
  },
  {
    id: 2,
    type: 'devaneio',
    title: 'Devaneio Podcast - EP 02 - Solidão',
    url: '../../assets/podcasts/devaneio/podicast-ep-2.mp3',
    img: '../../assets/imgs/devaneio.png',
  },
  {
    id: 3,
    type: 'metalcast',
    title: 'Metalcast - EP 01 - Megadeth vs Metallica',
    url: '../../assets/podcasts/metalcast/podicast-ep-1.mp3',
    img: '../../assets/imgs/metalcast.png',
  },
  {
    id: 4,
    type: 'metalcast',
    title: 'Metalcast - EP 02 - Underground',
    url: '../../assets/podcasts/metalcast/podicast-ep-1.mp3',
    img: '../../assets/imgs/metalcast.png',
  },
];
