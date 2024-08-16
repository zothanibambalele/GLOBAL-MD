//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @GlobalTechInfo
//Telegram: t.me/GlobalTechInc
//GitHub: @GlobalTechInfo

const fs = require('fs');
const chalk = require('chalk');


////============ 🚫JUST CHANGE THOSE WHOM I ADEED //YOUR INFRONT OF ; DON'T CHANGE OTHER THINGS BECAUSE BOT WILL NOT WORK 🚫========\\\\

//owmner v card
global.ytname = "YT: GlobalTechInfo"
global.socialm = "GitHub: GlobalTechInfo"

//========👇 CHANGE AS PER YOUR'S IF YOU WANT 👇 =====//
global.location = "Pakistan, Lahore" // cahnge as per your location
global.botname = '𝐆𝐋𝐎𝐁𝐀𝐋-𝐌𝐃' // if you wana change your bot name
global.ownernumber = ['923444844060'] // your owner number, dont add more than one
global.ownername = 'Stranger' // your owner name
global.premium = ["923444844060"] // your Premium User

//====== 🚫DON'T CHANGE BELOW CREDENTIALS OTHERWISE BOT MIGHT NOT WORK🚫 =====\\
global.websitex = "https://www.youtube.com/@GlobalTechInfo"
global.wagc = "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07"
global.themeemoji = '🪀'
global.wm = "Global Tech Inc."
global.botscript = 'https://github.com/GlobalTechInfo/GLOBAL-MD'
global.packname = "Sticker By"
global.author = "GlobalTechInfo\n\n+923444844060"
global.creator = "923444844060@s.whatsapp.net"
global.xprefix = '.'
//channel id
global.xchannel = {
	jid: '120363319098372999@newsletter'
	}

//bot settings👇 ////====== personalize as you want👇 =======\\\\

global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '91' //set autoblock country code
global.antiforeignnumber = '94' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

////====JUST CHANGE THOSE WHOM I ADEED //UR INFRONT OF ; DON'T CHANGE OTHER THINGS BECAUSE BOT MIGHT NOT WORK====\\\\

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
