import { ColorResolvable } from 'discord.js';

export interface WelcomeMessageOptions {
  title?: string;
  description?: string;
  thumbnailUrl?: string;
  color?: ColorResolvable;
  channelId?: string; // Add this line
}