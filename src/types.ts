import { ColorResolvable, ImageURLOptions } from 'discord.js';

export interface WelcomeMessageOptions {
  title?: string;
  description?: string;
  thumbnailUrl?: string;
  color?: ColorResolvable;
  channelId?: string;
  imageUrl?: string;
}

export interface CustomImageURLOptions extends ImageURLOptions {
  dynamic?: boolean;
}