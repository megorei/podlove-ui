export interface Podcast {
  show: Show;
  episodes: Episode[];
  hosts: Person[];
}

export interface Transcript {
  voice: string;
  speaker: string;
  start: number;
  end: number;
  text: string;
}

export interface Show {
  title: string;
  description: string;
  link: string;
  poster: string;
  summary: string;
}

export interface Audio {
  url: string;
  size: string;
  mimeType: string;
}

export interface Episode {
  id: string;
  title: string | null;
  publicationDate: string | null;
  description: string | null;
  subtitle: string | null;
  link: string | null;
  duration: number | null;
  content: string | null;
  contributors: Person[];
  poster: string;
  chapters: Chapter[];
  transcripts: Transcript[] | string;
  audio: Audio[];
}

export interface Person {
  id: string;
  name: string;
  avatar?: string;
}

export interface Chapter {
  start: number | string | null;
  duration?: number | null;
  end?: number | null;
  image?: string | null;
  title?: string | null;
  href?: string | null;
}
