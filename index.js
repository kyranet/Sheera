const { Client } = require('klasa');
const config = require('./config.json');

new Client({
	prefix: '>>',
	disabledEvents: [
		'MESSAGE_REACTION_ADD',
		'MESSAGE_REACTION_REMOVE',
		'MESSAGE_REACTION_REMOVE_ALL',
		'USER_UPDATE',
		'USER_NOTE_UPDATE',
		'USER_SETTINGS_UPDATE',
		'PRESENCE_UPDATE',
		'VOICE_STATE_UPDATE',
		'TYPING_START',
		'RELATIONSHIP_ADD',
		'RELATIONSHIP_REMOVE',
		'GUILD_BAN_ADD',
		'GUILD_BAN_REMOVE'
	],
	messageCacheMaxSize: 10
}).login(config.token);
