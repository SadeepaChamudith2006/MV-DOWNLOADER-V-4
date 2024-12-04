
const axios = require('axios');
const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, fetchApi} = require('../lib/functions')
const { inputMovie, getMovie, resetMovie } = require("../lib/movie_db")
const fg = require('api-dylux');
const fetch = require('node-fetch');
var os = require('os')

const oce = "`"
const oce3 = "```"
const oce2 = '*'
const pk = "`("
const pk2 = ")`"
const { File } = require('megajs');

const { storenumrepdata } = require('../lib/numrepstore')
function formatNumber(num) {
    return String(num).padStart(1, '0');
} 

const apiz = 'https://api-cine-dyxt-gilt.vercel.app'


cmd({
    pattern: "citvnew",
    react: "📺",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, msr, creator, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, apilink, apikey, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

var numrep = []

	                        var inp = ''
				var jidx = ''	                
				var text = q
				if (q.includes('🎈')) jidx = text.split('🎈')[1]
				if (text.includes('🎈')) { inp = text.split('🎈')[0]}  
    
const response = await fetchApi(`${apiz}/api/cinesubz/tvshow?url=${inp}&apikey=yasiyalk`)
const mov = response.data.data;              
	
var cast = ''
for (let i = 0; i < mov.moviedata.castDetails.cast.length; i++) {
  cast += mov.moviedata.castDetails.cast[i].actor.name + ','
}

var seasons = ''
for (let i = 0; i < mov.episodesDetails.length; i++) {
  seasons += ` *${formatNumber( i + 1)} ` + '||* SEASON 0' + ( i + 1 ) + '\n'
  numrep.push(`${prefix}citvep ${q}🎈${( i + 1 )}`) 
}
    
const output = `📺 *𝖬𝖮𝖵𝖨𝖤-𝖷 𝖳𝖵 𝖲𝖧𝖮𝖶 𝖣𝖮𝖶𝖭𝖫𝖮𝖠𝖣 𝖲𝖸𝖲𝖳𝖤𝖬* 📺


*│ 🎞️ ᴛɪᴛʟᴇ :* ${mov.mainDetails.maintitle}
*│ 🔮 ᴄᴀᴛᴀɢᴏʀɪᴇs :* ${mov.mainDetails.genres} 
*│ 🕵️‍♂️ ᴄʜᴀʀᴀᴄᴛᴇʀs :* ${cast}

▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃

_Select to you want season,_

${seasons}

${config.FOOTER}
`
	
            const mass = await conn.sendMessage(from, { image: { url : mov.mainDetails.imageUrl || '' }, caption: output }, { quoted: mek });
            const jsonmsg = {
             key : mass.key,
             numrep,
             method : 'nondecimal'
            }


await storenumrepdata(jsonmsg)
 } catch (e) {
await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
await conn.sendMessage(from, { text: msr.err }, { quoted : mek })
console.log(e)
await conn.sendMessage(creator, { text: `❌ *Error Accurated !!*\n\n${e}` + '' }, { quoted : mek })
}
})

cmd({
    pattern: "citvep",
    react: "📺",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, msr, creator, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, apilink, apikey, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

var numrep = []

	                        var inp = ''
				var jidx = ''
	                        var sid = ''
				var text = q
				if (q.includes('🎈')) jidx = text.split('🎈')[1]
				if (text.includes('🎈')) { inp = text.split('🎈')[0]
							sid = text.split('🎈')[2]}  
    
const response = await fetchApi(`${apiz}/api/cinesubz/tvshow?url=${inp}&apikey=yasiyalk`)
const mov = response.data.data;  
const ssn = mov.episodesDetails[sid - 1].episodes
	
var cast = ''
for (let i = 0; i < mov.moviedata.castDetails.cast.length; i++) {
  cast += mov.moviedata.castDetails.cast[i].actor.name + ','
}
	
let epi_num = '';
	
  ssn.forEach((episode, i) => {

   var episodeNumber = episode.number.replace(' - ', '.');
   var episodeNumbers = episode.number.replace(' - ', '.');
   var ep_2 = episodeNumber.includes('.') ? episodeNumber.split('.') : ''
   if((ep_2[1] + '').length == 1 ) ep_2[1] = '0' + ep_2[1]
   episodeNumbers = ep_2[0] + '.' + ep_2[1]	 
   episodeNumber = ep_2[1] 
    epi_num += `*1.${i + 2} ||* Season ${sid} - Episode ${episodeNumber}\n`; 
	  numrep.push(`1.${( i + 2 )} ${prefix}ciepgo ${episode.url}🎈${jidx}`)
})
    
const output = `📺 *𝖬𝖮𝖵𝖨𝖤-𝖷 𝖳𝖵 𝖲𝖧𝖮𝖶 𝖣𝖮𝖶𝖭𝖫𝖮𝖠𝖣 𝖲𝖸𝖲𝖳𝖤𝖬* 📺


*│ 🎞️ ᴛɪᴛʟᴇ :* ${mov.mainDetails.maintitle}
*│ 🔮 ᴄᴀᴛᴀɢᴏʀɪᴇs :* ${mov.mainDetails.genres} 
*│ 🕵️‍♂️ ᴄʜᴀʀᴀᴄᴛᴇʀs :* ${cast}

▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃

*1.1 ||* Details

${epi_num}

${config.FOOTER}
`
numrep.push(`1.1 ${prefix}citvdetn ${q}`)
	
            const mass = await conn.sendMessage(from, { image: { url : mov.mainDetails.imageUrl || '' }, caption: output }, { quoted: mek });
            const jsonmsg = {
             key : mass.key,
             numrep,
             method : 'decimal'
            }

console.log(jsonmsg)	
await storenumrepdata(jsonmsg)
 } catch (e) {
await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
await conn.sendMessage(from, { text: msr.err }, { quoted : mek })
console.log(e)
await conn.sendMessage(creator, { text: `❌ *Error Accurated !!*\n\n${e}` + '' }, { quoted : mek })
}
})



cmd({
    pattern: "citvdetn",
    react: "📺",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, prefix, isCmd, command, args, q, msr, backup, creator, isGroup, apilink, apikey, sender, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{

	
if(!q) return await reply(msr.url)
    if (!q.includes('cinesubz.co/tvshow')) return await reply(msr.valid_url)

					const isProcess = await getMovie();
				if(isProcess.is_download){
				var pmt = isProcess.time
				var pt = ( new Date().getTime() - pmt ) / 36000	
				if (pt < 10) return reply(`_වෙනත් චිත්‍රපටයක් බාගත වෙමින් පවතින අතර එය බාගත වීමෙන් පසු නැවත උත්සහ කරන්න.❗_\n\n_බාගත වෙමින් පවතින චිත්‍රපටය ⬆️_\n\n*${isProcess.name}*`)
				}
 				
	
	
	                        var inp = ''
				var jidx = ''
	                        var sid = ''
				var text = q
				if (q.includes('🎈')) jidx = text.split('🎈')[1]
				if (text.includes('🎈')) { inp = text.split('🎈')[0]
							sid = text.split('🎈')[2]}   

	
const anu = await fetchApi(`${apilink}/private/sit1/sc3?url=${inp}&apikey=${apikey}`)
let mov = anu.result.data
await inputMovie(true, inp , new Date().getTime() );
	
var cast = ''
for (let i of mov.cast ){ 
cast += i.name + ','
}
	
let up_mg = await conn.sendMessage(from, { text: msr.tvup }, { quoted: mek })	
	
let yt = `*${mov.title}*


*│ 🕵️‍♂️ ᴄʜᴀʀᴀᴄᴛᴇʀs :* ${cast}


*│ 📌 ᴛᴠ ꜱʜᴏᴡ ʟɪɴᴋ :* ${inp}


*│ 🔮 ᴄᴀᴛᴀɢᴏʀɪᴇs :* ${mov.category}


*⬇️ SEASON 0${sid} ALL EPISODE UPLOADING... ⬆️*

▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃

  💃 *ғᴏʟʟᴏᴡ ᴜs ➢* https://whatsapp.com/channel/0029VaaPfFK7Noa8nI8zGg27


`
const jid = jidx || from
const movImg = mov.mainImage.replace("fit=", "fit")
	
await conn.sendMessage(jid ,  { image : { url : movImg || mov.image || '' } , text : yt + `${config.CAPTION}`})
	
if (jidx === from) { 
await conn.sendMessage(from, { react: { text: '✔', key: mek.key } })
//await conn.sendMessage(from, { text : '*Send Succesfull ✔*' }, { quoted: mek }) 
}	

else {
await conn.sendMessage(from, { text : 'Send Succesfull ✔*' }, { quoted: mek }) 
await conn.sendMessage(from, { react: { text: '✔', key: mek.key } })	
}

await sleep(1000 * 1)
	
} catch (e) {
await resetMovie();
await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
await conn.sendMessage(from, { text: msr.err }, { quoted : mek })
console.log(e)
await conn.sendMessage(creator, { text: `❌ *Error Accurated !!*\n\n${e}` + '' }, { quoted : mek })
}
})
