let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/indonesia'), 'βΏππ₯πππ§π’π₯β’πππ¦π©π² ππ¨π§\nSubscribe : https://www.youtube.com/channel/UCZoVmApPxtLYgUWwBD4nbCw', wm, 'NEXT', '.cecanindo', m)
}

handler.help = ['cecanindo']
handler.tags = ['asupan']
handler.command = /^(cecanindo)$/i
handler.limit = 3
module.exports = handler

