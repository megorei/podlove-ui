export interface PodloveWebPlayerTranscript {
  start: string;
  start_ms: number;
  end: string;
  end_ms: number;
  speaker: string;
  voice: string;
  text: string;
}

export interface PodloveWebPlayerTimelineChapterEntry {
  type: 'chapter';
  active?: boolean;
  index: number;
  start: number;
  end: number;
  title: string;
  image?: string;
  href?: string;
  linkTitle?: string;
}

export interface PodloveWebPlayerSpeaker {
  id: string;
  name: string;
  avatar: string;
  role?: {
    id: string;
    slug: string;
    title: string;
  };
  group?: {
    id: string;
    slug: string;
    title: string;
  };
  comment?: null | string;
}

export interface PodloveWebPlayerTimelineTranscriptEntry {
  type: 'transcript';
  start: number;
  end: number;
  speaker: PodloveWebPlayerSpeaker;
  texts: { start: number; end: number; text: string }[];
}
