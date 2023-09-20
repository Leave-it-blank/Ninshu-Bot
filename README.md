# Ninshu Bot

This is a Discord bot built using Node.js and Discord.js library. It is designed to perform various tasks on a Discord server, such as playing music, sending welcome messages, and more.

## End Points Commands

- [top]
- [ping]
- [help]
- [leaderboard]

## Commands functions

- [top] - Show the top 10 users with the most points as image based leaderboard.
- [ping] - Show the bot's ping.
- [help] - Show the bot's commands.
- [leaderboard] - Show the top 10 users with the most points as text message on discord server.

## Code Structure

- [src] - Contains the source code of the bot.
  - [commands] - Contains the command files.
  - [events] - Contains the event files.
  - [utils] - Contains the utility files.
  - [index.ts] - The main file of the bot.
- [font] - contains font files to generate images for top command.
- [images] - contains logo and other images for top command.
- [services] - contains various services implementations.
  - [redis] - contains the connection hook for redis connections, which is used to connect to the server and fetch users.
  - [prisma] - basic client implementation for prisma, which is used to connect to the database, currently not used.
  - [memes-api] - demo api function to fetch memes.
- [types] - contains types for commands and other required ts types.
- [struct] - contains the basic structure for commands and events.
- [inhibitors] - contains the basic structure for inhibitors.

## Installation - USE YARN Package manager only

1. Run `yarn install` to install the required node modules.
2. Create a `.env` file from the `.env-example` file and fill in the required values.
3. Run `yarn dev` to start the bot in development environment.
4. Run `yarn build` to build the TypeScript files.
5. Run `yarn start` to start the bot in production environment. Make sure to run `yarn build` beforehand.

## Contact

If you have any queries or issues, please contact leaveitblank32@gmail.com.

## Credits

This bot was built using the [blossomcommunity/template](https://github.com/blossomcommunity/template) template.
