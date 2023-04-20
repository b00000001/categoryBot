import {Collection, Message, EmbedBuilder} from 'discord.js';
const path = require('path');
const fs = require('fs');
// Require the necessary discord.js classes
const {Client, Events, GatewayIntentBits} = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

// Create a new client instance
const bot = new Client({intents: [GatewayIntentBits.Guilds]});
bot.commands = new Collection();

const commandsPath = path.join(__dirname, './commands');
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith('.js'));

const sendTestMsg = (value) => {
  const channel = bot.channels.cache.get('826534615035412511');
  const cosmosExpressChannel = bot.channels.cache.get('1063566933531820163');
  const cosmosspacesChannel = bot.channels.cache.get('1004799751562203136');
  const sparkIBCChannel = bot.channels.cache.get('979218786446090291');
  const comdexChannel = bot.channels.cache.get('892670375702442085');
  const graceChannel = bot.channels.cache.get('1004363225883758633');
  const astrovaultChannel = bot.channels.cache.get('989470482711601184');
  const onenetChannel = bot.channels.cache.get('1024412447693615155');
  const osmosisChannel = bot.channels.cache.get('904357826988765224');
  const daodaoChannel = bot.channels.cache.get('981653676508725439');
  const secretNetworkChannel = bot.channels.cache.get('950425196081315910');

  value = JSON.parse(value);
  const embed = new EmbedBuilder()
    .setColor('#1DA1F2')
    .setTitle(`@${value.author_name}`)
    .setURL(`https://twitter.com/${value.author_id}/status/${value.id_str}`)
    .setDescription(value.text)
    .setTimestamp(new Date(value.created_at))
    .setFooter({
      text: `Retrieved from Twitter`,
    });
  channel.send({embeds: [embed]});
  cosmosExpressChannel.send({embeds: [embed]});
  cosmosspacesChannel.send({embeds: [embed]});
  sparkIBCChannel.send({embeds: [embed]});
  comdexChannel.send({embeds: [embed]});
  graceChannel.send({embeds: [embed]});
  astrovaultChannel.send({embeds: [embed]});
  onenetChannel.send({embeds: [embed]});
  osmosisChannel.send({embeds: [embed]});
  daodaoChannel.send({embeds: [embed]});
  secretNetworkChannel.send({embeds: [embed]});
};

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  // Set a new item in the Collection with the key as the command name and the value as the exported module
  if ('data' in command && 'execute' in command) {
    bot.commands.set(command.data.name, command);
  } else {
    console.log(
      `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
    );
  }
}

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
bot.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

bot.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = interaction.client.commands.get(interaction.commandName);

  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(`Error executing ${interaction.commandName}`);
    console.error(error);
  }
});
// Log in to Discord with your client's token
bot.login(process.env.DISCORD_TOKEN);

export default sendTestMsg;
