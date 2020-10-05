const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

exports.run = async(client, message, args, guildConf) => {
    const members = message.guild.members.cache;
    const Members = message.guild.memberCount;
    const bots = members.filter(member => member.user.bot).size
    const humans = message.guild.members.cache.filter(
        member => !member.user.bot
    ).size;
    const online = message.guild.members.cache.filter(
        member => member.presence.status === "online"
    ).size;
    const offline = message.guild.members.cache.filter(
        member => member.presence.status === "offline"
    ).size;
    const dnd = message.guild.members.cache.filter(
        member => member.presence.status === "dnd"
    ).size;
    const idle = message.guild.members.cache.filter(
        member => member.presence.status === "idle"
    ).size;

    const embed = new MessageEmbed()
        .setColor(`${Color}`)
        .setTitle(`Members Information`)
        .addField(`All Members`, Members)
        .addField(`Humans`, humans)
        .addField(`Bots`, bots)
        .addField(
            `Members Status`,
            ` Online: ${online} |  Do Not Disturb: ${dnd} |  Idle: ${idle} |  Offline: ${offline}`
        )
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp();

    message.channel.send(embed);
};
module.exports.help = {
    name: "membercount",
    description: "Check member Count",
    dm: true,
    aliases: ["member", "members"]
}
