const Discord = require("discord.js");
const Client = require("./Client.js");

/**
 * 
 * @param {Discord.message | Discord.Interaction } message 
 * @param {string[]} args 
 * @param {Client} client 
 */
function RunFunction(message, args, client) { }

class Command {
    /**
     * @typedef {{name: string, description: string, permission: Discord.PermissionString, run: RunFunction}} CommandOptions
     * @param {CommandOptions} options 
     */
    constructor(options) {
        this.cmdArgument = options.cmdArgument;
        this.client = options.client;
        this.name = options.name;
        this.description = options.description;
        this.permission = options.permission;
        this.category = options.category || 'General';
        this.run = options.run;
    }
}

module.exports = Command;