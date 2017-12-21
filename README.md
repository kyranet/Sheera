# Sheera

What is Sheera? Sheera is the replacement for [Raspberry](https://github.com/kyranet/Raspberry) Discord Bot, written in top of Klasa.

## Features

Basic [**Wake On Lan**](https://en.wikipedia.org/wiki/Wake-on-LAN) command to turn on a PC given a [**MAC address**](https://en.wikipedia.org/wiki/MAC_address) with an exec command. Both limited to bot owner.

## Requirements

- `git` command line ([Linux](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)) installed
- `node` [Version 8.5.0 or higher](https://nodejs.org)
- A Raspberry PI, Odroid, or similar, with Linux and `wakeonlan` installed. (`apt install wakeonlan`)

## Downloading

In a command prompt in your projects folder (wherever that may be) run the following:

```
git clone https://github.com/kyranet/Sheera.git
```

Once finished:

- In the folder from where you ran the git command, run `cd Sheera` and then run `npm install`
- Rename `config.json.example` to `config.json`
- Edit `config.json` and enter your bot token and the YouTube Search API token.
