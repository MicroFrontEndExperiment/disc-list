export class Longplay {

  constructor() {
    this.id = 0;
    this.title = '';
    this.thumb = '';
    this.value = 0;
    this.category = '';
    this.artist = '';
    this.musics = [];
  }

  id: number;
  title: string;
  thumb: string;
  value: number;
  category: string;
  artist: string;
  musics: Array<Music>;
}

export class Music {

  constructor() {
    this.title = '';
  }

  title: string;
}
