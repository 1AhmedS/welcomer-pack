# Discord Welcome Package

Welcome to the Discord Welcome Package! This package is designed to help you easily send customized welcome messages to new members joining your Discord server using `discord.js`.

## Features

- Send welcome messages with customizable embed options
- Easy to integrate with your existing Discord bot

## Installation

To install the package, run the following command:

```bash
npm install welcomer-pack
```

## Function: sendWelcomeMessage

The `sendWelcomeMessage` function is used to send a customized welcome message to a new member joining your Discord server.

### Parameters

- `member` (GuildMember): The member who has joined the server.
- `options` (WelcomeMessageOptions): An optional object to customize the welcome message embed.

### WelcomeMessageOptions

The `WelcomeMessageOptions` interface allows you to customize the welcome message embed:

- `color` (string): The color of the embed. Default is `#0099ff`.
- `title` (string): The title of the embed. Default is `Welcome!`.
- `description` (string): The description of the embed. Default is `Welcome to the server, {username}!`.
- `thumbnailUrl` (string): The URL of the thumbnail image. Default is the user's avatar URL.

### Example

```typescript
import { Client, GatewayIntentBits } from 'discord.js';
import { sendWelcomeMessage } from 'welcomer-pack';
import { WelcomeMessageOptions } from 'welcomer-pack/types';

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
  ],
});

// Event listener for when a new member joins the server
client.on('guildMemberAdd', (member) => {
  // Define the options for the welcome message embed
  const options: WelcomeMessageOptions = {
    color: '#ff0000', // The color of the embed
    title: 'Hello!', // The title of the embed
    description: `We're glad to have you, ${member.user.username}!`, // The description of the embed
    thumbnailUrl: 'https://example.com/welcome.png', // The URL of the thumbnail image
  };

  // Send the welcome message
  sendWelcomeMessage(member, options);
});

// Log in to Discord with your bot token
client.login('YOUR_BOT_TOKEN');
```
## Contact 

- **Discord :** [discord.gg/hTkzz2ZzJA](https://discord.gg/hTkzz2ZzJA)
- **Instagram :** [@nsl2j](https://instagram.com/nsl2j)
- **GitHub :** [1AhmedS](https://github.com/1AhmedS)
- **X :** [@nsl2j](https://x.com/nsl2j)
- **LinkedIn:** [1AhmedS](https://www.linkedin.com/in/1AhmedS/)



## Support

If you need support or have any questions, you can contact me at:
- [Ahmedtv027@gmail.com](mailto:ahmedtv027@gmail.com)
- [@609t](https://discord.com/users/813844172754649130)
- [Discord Server](discord.gg/hTkzz2ZzJA)

<div align="center" style="margin-top: 50px">
  <h2>Donate 💌</h2>
  <p>
    <a href="https://github.com/1AhmedS">
      <img src="https://img.shields.io/github/followers/1AhmedS?label=Follow&style=social" alt="GitHub Follow"/>
    </a>
    <a href="https://paypal.me/ASamir941">
      <img src="https://img.shields.io/badge/Donate-PayPal-blue.svg" alt="Buy Me a Coffee"/>
    </a>
  </p>
</div>
