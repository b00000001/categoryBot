import {SlashCommandBuilder, EmbedBuilder} from 'discord.js';
import {initializeApp} from 'firebase/app';
import {getDatabase, ref, onValue} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAoRDFohvxmFv77pjrnDxLORc7U-b2vqGs',
  authDomain: 'cosmosexpress-1183f.firebaseapp.com',
  databaseURL: 'https://cosmosexpress-1183f-default-rtdb.firebaseio.com',
  projectId: 'cosmosexpress-1183f',
  storageBucket: 'cosmosexpress-1183f.appspot.com',
  messagingSenderId: '373631050981',
  appId: '1:373631050981:web:2fc5f8125a38ce05b2600c',
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

module.exports = {
  data: new SlashCommandBuilder()
    .setName('retrievetweet')
    .setDescription('Retrieves a tweet from the database by ID')
    .addStringOption((option) =>
      option
        .setName('id')
        .setDescription('The ID of the tweet')
        .setRequired(true)
    ),
  async execute(interaction) {
    const tweetsRef = ref(database, '/tweets');
    const tweetId = interaction.options.getString('id');
    onValue(tweetsRef, (snapshot) => {
      const data = snapshot.val();
      const tweet = data[tweetId];

      const embed = new EmbedBuilder()
        .setColor('#1DA1F2')
        .setTitle(`@${tweet.author_name}`)
        .setURL(`https://twitter.com/${tweet.author_id}/status/${tweet.id_str}`)
        .setDescription(tweet.text)
        .setTimestamp(new Date(tweet.created_at))
        .setFooter({
            text: `Retrieved from Twitter`,
        });

      interaction.reply({embeds: [embed]});
    });
  },
};
