const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "/";
var fs = require("fs");
var lineReader = require("line-reader");
var async = require("async");
const firstline = require("firstline");
const generated = new Set();
var os = require("os");

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function (request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function () {
    console.log('App is running, server is listening on port ', app.get('port')); /// tırnak içindekini türkçeye çevirebilirsin
});
bot.on("ready", () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", message => {
    if (message.channel.id === "1263445419451486294") { //Channel_ID Botun Gen Yapacağı Kanalın ID
        if (message.author.bot) return;
        var command = message.content
            .toLowerCase()
            .slice(prefix.length)
            .split(" ")[0];

        if (command === "test") {
            message.channel.send("Bot Çalışıyor"); /// tırnak içindekini türkçeye çevirebilirsin
        }

        if (command === "gen") {
            if (generated.has(message.author.id)) {
                message.channel.send(
                    "Yeni Bir Hesap Oluşturmak İçin 15 Dakika Bekleyiniz. - " + /// tırnak içindekini türkçeye çevirebilirsin
                    message.author
                );
            } else {
                let messageArray = message.content.split(" ");
                let args = messageArray.slice(1);
                if (!args[0])
                    return message.reply("Please, specify the service you want!"); /// tırnak içindekini türkçeye çevirebilirsin
                var fs = require("fs");
                const filePath = __dirname + "/" + args[0] + ".txt";

                fs.readFile(filePath, function (err, data) {
                    if (!err) {
                        data = data.toString();
                        var position = data.toString().indexOf("\n");
                        var firstLine = data.split("\n")[0];
                        message.author.send(firstLine);
                        if (position != -1) {
                            data = data.substr(position + 1);
                            fs.writeFile(filePath, data, function (err) {
                                const embed = {
                                    title: "Account Generated!", /// tırnak içindekini türkçeye çevirebilirsin
                                    description: "Check your dm for the account's information!", /// tırnak içindekini türkçeye çevirebilirsin
                                    color: 8519796,
                                    timestamp: "2019-04-04T14:16:26.398Z",
                                    footer: {
                                        icon_url:
                                            "https://r.resimlink.com/OymuS.png",
                                        text: "Xewis Code Project https://discord.gg/NJRHD44hpb"
                                    },
                                    thumbnail: {
                                        url:
                                            "http://www.compartosanita.it/wp-content/uploads/2019/02/right.png"
                                    },
                                    author: {
                                        name: "Account Generator", /// tırnak içindekini türkçeye çevirebilirsin
                                        url: "https://discordapp.com",
                                        icon_url: bot.displayAvatarURL
                                    },
                                    fields: []
                                };
                                message.channel.send({ embed });
                                generated.add(message.author.id);
                                setTimeout(() => {
                                    // Bir dakika sonra kullanıcıyı setten çıkarır
                                    generated.delete(message.author.id);
                                }, 150000);
                                if (err) {
                                    console.log(err);
                                }
                            });
                        } else {
                            message.channel.send(
                                "Sorry, there isn't any account available for that service!" /// tırnak içindekini türkçeye çevirebilirsin
                            );
                        }
                    } else {
                        message.channel.send(
                            "Sorry, that service doesn't exists on our database" /// tırnak içindekini türkçeye çevirebilirsin
                        );
                    }
                });
            }
        }
        else
            if (command === "stats") {

                message.channel.send(`Total users: ${bot.users.size}`)
            }

        if (command === "add") {
            if (!message.member.hasPermission("ADMINISTRATOR"))
                return message.reply("Sorry, you can't do it, you are not an admin!"); /// tırnak içindekini türkçeye çevirebilirsin
            var fs = require("fs");
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            var account = args[0]
            var service = args[1]
            const filePath = __dirname + "/" + args[1] + ".txt";
            fs.appendFile(filePath, os.EOL + args[0], function (err) {
                if (err) return console.log(err);
                message.channel.send("Done!") /// tırnak içindekini türkçeye çevirebilirsin
            });


        }
        if (command === "create") {
            if (!message.member.hasPermission("ADMINISTRATOR")) 
                return message.reply("Sorry, you can't do it, you are not an admin!"); /// tırnak içindekini türkçeye çevirebilirsin
            var fs = require("fs");
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            const filePath = __dirname + "/" + args[0] + ".txt";
            fs.writeFile(filePath, 'first:first', function (err) {
                if (err) throw err;
                message.channel.send("Done!") /// tırnak içindekini türkçeye çevirebilirsin
            });
        }
        if (command === "restock") {
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            if (!message.member.hasPermission("ADMINISTRATOR"))
                return message.reply("Sorry, you can't do it, you are not an admin!"); /// tırnak içindekini türkçeye çevirebilirsin
            if (!args[0])
                return message.reply(
                    "Please, specify the service you want to restock!" /// tırnak içindekini türkçeye çevirebilirsin
                );
            message.channel.send(
                "@everyone " +
                "**" +
                args[0] +
                "**" +
                " Xewis Code " +
                "<@" +
                message.author.id +
                ">"
            );
        }
    }
});

bot.login("TOKEN"); /// Botun tokenini "TOKEN" Yazan Yere Yapıştır
