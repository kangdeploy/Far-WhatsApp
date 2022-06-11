let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./tmpq7mpzzl9.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler