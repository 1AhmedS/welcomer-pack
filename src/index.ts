import { GuildMember, EmbedBuilder, TextChannel, ColorResolvable } from 'discord.js';
import { WelcomeMessageOptions, CustomImageURLOptions } from './types';

export function sendWelcomeMessage(member: GuildMember, options: WelcomeMessageOptions = {}) {
  const channel = options.channelId 
    ? (member.guild.channels.cache.get(options.channelId) as TextChannel) 
    : (member.guild.systemChannel as TextChannel);
  if (!channel) return;

  const color: ColorResolvable = options.color || '#0099ff';

  const welcomeEmbed = new EmbedBuilder()
    .setColor(color)
    .setTitle(options.title || 'Welcome!')
    .setDescription(options.description || `Welcome to the server, ${member.user.username}!`)
    .setThumbnail(options.thumbnailUrl || member.user.displayAvatarURL({ dynamic: true } as CustomImageURLOptions))
    .setImage(options.imageUrl || '')
    .setTimestamp();

  channel.send({ embeds: [welcomeEmbed] });
}