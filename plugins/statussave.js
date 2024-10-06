import fs from 'fs';
const { cmd } = require('../command'); // Assuming cmd is imported from command.js
const { sleep } = require('../lib/functions'); // Assuming sleep is defined elsewhere in your bot

// Handle media forwarding and saving
const handleGreeting = async (m, gss, reply) => {
  try {
    const textLower = m.body.toLowerCase();

    const triggerWords = [
      'save','send','dpm','dpn','oni','evanna','ewanna','evahan','ewahan','dapan','meka','mekath','evannako','ewannako','dahan','ewahan','dpam','ewa','eva','dapm','ewano','evano','ewno','ewnna','evnna','snd','ewana','evana','danna','dannako','dannko','dnnko','ewapam','evapam','evapan','ewaham','dako','sv', 'sav', 'seve'
    ];

    if (triggerWords.includes(textLower)) {
      if (m.message && m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo) {
        const quotedMessage = m.message.extendedTextMessage.contextInfo.quotedMessage;

        if (quotedMessage) {
          // Check if it's an image
          if (quotedMessage.imageMessage) {
            const imageCaption = quotedMessage.imageMessage.caption;
            const imageUrl = await gss.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
            await gss.sendMessage(m.from, {
              image: { url: imageUrl },
              caption: imageCaption,
              contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 9999,
                isForwarded: true,
              },
            });
            reply("Image sent successfully!");
          }

          // Check if it's a video
          if (quotedMessage.videoMessage) {
            const videoCaption = quotedMessage.videoMessage.caption;
            const videoUrl = await gss.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
            await gss.sendMessage(m.from, {
              video: { url: videoUrl },
              caption: videoCaption,
              contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 9999,
                isForwarded: true,
              },
            });
            reply("Video sent successfully!");
          }
        }
      }
    }
  } catch (error) {
    console.error('Error:', error);
    reply(`Error: ${error.message}`);
  }
};

// Register command for saving and forwarding media
cmd({
  pattern: 'save', // Command trigger, you can change this as needed
  desc: 'Save and forward quoted media',
  category: 'media', // Example category
  filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  await handleGreeting(m, conn, reply);
});
