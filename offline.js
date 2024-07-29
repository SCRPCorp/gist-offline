const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

// Your bot's token
const token = 'YOUR_BOT_TOKEN';

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    // Create the embed
    const embed = new EmbedBuilder()
        .setTitle('SCRP Global Outage')
        .setDescription('Unfortunately at this time SCRP\'s utility bots and partnering bots are experiencing an outage, we are working to fix this issue and we will keep you updated via our discord: https://discord.com/invite/XSvskAUzdx\n\n-# This has been sent to all SCRP\'s bots, if your bot is actively running with working commands you are permitted to use it.')
        .setColor('Red')
        .setThumbnail('https://assets-cdn.scflrlp.com/images/embeds/SCRP.png');

    // Send the embed to the specified channel
    const channel = client.channels.cache.get('YOUR_CHANNEL_ID');
    if (channel) {
        channel.send({ embeds: [embed] })
            .then(() => {
                // Destroy the client after sending the embed
                client.destroy();
            })
            .catch(console.error);
    } else {
        console.error('Channel not found.');
        client.destroy();
    }
});

// Log in to Discord with your app's token
client.login(token);
