var axios = require("axios").default;
const {Client, Intents} = require("discord.js");
// Bot Token 
const axieinfi_Token = "ODgzNjkwNTM1OTkzMzcyNjcz.YTNm8Q.mjEpmLX2TmY_aZRBG6pNSZ0n5no";
// Bot Prefix (Example: $help)
const axieinfi_Prefix = "my ";
// Bot Logo For Message Templates
const axieinfi_Logo = "https://media.discordapp.net/attachments/883353245651701873/895418434895093770/1359b5a1a47e73c394fbb1c859379b4b.jpg";
// Creating The Bot
const axieinfi_Bot = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
// Starting The BOT
axieinfi_Bot.login(axieinfi_Token)

// Axie Infinity Scholars Infos
const axieinfi_Scholars_ID =
[
    "1",
    "2",
    "3",
    "4",

]
const axieinfi_Scholars_Owner = [
    "761936346775420948", //franz
    "278909477980471297", //bael
    "871671461977399366", //wiggles
    "604995116280840197", //A6 harvy jay
]
const axieinfi_Scholars_Ronin =
[
    "0xf7e4e7a865b0a1225e264f5c2440eeff72de1981",//franz
    "0xb0ce1747edc7855b294545a500661f236b35dd50", //bael
    "0x13ef23be1c7c6592f29961802d30e1711f911084",//wiggles
    "0xf06275f2a7a2eca2cc94a0c831ad99deb6d73f41",//A6 Harvy Jay
]

// Set Bot Activity
axieinfi_Bot.on("ready", () => {
    axieinfi_Bot.user.setActivity(axieinfi_Prefix + "command", {type:"PLAYING"});
});

// Creating  my world command
axieinfi_Bot.on("message", msg => {
    if (msg.content === axieinfi_Prefix + "command") {
        TheMessage = axieinfi_Help();
        msg.reply(TheMessage);
    };
});

// Creating my mmr command
axieinfi_Bot.on("message", msg => {
    if (msg.content === axieinfi_Prefix + "mmr") {
        ScholarRonin = HNFT_GetRonin(msg.author.id)
        var options = {
            method: 'GET',
            url: 'https://axie-infinity.p.rapidapi.com/get-update/' + ScholarRonin,
            params: {id: ScholarRonin},
            headers: {
                'x-rapidapi-host': 'axie-infinity.p.rapidapi.com',
                'x-rapidapi-key': '9d5a20f153mshf2fe2795eaf6885p1f915bjsne4fedb5ce7f7'
            }
        }; 
        axios.request(options).then(function (response) {
            msg.reply(HNFT_GetMsgTemplate2(response.data.leaderboard.name, response.data.leaderboard.elo, 2));
        });
    };
});

// Creating my daily command
axieinfi_Bot.on("message", msg => {
    if (msg.content === axieinfi_Prefix + "daily") {
        ScholarRonin = HNFT_GetRonin(msg.author.id)
        var options = {
            method: 'GET',
            url: 'https://axie-infinity.p.rapidapi.com/get-update/' + ScholarRonin,
            params: {id: ScholarRonin},
            headers: {
                'x-rapidapi-host': 'axie-infinity.p.rapidapi.com',
                'x-rapidapi-key': '9d5a20f153mshf2fe2795eaf6885p1f915bjsne4fedb5ce7f7'
            }
        }; 
        axios.request(options).then(function (response) {
            msg.reply(HNFT_GetMsgTemplate2(response.data.leaderboard.name, response.data.slp.todaySoFar, 3));
        });
    };
});

// Creating my totalslp command
axieinfi_Bot.on("message", msg => {
    if (msg.content === axieinfi_Prefix + "totalslp") {
        ScholarRonin = HNFT_GetRonin(msg.author.id)
        var options = {
            method: 'GET',
            url: 'https://axie-infinity.p.rapidapi.com/get-update/' + ScholarRonin,
            params: {id: ScholarRonin},
            headers: {
                'x-rapidapi-host': 'axie-infinity.p.rapidapi.com',
                'x-rapidapi-key': '9d5a20f153mshf2fe2795eaf6885p1f915bjsne4fedb5ce7f7'
            }
        }; 
        axios.request(options).then(function (response) {
            msg.reply(HNFT_GetMsgTemplate2(response.data.leaderboard.name, response.data.slp.total, 1));
        });
    };
});

// Creating my yesterdayslp command
axieinfi_Bot.on("message", msg => {
    if (msg.content === axieinfi_Prefix + "yesterdayslp") {
        ScholarRonin = HNFT_GetRonin(msg.author.id)
        var options = {
            method: 'GET',
            url: 'https://axie-infinity.p.rapidapi.com/get-update/' + ScholarRonin,
            params: {id: ScholarRonin},
            headers: {
                'x-rapidapi-host': 'axie-infinity.p.rapidapi.com',
                'x-rapidapi-key': '9d5a20f153mshf2fe2795eaf6885p1f915bjsne4fedb5ce7f7'
            }
        }; 
        axios.request(options).then(function (response) {
            msg.reply(HNFT_GetMsgTemplate2(response.data.leaderboard.name, response.data.slp.yesterdaySLP, 4));
        });
    };
});

// Embeded Message For The Other Commands
function HNFT_GetMsgTemplate2(m1, m2, type) {
	const { MessageEmbed } = require('discord.js');
	if (type==1) { 
	const exampleEmbed = new MessageEmbed()
		.setColor('#00ebab')
		.setTitle('👨‍🎓 Name: ' + m1)
		.setAuthor('axieinfi', axieinfi_Logo)
		.setDescription('Scholar Account Owned By axieinfi')
		.setThumbnail(axieinfi_Logo)
		.addField('💵 Total SLP', `${m2}`, true)		
		.setTimestamp()
		.setFooter('axieinfi © 2021 - By A7', axieinfi_Logo);
		const FinalMessage = {embeds: [exampleEmbed]};
		return FinalMessage;		
	};	
	if (type==3) { 
	const exampleEmbed = new MessageEmbed()
		.setColor('#00ebab')
		.setTitle('👨‍🎓 Name: ' + m1)
		.setAuthor('axieinfi', axieinfi_Logo)
		.setDescription('Scholar Account Owned By axieinfi')
		.setThumbnail(axieinfi_Logo)
		.addField('💰 Today SLP', `${m2}`, false)		
		.setTimestamp()
		.setFooter('axieinfi © 2021 - By A7', axieinfi_Logo);
		const FinalMessage = {embeds: [exampleEmbed]};
		return FinalMessage;
	};	
	if (type==2) { 
	const exampleEmbed = new MessageEmbed()
		.setColor('#00ebab')
		.setTitle('👨‍🎓 Name: ' + m1)
		.setAuthor('axieinfi', axieinfi_Logo)
		.setDescription('Scholar Account Owned By axieinfi')
		.setThumbnail(axieinfi_Logo)
		.addField('🏆 Account MMR', `${m2}`, true)		
		.setTimestamp()
		.setFooter('axieinfi © 2021 - By A7', axieinfi_Logo);
		const FinalMessage = {embeds: [exampleEmbed]};
		return FinalMessage;
	};	
	if (type==4) { 
	const exampleEmbed = new MessageEmbed()
		.setColor('#00ebab')
		.setTitle('👨‍🎓 Name: ' + m1)
		.setAuthor('axieinfi', axieinfi_Logo)
		.setDescription('Scholar Account Owned By axieinfi')
		.setThumbnail(axieinfi_Logo)
		.addField('💰 Yesterday SLP', `${m2}`, false)		
		.setTimestamp()
		.setFooter('axieinfi © 2021 - By A7', axieinfi_Logo);
		const FinalMessage = {embeds: [exampleEmbed]};
		return FinalMessage;
	};	
}


// Embeded Message For Help Command (For more Design Creativity!)
function axieinfi_Help() {
	const { MessageEmbed } = require('discord.js');
	const exampleEmbed = new MessageEmbed()
		.setColor('#00ebab')
		.setTitle('👋 Welcome To axieinfi Bot Manual')
		.setAuthor('axieinfi', axieinfi_Logo)
		.setDescription('You can track your daily slp, yesterday slp, Total slp, and Current MMR. Just ping @axieinfi7#6969 with your ronin to add your ronin on the bot tracker' )
		.setThumbnail(axieinfi_Logo)
		.addFields(
		)
		.addField('• my daily', 'This command will show you your daily slp', false)
		.addField('• my yesterdayslp', 'This command will show you the slp of yesterdayslp', false)
		.addField('• my totalslp', 'This command will show you the total slp', false)
		.addField('• my mmr', 'This command will show you your MMR in the game', false)
		.setTimestamp()
		.setFooter('axieinfi © 2021 - By A7', axieinfi_Logo);
		
	const FinalMessage = {embeds: [exampleEmbed]};  
    return FinalMessage;  
}

// Get Scholar ID
function A7_GetID (Owner) {
    for (let i = 0; i < axieinfi_Scholars_Owner.length; i++) {
        if (Owner == axieinfi_Scholars_Owner[i]) {
            return axieinfi_Scholars_ID[i];
        };
    };
};

// Get Scholar Ronin
function a7_GetRonin (Owner) {
    for (let i = 0; i < axieinfi_Scholars_Owner.length; i ++) {
        if (Owner == axieinfi_Scholars_Owner[i]) {
            return axieinfi_Scholars_Ronin[i];
        };
    };
};


