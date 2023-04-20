"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var path = require('path');
var fs = require('fs');
// Require the necessary discord.js classes
var _a = require('discord.js'), Client = _a.Client, Events = _a.Events, GatewayIntentBits = _a.GatewayIntentBits;
var dotenv = require('dotenv');
dotenv.config();
// Create a new client instance
var bot = new Client({ intents: [GatewayIntentBits.Guilds] });
bot.commands = new discord_js_1.Collection();
var commandsPath = path.join(__dirname, './commands');
var commandFiles = fs
    .readdirSync(commandsPath)
    .filter(function (file) { return file.endsWith('.js'); });
var sendTestMsg = function (value) {
    var channel = bot.channels.cache.get('826534615035412511');
    var cosmosExpressChannel = bot.channels.cache.get('1063566933531820163');
    var cosmosspacesChannel = bot.channels.cache.get('1004799751562203136');
    var sparkIBCChannel = bot.channels.cache.get('979218786446090291');
    var comdexChannel = bot.channels.cache.get('892670375702442085');
    var graceChannel = bot.channels.cache.get('1004363225883758633');
    var astrovaultChannel = bot.channels.cache.get('989470482711601184');
    var onenetChannel = bot.channels.cache.get('1024412447693615155');
    var osmosisChannel = bot.channels.cache.get('904357826988765224');
    var daodaoChannel = bot.channels.cache.get('981653676508725439');
    var secretNetworkChannel = bot.channels.cache.get('950425196081315910');
    value = JSON.parse(value);
    var embed = new discord_js_1.EmbedBuilder()
        .setColor('#1DA1F2')
        .setTitle("@" + value.author_name)
        .setURL("https://twitter.com/" + value.author_id + "/status/" + value.id_str)
        .setDescription(value.text)
        .setTimestamp(new Date(value.created_at))
        .setFooter({
        text: "Retrieved from Twitter",
    });
    channel.send({ embeds: [embed] });
    cosmosExpressChannel.send({ embeds: [embed] });
    cosmosspacesChannel.send({ embeds: [embed] });
    sparkIBCChannel.send({ embeds: [embed] });
    comdexChannel.send({ embeds: [embed] });
    graceChannel.send({ embeds: [embed] });
    astrovaultChannel.send({ embeds: [embed] });
    onenetChannel.send({ embeds: [embed] });
    osmosisChannel.send({ embeds: [embed] });
    daodaoChannel.send({ embeds: [embed] });
    secretNetworkChannel.send({ embeds: [embed] });
};
for (var _i = 0, commandFiles_1 = commandFiles; _i < commandFiles_1.length; _i++) {
    var file = commandFiles_1[_i];
    var filePath = path.join(commandsPath, file);
    var command = require(filePath);
    // Set a new item in the Collection with the key as the command name and the value as the exported module
    if ('data' in command && 'execute' in command) {
        bot.commands.set(command.data.name, command);
    }
    else {
        console.log("[WARNING] The command at " + filePath + " is missing a required \"data\" or \"execute\" property.");
    }
}
// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
bot.once(Events.ClientReady, function (c) {
    console.log("Ready! Logged in as " + c.user.tag);
});
bot.on(Events.InteractionCreate, function (interaction) { return __awaiter(void 0, void 0, void 0, function () {
    var command, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!interaction.isChatInputCommand())
                    return [2 /*return*/];
                command = interaction.client.commands.get(interaction.commandName);
                if (!command) {
                    console.error("No command matching " + interaction.commandName + " was found.");
                    return [2 /*return*/];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, command.execute(interaction)];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error("Error executing " + interaction.commandName);
                console.error(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Log in to Discord with your client's token
bot.login(process.env.DISCORD_TOKEN);
exports.default = sendTestMsg;
