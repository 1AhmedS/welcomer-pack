import { ColorResolvable } from 'discord.js';

export interface WelcomeMessageOptions {
  color?: ColorResolvable;
  title?: string;
  description?: string;
  thumbnailUrl?: string;
}