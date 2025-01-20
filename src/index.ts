import { GuildMember, EmbedBuilder, TextChannel, ColorResolvable } from 'discord.js';
import { WelcomeMessageOptions } from './types';

export function sendWelcomeMessage(member: GuildMember, options: WelcomeMessageOptions = {}) {
  const channel = member.guild.systemChannel as TextChannel;
  if (!channel) return;

  const color: ColorResolvable = options.color || '#0099ff';

  const welcomeEmbed = new EmbedBuilder()
    .setColor(color)
    .setTitle(options.title || 'Welcome!')
    .setDescription(options.description || `Welcome to the server, ${member.user.username}!`)
    .setThumbnail(options.thumbnailUrl || member.user.displayAvatarURL())
    .setTimestamp();

  channel.send({ embeds: [welcomeEmbed] });
}