
const { cmd } = require('../command');
const axios = require('axios');
const fetchJson = async (url) => (await axios.get(url)).data; // Fetch JSON data from a URL


// Define the command to send a menu in text form
// cmd({
//     pattern: "team", // Command pattern for sending the menu
//     desc: "Send a menu in text form with available commands.",
//     category: "info",
//     react: "⚓",
//     filename: __filename // Current file name
// },
// async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
//     try {
//         // Step 1: Create the menu text
//         const menuText = `
// 📋 *🥷🏻𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 𝗧𝗘𝗔𝗠🥷🏻* 📋
        
// 🔱𝙎𝙖𝙙𝙚𝙚𝙥𝙖 𝘾𝙝𝙖𝙢𝙪𝙙𝙞𝙩𝙝 🥷🏻
// ⚒𝗙𝗼𝘂𝗻𝗱𝗲𝗿 & 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿⚒
// 🌀pattern(.sadeepa)

// 🔱𝙅𝙖𝙣𝙞𝙙𝙪 𝙋𝙧𝙖𝙗𝙝𝙖𝙨𝙝𝙖 🗿
// 🖇𝗕𝗲𝘁𝗮 𝗧𝗲𝘀𝘁𝗲𝗿🖇
// 🌀pattern(.janidu)

// 🔱𝙇𝙀𝙊 🦚
// 🖇𝗠𝗼𝘃𝗶𝗲 𝗨𝗽𝗹𝗼𝗮𝗱𝗲𝗿🖇
// 🌀pattern(.leo)


// For more information, contact the Developer.
// https://wa.link/5y5117

// > ᴍᴏᴠɪᴇ ᴜᴘʟᴏᴀᴅᴇʀ ᴛᴇᴀᴍ
//         `;

//         // Step 2: Send the menu text
//         await conn.sendMessage(from, { text: menuText }, { quoted: mek });

//     } catch (error) {
//         console.log(error);
//         reply("An error occurred: " + error.message);
//     }
// });
// Define the 'sendphoto' command to send a photo, caption, and buttons
cmd({
    pattern: "moviecmd", // Command pattern for sending the menu
    desc: "Send a menu in text form with available commands.",
    category: "info",
    react: "⚓",
    filename: __filename // Current file name
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Step 1: Create the menu text
        const menuText = `
📋 *𝗠𝗢𝗩𝗜𝗘 𝗜𝗡𝗙𝗢 𝗦𝗘𝗡𝗗𝗘𝗥 𝗠𝗘𝗡𝗨* 📋
        
🔱𝚄𝙿𝙻𝙾𝙰𝙳 𝙼𝙾𝚅𝙸𝙴 𝙸𝙽𝙵𝙾
🌀pattern(.18480info)
❄️dec (+18 Movie Info upload 480p)

🌀pattern(.18720info)
❄️dec (+18 Movie Info upload 720p)

🌀pattern(480info)
❄️dec (Movie Info upload 480p)

🌀pattern(720info)
❄️dec (Movie Info upload 720p)

🌀pattern(si480info)
❄️dec (Movie Info upload 480p sinhala voice)

🌀pattern(si720info)
❄️dec (Movie Info upload 720p sinhala voice)


🔱𝚞𝚙𝚕𝚘𝚊𝚍 𝚖𝚘𝚟𝚒𝚎 𝚞𝚜𝚒𝚗𝚐 𝚍𝚒𝚛𝚎𝚌𝚝 𝚕𝚒𝚗𝚔

🌀pattern(.save)
❄️dec (Jid save database)

🌀pattern(.uploadfile 'Movie link' | 'Movie Name')
❄️dec (Movie Upload private chat)

🌀pattern(.sendfile 'Movie link' | 'Movie Name')
❄️dec (Movie Upload Group chat, Select Menu jid number)

For more information, contact the Developer.
https://wa.link/5y5117

> ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴛᴇᴀᴍ
        `;

        // Step 2: Send the menu text
        await conn.sendMessage(from, { text: menuText }, { quoted: mek });

    } catch (error) {
        console.log(error);
        reply("An error occurred: " + error.message);
    }
});


cmd({
    pattern: 'sadeepa', // Command trigger
    desc: 'Send a photo, caption, and buttons, with error handling to fetch fallback JSON',
    category: 'media',
    react: '🥷🏻', // React with a send emoji when the command is used
    filename: __filename
},
async (conn, mek, m, { args, reply, from }) => {
    try {
        // Define the buttons for the message
        let buttons = [
            {
                buttonId: 'id1',
                buttonText: { displayText: 'Click Me' },
                type: 1
            },
            {
                buttonId: 'id2',
                buttonText: { displayText: 'More Info' },
                type: 1
            }
        ];

        // Define the photo URL and caption
        const photoUrl = 'https://i.ibb.co/XXc4r8M/176230112.jpg';  // Replace with actual photo URL
        const caption = '*🥷🏻 𝘚𝘈𝘋𝘌𝘌𝘗𝘈 𝘊𝘏𝘈𝘔𝘜𝘋𝘐𝘛𝘏*\n\n\n*⚒𝙁𝙤𝙪𝙣𝙙𝙚𝙧 & 𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧*\n\n🔱 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 𝗚𝗶𝘁𝗵𝘂𝗯 - https://github.com/SadeepaChamudith2006\n\n📱 𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗠𝗲 - https://wa.link/5y5117\n\n\n\n> ꜱᴀᴅᴇᴇᴘᴀ ᴄʜᴀᴍᴜᴅɪᴛʜ';

        // Send the photo with buttons
        const opts = {
            caption: caption,
            footer: 'Choose an option below:',
            buttons: buttons,
            headerType: 4 // For images
        };

        await conn.sendMessage(from, {
            image: { url: photoUrl },
            caption: caption,
            buttons: buttons
        });

    } catch (e) {
        console.error('Error sending photo and buttons:', e.message);

        // Fetch JSON fallback data in case of error

        // Prepare buttons from the fetched JSON data
        let buttons = [{
            buttonId: 'cta_url',
            buttonText: { displayText: datada.buttonText || 'More Info' },
            type: 1
        }];

        // Send fallback message with buttons
        await conn.sendMessage(from, {
            text: 'An error occurred, here’s some fallback information.',
            footer: 'Choose an option below:',
            buttons: buttons,
            headerType: 1
        });

        reply('❌ An error occurred while sending the photo. Fallback data sent instead.');
    }
});

cmd({
    pattern: 'leo', // Command trigger
    desc: 'Send a photo, caption, and buttons, with error handling to fetch fallback JSON',
    category: 'media',
    react: '🗿', // React with a send emoji when the command is used
    filename: __filename
},
async (conn, mek, m, { args, reply, from }) => {
    try {
        // Define the buttons for the message
        let buttons = [
            {
                buttonId: 'id1',
                buttonText: { displayText: 'Click Me' },
                type: 1
            },
            {
                buttonId: 'id2',
                buttonText: { displayText: 'More Info' },
                type: 1
            }
        ];

        // Define the photo URL and caption
        const photoUrl = 'https://i.ibb.co/yNt66B3/914d2499-bc7b-4d12-b0fb-ec3e66b57936.jpg';  // Replace with actual photo URL
        const caption = '*🦚 𝙇𝙀𝙊*\n\n\n*⚒𝗠𝗼𝘃𝗶𝗲 𝗨𝗽𝗹𝗼𝗮𝗱𝗲𝗿*\n\n🔱 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 𝗚𝗶𝘁𝗵𝘂𝗯 - https://github.com/\n\n📱 𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗠𝗲 - https://wa.me/94701294879\n\n\n\n> ʟᴇᴏ';

        // Send the photo with buttons
        const opts = {
            caption: caption,
            footer: 'Choose an option below:',
            buttons: buttons,
            headerType: 4 // For images
        };

        await conn.sendMessage(from, {
            image: { url: photoUrl },
            caption: caption,
            buttons: buttons
        });

    } catch (e) {
        console.error('Error sending photo and buttons:', e.message);

        // Fetch JSON fallback data in case of error

        // Prepare buttons from the fetched JSON data
        let buttons = [{
            buttonId: 'cta_url',
            buttonText: { displayText: datada.buttonText || 'More Info' },
            type: 1
        }];

        // Send fallback message with buttons
        await conn.sendMessage(from, {
            text: 'An error occurred, here’s some fallback information.',
            footer: 'Choose an option below:',
            buttons: buttons,
            headerType: 1
        });

        reply('❌ An error occurred while sending the photo. Fallback data sent instead.');
    }
});


cmd({
    pattern: 'janidu', // Command trigger
    desc: 'Send a photo, caption, and buttons, with error handling to fetch fallback JSON',
    category: 'media',
    react: '📍', // React with a send emoji when the command is used
    filename: __filename
},
async (conn, mek, m, { args, reply, from }) => {
    try {
        // Define the buttons for the message
        let buttons = [
            {
                buttonId: 'id1',
                buttonText: { displayText: 'Click Me' },
                type: 1
            },
            {
                buttonId: 'id2',
                buttonText: { displayText: 'More Info' },
                type: 1
            }
        ];

        // Define the photo URL and caption
        const photoUrl = 'https://www.newenglanddairy.com/wp-content/uploads/Holstein-2.jpg';  // Replace with actual photo URL
        const caption = '*📍 𝙅𝘼𝙉𝙄𝘿𝙐 𝙋𝙍𝘼𝘽𝙃𝘼𝙎𝙃𝘼*\n\n\n*🪡𝗕𝗘𝗧𝗔 𝗧𝗘𝗦𝗧𝗘𝗥*\n\n🔱 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 𝗚𝗶𝘁𝗵𝘂𝗯 - https://github.com/janidu2009\n\n📱 𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗠𝗲 - https://wa.link/apdmj7\n\n\n\n> ᴊᴀɴɪᴅᴜ ᴘʀᴀʙʜᴀꜱʜᴀ';

        // Send the photo with buttons
        const opts = {
            caption: caption,
            footer: 'Choose an option below:',
            buttons: buttons,
            headerType: 4 // For images
        };

        await conn.sendMessage(from, {
            image: { url: photoUrl },
            caption: caption,
            buttons: buttons
        });

    } catch (e) {
        console.error('Error sending photo and buttons:', e.message);

        // Fetch JSON fallback data in case of error

        // Prepare buttons from the fetched JSON data
        let buttons = [{
            buttonId: 'cta_url',
            buttonText: { displayText: datada.buttonText || 'More Info' },
            type: 1
        }];

        // Send fallback message with buttons
        await conn.sendMessage(from, {
            text: 'An error occurred, here’s some fallback information.',
            footer: 'Choose an option below:',
            buttons: buttons,
            headerType: 1
        });

        reply('❌ An error occurred while sending the photo. Fallback data sent instead.');
    }
});

cmd({
    pattern: 'team', // Command trigger
    desc: 'Send a photo, caption, and buttons, with error handling to fetch fallback JSON',
    category: 'media',
    react: '🥷🏻', // React with a send emoji when the command is used
    filename: __filename
},
async (conn, mek, m, { args, reply, from }) => {
    try {
        // Define the buttons for the message
        let buttons = [
            {
                buttonId: 'id1',
                buttonText: { displayText: 'Click Me' },
                type: 1
            },
            {
                buttonId: 'id2',
                buttonText: { displayText: 'More Info' },
                type: 1
            }
        ];

        // Define the photo URL and caption
        const photoUrl = 'https://img.freepik.com/premium-photo/three-cows-are-standing-field-with-one-them-has-tag-ear_793248-2166.jpg';  // Replace with actual photo URL
        const caption = '📋 *🥷🏻𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 𝗧𝗘𝗔𝗠🥷🏻* 📋\n\n\n\n🔱𝙎𝙖𝙙𝙚𝙚𝙥𝙖 𝘾𝙝𝙖𝙢𝙪𝙙𝙞𝙩𝙝 🥷🏻\n⚒𝗙𝗼𝘂𝗻𝗱𝗲𝗿 & 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿\n⚒🌀pattern(.sadeepa)\n\n🔱𝙅𝙖𝙣𝙞𝙙𝙪 𝙋𝙧𝙖𝙗𝙝𝙖𝙨𝙝𝙖 🗿\n🖇𝗕𝗲𝘁𝗮 𝗧𝗲𝘀𝘁𝗲𝗿🖇\n🌀pattern(.janidu)\n\n🔱𝙇𝙀𝙊 🦚\n🖇𝗠𝗼𝘃𝗶𝗲 𝗨𝗽𝗹𝗼𝗮𝗱𝗲𝗿🖇\n🌀pattern(.leo)\n\n\nFor more information, contact the Developer.\nhttps://wa.link/5y5117\n\n\n\n> ᴍᴏᴠɪᴇ ᴜᴘʟᴏᴀᴅᴇʀ ᴛᴇᴀᴍ';

        // Send the photo with buttons
        const opts = {
            caption: caption,
            footer: 'Choose an option below:',
            buttons: buttons,
            headerType: 4 // For images
        };

        await conn.sendMessage(from, {
            image: { url: photoUrl },
            caption: caption,
            buttons: buttons
        });

    } catch (e) {
        console.error('Error sending photo and buttons:', e.message);

        // Fetch JSON fallback data in case of error

        // Prepare buttons from the fetched JSON data
        let buttons = [{
            buttonId: 'cta_url',
            buttonText: { displayText: datada.buttonText || 'More Info' },
            type: 1
        }];

        // Send fallback message with buttons
        await conn.sendMessage(from, {
            text: 'An error occurred, here’s some fallback information.',
            footer: 'Choose an option below:',
            buttons: buttons,
            headerType: 1
        });

        reply('❌ An error occurred while sending the photo. Fallback data sent instead.');
    }
});
