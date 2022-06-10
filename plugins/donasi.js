let handler = async m => m.reply(`
let img = 'https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg'

SCRIPT NYA : https://youtu.be/RMixpZRoDOk

Donasi Pulsa 
 •  [083811034750]
 •  [0896-5436-0447]

`.trim()) // Tambah sendiri kalo mau
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler