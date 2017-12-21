const { Command } = require('klasa');
const { MAC_ADDRESS } = require('../../config.json');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			permLevel: 10,
			description: 'Wake up the PC'
		});
	}

	async run(msg) {
		await this.client.methods.util.exec(`wakeonlan ${MAC_ADDRESS}`);
		return msg.send('Your PC has successfully waked up.');
	}

};
